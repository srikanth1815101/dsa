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
                await this.migrateFromLocalStorage();
                resolve(this.db);
            };
        });
    }

    async migrateFromLocalStorage() {
        const hasMigrated = localStorage.getItem('dsa-db-migrated-v2');
        if (hasMigrated) return;

        console.log('Migrating data from LocalStorage to IndexedDB...');

        try {
            /* --- Migrate Problems --- */
            // Check if v1 migration occurred, if not do it now
            const v1Migrated = localStorage.getItem('dsa-db-migrated');

            if (!v1Migrated) {
                const bookmarks = JSON.parse(localStorage.getItem('dsa-bookmarks') || '[]');
                const completed = JSON.parse(localStorage.getItem('dsa-completed') || '[]');
                const revised = JSON.parse(localStorage.getItem('dsa-revised') || '[]');
                const notes = JSON.parse(localStorage.getItem('dsa-notes') || '{}');

                const problemIds = new Set([
                    ...bookmarks,
                    ...completed,
                    ...revised,
                    ...Object.keys(notes)
                ]);

                if (problemIds.size > 0) {
                    const tx = this.db.transaction([STORE_PROBLEMS], 'readwrite');
                    const store = tx.objectStore(STORE_PROBLEMS);

                    for (const id of problemIds) {
                        const record = {
                            id: id,
                            bookmarked: bookmarks.includes(id),
                            completed: completed.includes(id),
                            revised: revised.includes(id),
                            note: notes[id] || '',
                            lastUpdated: Date.now()
                        };
                        store.put(record);
                    }
                    await new Promise((resolve, reject) => {
                        tx.oncomplete = resolve;
                        tx.onerror = () => reject(tx.error);
                        tx.onabort = () => reject(new Error('Transaction aborted'));
                    });
                }
                localStorage.setItem('dsa-db-migrated', 'true');
            }

            /* --- Migrate Sessions --- */
            const interviewRaw = localStorage.getItem('interview_db');
            if (interviewRaw) {
                const interviewDB = JSON.parse(interviewRaw);
                if (interviewDB.sessions) {
                    const tx = this.db.transaction([STORE_SESSIONS], 'readwrite');
                    const store = tx.objectStore(STORE_SESSIONS);

                    for (const session of Object.values(interviewDB.sessions)) {
                        store.put(session);
                    }
                    await new Promise((resolve, reject) => {
                        tx.oncomplete = resolve;
                        tx.onerror = () => reject(tx.error);
                        tx.onabort = () => reject(new Error('Transaction aborted'));
                    });
                }
            }

            localStorage.setItem('dsa-db-migrated-v2', 'true');
            console.log('Migration completed successfully.');

        } catch (err) {
            console.error('Migration failed:', err);
        }
    }

    /* --- Problem Operations --- */
    async getProblem(id) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS], 'readonly');
            const store = tx.objectStore(STORE_PROBLEMS);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result || {
                id, completed: false, bookmarked: false, revised: false, note: ''
            });
            request.onerror = () => reject(request.error);
        });
    }

    async saveProblem(data) {
        await this.ready;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction([STORE_PROBLEMS], 'readwrite');
            const store = tx.objectStore(STORE_PROBLEMS);

            // Ensure we update timestamp
            data.lastUpdated = Date.now();

            const request = store.put(data);
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
        const problems = await this.getAllProblems();
        const sessions = await this.getAllSessions();
        const exportObj = {
            version: 2,
            timestamp: Date.now(),
            problems: problems,
            sessions: sessions,
            user: {
                nickname: localStorage.getItem('dsa-nickname') || 'Learner'
            }
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
            if (data.user && data.user.nickname) {
                localStorage.setItem('dsa-nickname', data.user.nickname);
            }

            return new Promise((resolve, reject) => {
                tx.oncomplete = () => {
                    // Force re-migration skip if importing on fresh device
                    localStorage.setItem('dsa-db-migrated', 'true'); // For v1 problems
                    localStorage.setItem('dsa-db-migrated-v2', 'true'); // For v2 overall
                    resolve(true);
                };
                tx.onerror = () => reject(tx.error);
            });

        } catch (e) {
            console.error('Import failed', e);
            throw e;
        }
    }
}

// Singleton Instance
window.dsaDB = new DSADatabase();
