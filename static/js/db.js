/**
 * IndexedDB Wrapper for DSA Platform
 * Handles storage of problem progress, notes, and user settings.
 */

const DB_NAME = 'DSA_DB';
const DB_VERSION = 2; // Incremented version for new store
const STORE_PROBLEMS = 'problems';
const STORE_SESSIONS = 'sessions';

class DSADatabase {
    constructor() {
        this.db = null;
        this.ready = this.init();
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = (event) => {
                console.error('IndexedDB error:', event.target.error);
                reject(event.target.error);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                // Create problems store with 'id' as primary key
                if (!db.objectStoreNames.contains(STORE_PROBLEMS)) {
                    db.createObjectStore(STORE_PROBLEMS, { keyPath: 'id' });
                }
                // Create sessions store
                if (!db.objectStoreNames.contains(STORE_SESSIONS)) {
                    db.createObjectStore(STORE_SESSIONS, { keyPath: 'id' });
                }
            };

            request.onsuccess = async (event) => {
                this.db = event.target.result;
                
                // Final Cleanup of legacy migration flags
                localStorage.removeItem('dsa-db-migrated');
                localStorage.removeItem('dsa-db-migrated-v2');
                
                resolve(this.db);
            };
        });
    }



    /* --- Problem Operations --- */
    async getProblem(id) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS], 'readonly');
            const store = tx.objectStore(STORE_PROBLEMS);
            const request = store.get(id);

            const defaults = {
                id, completed: false, bookmarked: false, revised: false, note: ''
            };

            request.onsuccess = () => {
                const res = request.result;
                if (!res) resolve(defaults);
                else resolve({ ...defaults, ...res });
            };
            request.onerror = () => reject(request.error);
        });
    }

    async saveProblem(data) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS], 'readwrite');
            const store = tx.objectStore(STORE_PROBLEMS);

            // Default Check
            const isCompleted = !!data.completed;
            const isBookmarked = !!data.bookmarked;
            const isRevised = !!data.revised;
            const hasNote = data.note && data.note.trim().length > 0;

            if (!isCompleted && !isBookmarked && !isRevised && !hasNote) {
                // Default state -> Remove from DB
                const request = store.delete(data.id);
                request.onsuccess = () => resolve(true);
                request.onerror = () => reject(request.error);
                return;
            }

            // Minimal Save
            const minimalData = {
                id: data.id,
                lastUpdated: Date.now()
            };
            if (isCompleted) minimalData.completed = true;
            if (isBookmarked) minimalData.bookmarked = true;
            if (isRevised) minimalData.revised = true;
            if (hasNote) minimalData.note = data.note;

            const request = store.put(minimalData);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async updateField(id, field, value) {
        // Optimistic update wrapper
        const problem = await this.getProblem(id);
        problem[field] = value;
        await this.saveProblem(problem);
        return problem;
    }

    async getAllProblems() {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS], 'readonly');
            const store = tx.objectStore(STORE_PROBLEMS);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /* --- Session Operations --- */
    async getSession(id) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_SESSIONS], 'readonly');
            const store = tx.objectStore(STORE_SESSIONS);
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async saveSession(session) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_SESSIONS], 'readwrite');
            const store = tx.objectStore(STORE_SESSIONS);
            const request = store.put(session);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async deleteSession(id) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_SESSIONS], 'readwrite');
            const store = tx.objectStore(STORE_SESSIONS);
            const request = store.delete(id);
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(request.error);
        });
    }

    async getAllSessions() {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_SESSIONS], 'readonly');
            const store = tx.objectStore(STORE_SESSIONS);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /* --- Import / Export --- */

    async exportData() {
        const rawProblems = await this.getAllProblems();
        const rawSessions = await this.getAllSessions();

        // 1. Optimize Problems: Remove default values
        const cleanProblems = rawProblems.map(p => {
            const clean = { id: p.id };
            if (p.completed) clean.completed = true;
            if (p.bookmarked) clean.bookmarked = true;
            if (p.revised) clean.revised = true;
            if (p.note && p.note.trim()) clean.note = p.note;
            if (p.lastUpdated) clean.lastUpdated = p.lastUpdated;
            return clean;
        }).filter(p => Object.keys(p).length > 2); // Keep only if has non-id fields (id + lastUpdated are always there, check logic)
        // Actually earlier logic was: if only id/default, don't store. 
        // Here we just strip defaults. If it becomes just {id, lastUpdated}, that's fine, or we can filter if user wants strict min.
        // User asked "getting default values in json". 

        // 2. Optimize Sessions: Minimize stored problem data
        const cleanSessions = rawSessions.map(s => {
            const cleanS = { ...s };
            if (cleanS.problems) {
                cleanS.problems = cleanS.problems.map(p => {
                    // Extract ID from permalink if missing (legacy fix)
                    const pid = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').pop() : 'unknown');
                    const cleanP = { id: pid };
                    if (p.status && p.status !== 'pending') cleanP.status = p.status; // Optional: keep pending? User said "getting ... values". Usually status is key.
                    // Actually status 'pending' is default for new session problems, but for history we might want to know it was pending.
                    // Let's keep status.
                    cleanP.status = p.status || 'pending';
                    if (p.timeSpentSeconds) cleanP.timeSpentSeconds = p.timeSpentSeconds;
                    if (p.notes) cleanP.notes = p.notes;
                    return cleanP;
                });
            }
            // Clean Session Config Defaults (as requested: "values like any")
            if (cleanS.config) {
                const cleanConfig = { ...cleanS.config };
                Object.keys(cleanConfig).forEach(key => {
                    if (cleanConfig[key] === 'Any') delete cleanConfig[key];
                });
                cleanS.config = cleanConfig;
            }

            // Clean Session Notes
            if (cleanS.notes) {
                const cleanNotes = { ...cleanS.notes };
                Object.keys(cleanNotes).forEach(key => {
                    if (!cleanNotes[key] || cleanNotes[key].trim() === '') delete cleanNotes[key];
                });
                // If notes object is empty, can we delete it? 
                // UI checks `if (session.notes && session.notes.reflection)`
                // So deleting the key is safe.
                if (Object.keys(cleanNotes).length > 0) {
                    cleanS.notes = cleanNotes;
                } else {
                    delete cleanS.notes;
                }
            }

            return cleanS;
        });

        const user = {};
        const nickname = localStorage.getItem('dsa-nickname');
        if (nickname && nickname !== 'Learner') user.nickname = nickname;

        const theme = localStorage.getItem('theme');
        if (theme && theme !== 'light') user.theme = theme;

        const seenTestRunner = localStorage.getItem('dsa-seen-test-runner-prompt');
        if (seenTestRunner === 'true') user.seenTestRunnerPrompt = 'true';

        const seenGuide = localStorage.getItem('dsa-seen-guide-prompt');
        if (seenGuide === 'true') user.seenGuidePrompt = 'true';

        const seenProfileName = localStorage.getItem('dsa-seen-profile-name-prompt');
        if (seenProfileName === 'true') user.seenProfileNamePrompt = 'true';

        const exportObj = {
            version: 1,
            timestamp: Date.now(),
            problems: cleanProblems,
            sessions: cleanSessions,
            user
        };
        return JSON.stringify(exportObj, null, 2);
    }

    async importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (!data.problems && !data.sessions) { // Adjusted check for v2
                throw new Error('Invalid backup format: missing problems or sessions data');
            }

            await this.ready;
            const tx = this.db.transaction([STORE_PROBLEMS, STORE_SESSIONS], 'readwrite');

            // Import problems
            if (data.problems && Array.isArray(data.problems)) {
                const pStore = tx.objectStore(STORE_PROBLEMS);
                for (const item of data.problems) {
                    pStore.put(item);
                }
            }

            // Import sessions
            if (data.sessions && Array.isArray(data.sessions)) {
                const sStore = tx.objectStore(STORE_SESSIONS);
                for (const item of data.sessions) {
                    sStore.put(item);
                }
            } else if (data.problems && !data.sessions) {
                // This case handles older backups that might only have problems
                // No specific action needed here, as problems are handled above.
            }

            // Restore user meta
            if (data.user) {
                if (data.user.nickname) localStorage.setItem('dsa-nickname', data.user.nickname);
                if (data.user.theme) {
                    localStorage.setItem('theme', data.user.theme);
                    document.documentElement.setAttribute('data-theme', data.user.theme);
                    if (data.user.theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }
                if (data.user.seenTestRunnerPrompt) {
                    localStorage.setItem('dsa-seen-test-runner-prompt', data.user.seenTestRunnerPrompt);
                }
                if (data.user.seenGuidePrompt) {
                    localStorage.setItem('dsa-seen-guide-prompt', data.user.seenGuidePrompt);
                }
                if (data.user.seenProfileNamePrompt) {
                    localStorage.setItem('dsa-seen-profile-name-prompt', data.user.seenProfileNamePrompt);
                }
            }

            return new Promise((resolve, reject) => {
                tx.oncomplete = () => {
                    resolve(true);
                };
                tx.onerror = () => reject(tx.error);
            });

        } catch (e) {
            console.error('Import failed', e);
            throw e;
        }
    }


    async clearAll() {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS, STORE_SESSIONS], 'readwrite');
            const pStore = tx.objectStore(STORE_PROBLEMS);
            const sStore = tx.objectStore(STORE_SESSIONS);

            pStore.clear();
            sStore.clear();

            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    }
}

// Singleton Instance
window.dsaDB = new DSADatabase();
