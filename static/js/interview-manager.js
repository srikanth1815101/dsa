/**
 * InterviewManager
 * Handles all logic for the Interview Mode (session creation, timer, persistence).
 * Refactored to use IndexedDB (dsaDB)
 */
class InterviewManager {
    constructor() {
        // Active session state (in-memory)
        this.currentSession = null;
        this.onTick = null; // Callback for UI updates

        this.db = {
            sessions: {},
            activeSessionId: null
        };

        this._ready = this.initDB();
    }

    async initDB() {
        if (!window.dsaDB) {
            console.warn("dsaDB not ready yet, waiting...");
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        try {
            const sessionsArr = await window.dsaDB.getAllSessions();
            this.db.sessions = {};
            sessionsArr.forEach(s => {
                this.db.sessions[s.id] = s;
                if (s.state.status === 'active') {
                    this.db.activeSessionId = s.id;
                }
            });
            console.log("InterviewManager: DB Loaded", Object.keys(this.db.sessions).length, "sessions");
        } catch (e) {
            console.error("Failed to load sessions from DB", e);
        }
    }

    async saveSession(session) {
        if (!session) return;
        // Update in-memory
        this.db.sessions[session.id] = session;
        // Persist to IDB
        try {
            await window.dsaDB.saveSession(session);
        } catch (e) {
            console.error("Failed to save session", e);
        }
    }

    async getProblems() {
        if (this._cachedProblems) return this._cachedProblems;
        try {
            const res = await fetch('/problems/index.json');
            this._cachedProblems = await res.json();
            return this._cachedProblems;
        } catch (e) {
            console.error("Failed to fetch problems", e);
            return [];
        }
    }

    filterProblems(problems, filters) {
        let pool = problems;
        if (filters.difficulty && filters.difficulty !== 'Any') {
            pool = pool.filter(p => p.difficulty === filters.difficulty);
        }
        if (filters.company && filters.company !== 'Any') {
            pool = pool.filter(p => p.companies && p.companies.includes(filters.company));
        }
        if (filters.topic && filters.topic !== 'Any') {
            pool = pool.filter(p => p.topics && p.topics.includes(filters.topic));
        }
        return pool;
    }

    async getProblemCount(filters) {
        const problems = await this.getProblems();
        const filtered = this.filterProblems(problems, filters);
        return filtered.length;
    }

    /**
     * Start a new interview session
     * @param {Object} config - { count, duration: minutes, difficulty, topics }
     */
    async startSession(config) {
        await this._ready; // Ensure DB is loaded

        // 1. Fetch all problems
        const problems = await this.getProblems();

        if (!problems || problems.length === 0) {
            alert("Could not load problem bank. Please refresh.");
            return;
        }

        // 2. Filter problems
        const pool = this.filterProblems(problems, config);

        if (pool.length === 0) {
            alert(`No problems found matching your criteria. Try broader filters.`);
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

        // Generate Meaningful Title
        const sessionCount = Object.keys(this.db.sessions).length + 1;
        let title = "Interview Session";

        const hour = new Date().getHours();
        const timeOfDay = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
        const adjectives = [
            "Warmup", "Drill", "Blitz", "Sprint", "Focus",
            "Challenge", "Marathon", "Gauntlet", "Review", "Practice",
            "Grind", "Quest", "Mission", "Circuit", "Program"
        ];
        const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];

        if (config.mode === 'quick') {
            title = `Quick ${timeOfDay} ${randomAdj}`;
        } else {
            // Custom Session: Use filters if explicitly selected
            let prefixes = [];
            if (config.company && config.company !== 'Any') prefixes.push(config.company);
            if (config.topic && config.topic !== 'Any') prefixes.push(config.topic);
            if (config.difficulty && config.difficulty !== 'Any') prefixes.push(config.difficulty);

            // Fallback to "Custom" if no specific filters
            const prefix = prefixes.length > 0 ? prefixes.join(' ') : "Custom";

            title = `${prefix} ${timeOfDay} ${randomAdj}`;
        }

        // Add Unique Identifier
        title = `${title} #${sessionCount}`;

        const session = {
            id,
            title,
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
        this.db.activeSessionId = id;
        await this.saveSession(session);

        // 6. Redirect
        window.location.href = `/interview/session/?id=${id}`;
    }

    /**
     * Load a session by ID
     */
    async loadSession(id) {
        if (!id) return null;
        await this._ready;

        // Try from cache first
        let session = this.db.sessions[id];

        // If not in cache (maybe opened via direct link before init), try fetch
        if (!session) {
            try {
                session = await window.dsaDB.getSession(id);
                if (session) this.db.sessions[id] = session;
            } catch (e) {
                console.error("Session load error", e);
            }
        }

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

            // Allow awaiting this update, but don't block return
            this.saveSession(session);
        }

        this.currentSession = session;
        return session;
    }

    /**
     * Start the internal timer loop
     */
    startTimer(onTickCallback, onFinishCallback) {
        this.onTick = onTickCallback;
        if (!this.currentSession || this.currentSession.state.status !== 'active') return;

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

                this.saveSession(session); // Persist every second
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
            this.saveSession(this.currentSession);
        }
    }

    /**
     * Delete a session
     */
    async deleteSession(id) {
        if (!id) return;
        delete this.db.sessions[id];
        if (this.db.activeSessionId === id) this.db.activeSessionId = null;
        try {
            await window.dsaDB.deleteSession(id);
        } catch (e) {
            console.error("Failed to delete session", e);
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
        this.saveSession(this.currentSession);

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
        const problems = await this.getProblems();

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
    }
}

// Global instance
window.InterviewManager = new InterviewManager();
