/**
 * InterviewManager
 * Handles all logic for the Interview Mode (session creation, timer, persistence).
 */
class InterviewManager {
    constructor() {
        this.STORAGE_KEY = 'interview_db';
        this.db = this.loadDB();

        // Auto-save timer
        this.saveInterval = null;

        // Active session state (in-memory)
        this.currentSession = null;
        this.onTick = null; // Callback for UI updates
    }

    /**
     * Load the database from localStorage or initialize defaults.
     */
    loadDB() {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (raw) {
            try {
                return JSON.parse(raw);
            } catch (e) {
                console.error("Failed to parse interview DB", e);
            }
        }
        return {
            sessions: {},
            activeSessionId: null
        };
    }

    saveDB() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.db));
    }

    /**
     * Start a new interview session
     * @param {Object} config - { count, duration: minutes, difficulty, topics }
     */
    async startSession(config) {
        // 1. Fetch all problems
        let problems = [];
        try {
            const res = await fetch('/problems/index.json');
            problems = await res.json();
        } catch (e) {
            console.error("Failed to load problems", e);
            alert("Could not load problem bank. Please refresh.");
            return;
        }

        // 2. Filter problems
        let pool = problems;
        if (config.difficulty && config.difficulty !== 'Any') {
            pool = pool.filter(p => p.difficulty === config.difficulty);
        }

        // Filter by Company
        if (config.company && config.company !== 'Any') {
            pool = pool.filter(p => p.companies && p.companies.includes(config.company));
        }

        // Filter by Topic (assuming config.topic is a single string for now)
        if (config.topic && config.topic !== 'Any') {
            pool = pool.filter(p => p.topics && p.topics.includes(config.topic));
        }

        // Filter by Time (ensure we have enough problems that fit roughly? No, just random is fine)

        if (pool.length === 0) {
            alert(`No problems found matching your criteria. Try broader filters.`);
            return;
        }

        if (pool.length === 0) {
            alert(`No problems found for difficulty: ${config.difficulty}. Try 'Any'.`);
            return;
        }

        // 3. Select random problems
        const selected = [];
        const count = Math.min(config.count || 1, pool.length);
        const usedIndices = new Set();

        while (selected.length < count) {
            const idx = Math.floor(Math.random() * pool.length);
            if (!usedIndices.has(idx)) {
                usedIndices.add(idx);
                selected.push({
                    ...pool[idx],
                    status: 'pending',
                    timeSpentSeconds: 0,
                    notes: ''
                });
            }
        }

        // 4. Create Session Object
        const id = crypto.randomUUID();
        const now = Date.now();
        const durationSeconds = (config.duration || 30) * 60;

        const session = {
            id,
            createdAt: now,
            config,
            state: {
                status: 'active',
                startedAt: now,
                lastTickAt: now,
                remainingSeconds: durationSeconds,
                currentProblemIndex: 0
            },
            problems: selected,
            notes: {
                reflection: '',
                general: ''
            }
        };

        // 5. Save and Activate
        this.db.sessions[id] = session;
        this.db.activeSessionId = id;
        this.saveDB();

        // 6. Redirect
        window.location.href = `/interview/session/?id=${id}`;
    }

    /**
     * Load a session by ID
     */
    loadSession(id) {
        if (!id) return null;
        const session = this.db.sessions[id];
        if (!session) return null;

        // Drift check (if tab was closed)
        if (session.state.status === 'active') {
            const now = Date.now();
            const lastTick = session.state.lastTickAt || session.state.startedAt;
            const elapsedSinceLastTick = Math.floor((now - lastTick) / 1000);

            // If reasonable gap (> 5 seconds), deduct from remaining
            if (elapsedSinceLastTick > 5) {
                console.log(`Compensating for time drift: -${elapsedSinceLastTick}s`);
                session.state.remainingSeconds -= elapsedSinceLastTick;
                if (session.state.remainingSeconds <= 0) {
                    session.state.remainingSeconds = 0;
                    session.state.status = 'completed'; // Time's up
                }
            }
            session.state.lastTickAt = now;
        }

        this.currentSession = session;
        return session;
    }

    /**
     * Start the internal timer loop
     */
    startTimer(onTickCallback, onFinishCallback) {
        this.onTick = onTickCallback;
        if (this.currentSession.state.status !== 'active') return;

        // Clear existing
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            const now = Date.now();
            const session = this.currentSession;

            if (session.state.status !== 'active') {
                clearInterval(this.timerInterval);
                return;
            }

            // Real-time delta
            const delta = Math.floor((now - session.state.lastTickAt) / 1000);
            if (delta >= 1) {
                session.state.remainingSeconds -= delta;

                // Track time for current problem
                if (session.state.remainingSeconds > 0) {
                    const currentProb = session.problems[session.state.currentProblemIndex];
                    if (currentProb) {
                        currentProb.timeSpentSeconds = (currentProb.timeSpentSeconds || 0) + delta;
                    }
                }

                session.state.lastTickAt = now;

                if (session.state.remainingSeconds <= 0) {
                    session.state.remainingSeconds = 0;

                    if (onFinishCallback) {
                        clearInterval(this.timerInterval); // Stop ticking
                        onFinishCallback();
                    } else {
                        this.endSession();
                    }
                }

                this.saveDB(); // Persist every second (or debounced)
                if (this.onTick) this.onTick(session);
            }
        }, 1000);
    }

    /**
     * Update current problem notes or status
     */
    updateProblem(index, updates) {
        if (!this.currentSession) return;
        const prob = this.currentSession.problems[index];
        if (prob) {
            Object.assign(prob, updates);
            this.saveDB();
        }
    }

    /**
     * Mark interview as done
     */
    endSession() {
        if (!this.currentSession) return;
        this.currentSession.state.status = 'completed';
        this.currentSession.state.endedAt = Date.now();
        this.db.activeSessionId = null; // No longer active
        this.saveDB();

        // Redirect if not already on review
        if (!window.location.href.includes('review')) {
            window.location.href = `/interview/review/?id=${this.currentSession.id}`;
        }
    }

    /**
     * Format seconds to MM:SS
     */
    formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);

        if (h > 0) {
            return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    /**
     * Fetch available filter options (companies, topics, etc.)
     */
    async fetchFilterOptions() {
        try {
            const res = await fetch('/problems/index.json');
            const problems = await res.json();

            const companies = new Set();
            const topics = new Set();

            problems.forEach(p => {
                if (p.companies) p.companies.forEach(c => companies.add(c));
                if (p.topics) p.topics.forEach(t => topics.add(t));
            });

            return {
                companies: Array.from(companies).sort(),
                topics: Array.from(topics).sort()
            };
        } catch (e) {
            console.error("Failed to fetch filter options", e);
            return { companies: [], topics: [] };
        }
    }
}

// Global instance
window.InterviewManager = new InterviewManager();
