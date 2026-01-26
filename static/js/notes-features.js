
let manager;

// UI Elements
let tabProblems, tabReflections, containerProblems, containerReflections;
let searchInput, difficultyFilter, difficultyFilterContainer;
let problemListEl, reflectionListEl, noResultsEl, noResultsReflectionsEl;

let currentTab = 'problems'; // 'problems' or 'reflections'
let notesItems = []; // Array of processed note objects
let reflectionItems = []; // Array of processed reflection objects

// Toggle Note Expansion
// Made global so onclick works
window.toggleNote = function (id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    // Check if currently open by checking max-height style or class
    // We will use a class marker 'expanded' logic or just check style
    const isClosed = content.style.maxHeight === '0px' || !content.style.maxHeight;

    // Close ALL currently open notes first
    document.querySelectorAll('[id^="content-"]').forEach(el => {
        // Reset to closed state
        el.style.maxHeight = '0px';
        el.style.opacity = '0';

        const otherId = el.id.replace('content-', '');
        const otherIcon = document.getElementById(`icon-${otherId}`);
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';

        // Remove expanded class from parent container
        if (el.parentElement) {
            el.parentElement.classList.remove('expanded');
        }
    });

    // Clear persistence
    sessionStorage.removeItem('dsa-notes-expanded');

    // If we were opening the clicked note, open it now
    if (isClosed) {
        // We need to set it to scrollHeight, but the padding is on the inner element now
        // content.scrollHeight will capture the height of children
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = '1';
        icon.style.transform = 'rotate(180deg)';

        // Add expanded class to parent container for hover logic
        if (content.parentElement) {
            content.parentElement.classList.add('expanded');
        }

        // Persist expanded state
        sessionStorage.setItem('dsa-notes-expanded', id);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    manager = window.InterviewManager;

    // Fix: Clear expanded state on refresh (Reload)
    // We want it to persist only if navigating back (Back/Forward or logical return)
    try {
        const navEntry = performance.getEntriesByType("navigation")[0];
        if (navEntry && navEntry.type === 'reload') {
            sessionStorage.removeItem('dsa-notes-expanded');
            localStorage.removeItem('dsa-notes-tab');
        }
    } catch (e) {
        console.log("Navigation API not supported", e);
    }

    // Initialize UI Elements
    tabProblems = document.getElementById('tab-problems');
    tabReflections = document.getElementById('tab-reflections');
    containerProblems = document.getElementById('container-problems');
    containerReflections = document.getElementById('container-reflections');

    searchInput = document.getElementById('searchInput');
    difficultyFilter = document.getElementById('difficultyFilter');
    difficultyFilterContainer = document.getElementById('difficultyFilterContainer');

    problemListEl = document.getElementById('problem-notes-list');
    reflectionListEl = document.getElementById('reflections-list');
    noResultsEl = document.getElementById('noResults');
    noResultsReflectionsEl = document.getElementById('noResultsReflections');

    // Restore tab state from URL or LocalStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlTab = urlParams.get('tab');
    const storedTab = localStorage.getItem('dsa-notes-tab');

    if (urlTab && (urlTab === 'problems' || urlTab === 'reflections')) {
        currentTab = urlTab;
    } else if (storedTab && (storedTab === 'problems' || storedTab === 'reflections')) {
        currentTab = storedTab;
    }

    if (manager) {
        loadData();
    } else {
        // Retry if manager not ready (should fit since manager is loaded before)
        setTimeout(loadData, 100);
    }

    updateTabUI();

    // Event Listeners
    if (searchInput) searchInput.addEventListener('input', filterContent);
    if (difficultyFilter) difficultyFilter.addEventListener('change', filterContent);

    if (window.lucide) window.lucide.createIcons();
});

// Make switchTab global so it works with onclick
window.switchTab = function (tab) {
    currentTab = tab;
    localStorage.setItem('dsa-notes-tab', tab);
    updateTabUI();
    filterContent();
};

function updateTabUI() {
    if (!tabProblems) return;
    const activeClass = ['bg-primary', 'text-white', 'shadow-md'];
    const inactiveClass = ['text-gray-500', 'hover:text-gray-900', 'dark:text-gray-400', 'dark:hover:text-white'];

    if (currentTab === 'problems') {
        tabProblems.classList.add(...activeClass);
        tabProblems.classList.remove(...inactiveClass);

        tabReflections.classList.remove(...activeClass);
        tabReflections.classList.add(...inactiveClass);

        containerProblems.classList.remove('hidden');
        containerReflections.classList.add('hidden');

        // Show difficulty filter
        difficultyFilterContainer.classList.remove('hidden');
    } else {
        tabReflections.classList.add(...activeClass);
        tabReflections.classList.remove(...inactiveClass);

        tabProblems.classList.remove(...activeClass);
        tabProblems.classList.add(...inactiveClass);

        containerReflections.classList.remove('hidden');
        containerProblems.classList.add('hidden');

        // Hide difficulty filter for reflections
        difficultyFilterContainer.classList.add('hidden');
    }
}

async function loadData() {
    if (!manager) manager = window.InterviewManager; // Double check

    // Shared Problem Map
    let probMap = {};
    try {
        const allProblems = await manager.getProblems(); // Fetch all problems early
        allProblems.forEach(p => {
            // Normalize ID
            const id = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').pop() : 'unknown');
            probMap[id] = p;
        });
    } catch (e) {
        console.error("Error loading global problem list", e);
    }

    // 1. Load Problem Notes (from DB)
    if (!window.dsaDB) {
        setTimeout(loadData, 200);
        return;
    }

    try {
        const problemsFromDB = await window.dsaDB.getAllProblems();
        const notesData = problemsFromDB.filter(p => p.note && p.note.trim() !== '');

        if (notesData.length > 0) {
            notesItems = notesData.map(dbItem => {
                const id = dbItem.id;
                const prob = probMap[id];
                return {
                    id,
                    title: prob ? prob.title : id,
                    content: dbItem.note,
                    difficulty: prob ? prob.difficulty : 'Unknown',
                    permalink: prob ? prob.permalink : '#',
                    topics: prob ? (prob.topics || []) : []
                };
            });
        } else {
            notesItems = [];
        }
    } catch (e) {
        console.error("Error loading notes from DB", e);
        notesItems = [];
    }

    // 2. Load Reflections (from DB)
    try {
        const sessions = await window.dsaDB.getAllSessions();
        if (sessions) {
            reflectionItems = sessions
                .filter(s => s.notes && s.notes.reflection && s.notes.reflection.trim() !== '')
                .sort((a, b) => b.createdAt - a.createdAt)
                .map(s => {
                    // Enrich session problems with titles/data from probMap
                    const enrichedProblems = (s.problems || []).map(p => {
                        // Extract ID if possible
                        const pid = p.id || (p.permalink ? p.permalink.replace(/\/$/, '').split('/').pop() : null);
                        const globalProb = pid ? probMap[pid] : null;

                        return {
                            title: globalProb ? globalProb.title : (p.title || 'Unknown Problem'),
                            status: p.status,
                            permalink: globalProb ? globalProb.permalink : (p.permalink || '#')
                        };
                    });

                    return {
                        id: s.id,
                        title: s.title || 'Session Reflection',
                        content: s.notes.reflection,
                        date: new Date(s.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
                        problems: enrichedProblems
                    };
                });
        } else {
            reflectionItems = [];
        }
    } catch (e) {
        console.error("Error loading reflections from DB", e);
        reflectionItems = [];
    }

    // Initial Render
    renderNotes(notesItems);
    renderReflections(reflectionItems);

    // Restore expanded state
    const expandedId = sessionStorage.getItem('dsa-notes-expanded');
    if (expandedId) {
        // Wait for DOM to be ready
        setTimeout(() => {
            const targetContent = document.getElementById('content-' + expandedId);
            // Verify it exists (it might have been filtered out or deleted)
            if (targetContent) {
                toggleNote(expandedId);
            }
        }, 100);
    }
}

function renderNotes(items) {
    if (!problemListEl) return;
    if (items.length === 0) {
        // Only show empty state if we really have NO data, not just filtered out
        if (notesItems.length === 0) {
            renderEmptyState(problemListEl, 'No problem notes yet.', 'dsa');
            if (window.lucide) window.lucide.createIcons();
        } else {
            problemListEl.innerHTML = ''; // Cleared by filter, will show noResults block instead
        }
        return;
    }

    problemListEl.innerHTML = items.map(item => `
            <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm overflow-hidden transition-all duration-300 group problem-item">
                <!-- Header / Toggle -->
                <button onclick="toggleNote('note-${item.id}')" class="w-full grid grid-cols-[1fr_auto] md:grid-cols-[1fr_80px_30px] items-start md:items-center gap-3 p-4 bg-gray-50/50 dark:bg-gray-800/50 transition-colors text-left relative z-10">
                    
                    <!-- 1. Title & Tags -->
                    <div class="min-w-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-3 overflow-hidden">
                        <span class="font-bold text-gray-900 dark:text-white truncate transition-colors text-sm md:text-base">
                            ${item.title}
                        </span>
                        
                        <!-- Desktop Hover Tags -->
                        <div class="topic-tags-container hidden md:flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out flex-shrink overflow-hidden min-w-0">
                            ${item.topics.map(t => `
                                <span class="topic-tag px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                                    ${t}
                                </span>
                            `).join('')}
                            <span class="topic-count hidden px-1.5 py-0.5 rounded-md text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 whitespace-nowrap"></span>
                        </div>
                    </div>

                    <!-- 2. Difficulty (Desktop Only) -->
                    <div class="hidden md:flex justify-end md:justify-start">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-center ${getBadgeStyle(item.difficulty)}">
                            ${item.difficulty}
                        </span>
                    </div>

                    <!-- 3. Chevron -->
                    <div class="flex justify-end h-full md:h-auto items-center">
                        <i data-lucide="chevron-down" id="icon-note-${item.id}" class="w-5 h-5 text-gray-400 transition-transform duration-300"></i>
                    </div>
                </button>
                
                <!-- Content Wrapper (Smooth Transition) -->
                <div id="content-note-${item.id}" class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <!-- Inner Content (Padding & Border) -->
                    <div class="p-5 border-t border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800">
                        <div class="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
${item.content}
                        </div>
                        <div class="mt-6 pt-4 flex justify-end">
                            <a href="${item.permalink}" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md">
                                View Problem <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

    if (window.lucide) window.lucide.createIcons();
    setTimeout(adjustTopicTags, 50);
}

// Dynamic Topic Tags Adjustment (Ported from problems page)
function adjustTopicTags() {
    requestAnimationFrame(() => {
        document.querySelectorAll('.problem-item').forEach(item => {
            const container = item.querySelector('.topic-tags-container');
            if (!container || container.offsetParent === null) return;

            const tags = Array.from(container.querySelectorAll('.topic-tag'));
            const counter = container.querySelector('.topic-count');

            // 1. Reset state (show all)
            tags.forEach(t => t.classList.remove('hidden'));
            counter.classList.add('hidden');

            // 2. Check overflow
            if (container.scrollWidth > container.clientWidth) {
                const availableWidth = container.clientWidth;
                const counterWidth = 30;

                let fitCount = 0;
                for (let i = 0; i < tags.length; i++) {
                    const tag = tags[i];
                    const isLast = (i === tags.length - 1);
                    const limit = isLast ? availableWidth : (availableWidth - counterWidth);
                    const tagRight = tag.offsetLeft + tag.offsetWidth;

                    if (tagRight > limit) {
                        break;
                    }
                    fitCount++;
                }

                // 3. Apply Visibility
                if (fitCount < tags.length) {
                    for (let j = fitCount; j < tags.length; j++) {
                        tags[j].classList.add('hidden');
                    }
                    counter.textContent = '+' + (tags.length - fitCount);
                    counter.classList.remove('hidden');
                }
            }
        });
    });
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustTopicTags, 100);
});

function renderReflections(items) {
    if (!reflectionListEl) return;
    if (items.length === 0) {
        if (reflectionItems.length === 0) {
            renderEmptyState(reflectionListEl, 'No interview reflections yet.', 'interview');
            if (window.lucide) window.lucide.createIcons();
        } else {
            reflectionListEl.innerHTML = '';
        }
        return;
    }

    reflectionListEl.innerHTML = items.map(item => `
            <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm overflow-hidden transition-all duration-300 group problem-item">
                <!-- Header -->
                <button onclick="toggleNote('session-${item.id}')" class="w-full grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_30px] items-start md:items-center gap-3 p-4 bg-gray-50/50 dark:bg-gray-800/50 transition-colors text-left relative z-10">
                    
                    <!-- 1. Title & Problem Bubbles -->
                    <div class="min-w-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-3 overflow-hidden">
                        <span class="font-bold text-gray-900 dark:text-white transition-colors truncate text-sm md:text-base">
                            ${item.title}
                        </span>

                        <!-- Problem Bubbles (Hover) -->
                        <div class="topic-tags-container hidden md:flex items-center -space-x-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-[.expanded]:!opacity-0 group-[.expanded]:pointer-events-none transition-all duration-300 ease-out flex-shrink overflow-hidden min-w-0 pl-2">
                            ${item.problems.map((p, i) => `
                                <div class="topic-tag w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-gray-800 shrink-0 relative z-[${10 - i}]
                                    ${p.status === 'solved' ? 'bg-green-500' : p.status === 'attempted' ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'}"
                                    title="${p.title} (${p.status})">
                                    P${i + 1}
                                </div>
                            `).join('')}
                            <span class="topic-count hidden px-1.5 py-0.5 rounded-md text-[10px] font-semibold text-gray-500 bg-gray-100 dark:bg-gray-700 whitespace-nowrap border-2 border-white dark:border-gray-800 ml-2"></span>
                        </div>
                    </div>
                    
                    <!-- 2. Date (Desktop) -->
                     <div class="hidden md:flex justify-end md:justify-start">
                        <span class="text-xs font-medium text-gray-400 whitespace-nowrap">${item.date}</span>
                    </div>

                    <!-- 3. Chevron -->
                    <div class="flex justify-end h-full md:h-auto items-center">
                        <i data-lucide="chevron-down" id="icon-session-${item.id}" class="w-5 h-5 text-gray-400 transition-transform duration-300"></i>
                    </div>
                </button>
                
                <!-- Content Wrapper (Smooth Transition) -->
                <div id="content-session-${item.id}" class="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <!-- Inner Content (Padding & Border) -->
                    <div class="p-5 border-t border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800">
                        <!-- Problem List -->
                        <div class="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                             ${item.problems.map((p, i) => `
                                <div class="flex items-center gap-2">
                                    <div class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white
                                        ${p.status === 'solved' ? 'bg-green-500' : p.status === 'attempted' ? 'bg-yellow-500' : 'bg-gray-400'}"
                                        title="${p.status}">
                                        P${i + 1}
                                    </div>
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                        ${p.title}
                                    </span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
${item.content}
                        </div>
                        <div class="mt-6 pt-4 flex justify-end">
                            <a href="/interview/review/?id=${item.id}" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all shadow-sm hover:shadow-md">
                                View Session <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    if (window.lucide) window.lucide.createIcons();
    setTimeout(adjustTopicTags, 50); // Re-run for reflection tabs too
}

function filterContent() {
    if (!searchInput) return;
    const term = searchInput.value.toLowerCase();
    const diff = difficultyFilter.value;

    if (currentTab === 'problems') {
        const filtered = notesItems.filter(item => {
            const matchesTerm = item.title.toLowerCase().includes(term) || item.content.toLowerCase().includes(term);
            const matchesDiff = !diff || item.difficulty === diff;
            return matchesTerm && matchesDiff;
        });
        renderNotes(filtered);
        noResultsEl.classList.toggle('hidden', filtered.length > 0 || notesItems.length === 0);
    } else {
        const filtered = reflectionItems.filter(item => {
            const matchesTerm = item.title.toLowerCase().includes(term) ||
                item.content.toLowerCase().includes(term) ||
                (item.problems && item.problems.some(p => p.title.toLowerCase().includes(term)));
            return matchesTerm;
        });
        renderReflections(filtered);
        noResultsReflectionsEl.classList.toggle('hidden', filtered.length > 0 || reflectionItems.length === 0);
    }
}

function renderEmptyState(container, message, type) {
    container.innerHTML = `
            <div class="col-span-full py-16 text-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
                 <div class="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="${type === 'dsa' ? 'edit-3' : 'anchor'}" class="w-8 h-8 text-gray-400"></i>
                </div>
                <p class="text-gray-500 dark:text-gray-400 font-medium">${message}</p>
                ${type === 'dsa'
            ? `<a href="/problems/" class="inline-block mt-4 text-primary font-bold hover:underline text-sm">Solve a problem</a>`
            : `<a href="/interview/" class="inline-block mt-4 text-purple-600 font-bold hover:underline text-sm">Start an interview</a>`
        }
            </div>
        `;
}

function getBadgeStyle(diff) {
    if (diff === 'Easy') return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400';
    if (diff === 'Medium') return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400';
    return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400';
}


// --- MODAL & PDF LOGIC ---

window.openDownloadModal = function () {
    const modal = document.getElementById('downloadModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.updateDownloadAvailability) window.updateDownloadAvailability();
}

window.closeDownloadModal = function () {
    const modal = document.getElementById('downloadModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Helper: Strip HTML
function stripHtml(html) {
    if (!html) return '';
    let text = html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<p>/gi, '')
        .replace(/<ul>/gi, '\n')
        .replace(/<\/ul>/gi, '')
        .replace(/<li>/gi, '  • ')
        .replace(/<\/li>/gi, '\n')
        .replace(/<pre>/gi, '\n[Code Block]\n')
        .replace(/<\/pre>/gi, '\n')
        .replace(/<[^>]+>/g, '');
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value.trim();
}

// Check Availability
window.updateDownloadAvailability = async function () {
    const scopeEl = document.querySelector('input[name="notesScope"]:checked');
    const scope = scopeEl ? scopeEl.value : 'all';
    const msgEl = document.getElementById('download-availability-message');
    const btn = document.getElementById('btn-download-pdf');

    if (!msgEl) return;

    msgEl.innerHTML = `<span class="flex items-center justify-center gap-2 text-gray-400"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Checking availability...</span>`;
    if (window.lucide) lucide.createIcons();

    // Fetch fresh problems to check notes
    let problemsCount = 0;
    let reflectionsCount = 0;

    try {
        if (window.dsaDB) {
            const problems = await window.dsaDB.getAllProblems();
            problemsCount = problems.filter(p => p.note && p.note.trim().length > 0).length;

            const sessions = await window.dsaDB.getAllSessions();
            reflectionsCount = sessions.filter(s => s.notes && s.notes.reflection && s.notes.reflection.trim().length > 0).length;
        }
    } catch (e) { console.error("Error checking availability", e); }

    let count = 0;
    if (scope === 'all') count = problemsCount + reflectionsCount;
    if (scope === 'problems') count = problemsCount;
    if (scope === 'reflections') count = reflectionsCount;

    if (count > 0) {
        msgEl.innerHTML = `<span class="text-green-600 dark:text-green-400 flex items-center justify-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> ${count} notes available</span>`;
        if (btn) btn.disabled = false;
    } else {
        msgEl.innerHTML = `<span class="text-red-500 flex items-center justify-center gap-2"><i data-lucide="alert-circle" class="w-4 h-4"></i> No notes found in this category</span>`;
        if (btn) btn.disabled = true;
    }
    if (window.lucide) lucide.createIcons();
}

// Helper: Load Image
function loadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

window.downloadPDF = async function () {
    if (!window.jspdf) {
        console.error("jspdf not loaded");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- 1. CONFIG ---
    const scope = document.querySelector('input[name="notesScope"]:checked').value;
    const inclStatement = document.getElementById('includeStatement').checked;
    const inclComplexity = document.getElementById('includeComplexity').checked;
    const inclExamples = document.getElementById('includeExamples').checked;
    const inclConstraints = document.getElementById('includeConstraints').checked;
    closeDownloadModal();

    const logoImg = await loadImage('/logo.png');
    const nickname = localStorage.getItem('dsa-nickname') || "User";

    // Colors
    const colPrimary = [79, 70, 229];   // Indigo 600
    const colTextMain = [17, 24, 39];    // Gray 900
    const colTextMuted = [107, 114, 128]; // Gray 500
    const colBgAccent = [249, 250, 251];  // Gray 50
    const colLine = [229, 231, 235];      // Gray 200

    // Status Colors for Reflections
    const statusColors = {
        'solved': { bg: [22, 163, 74], txt: [255, 255, 255] },     // Green
        'attempted': { bg: [234, 179, 8], txt: [255, 255, 255] },  // Yellow
        'skipped': { bg: [239, 68, 68], txt: [255, 255, 255] },    // Red
        'default': { bg: [156, 163, 175], txt: [255, 255, 255] }
    };

    // --- 2. DATA ---
    let dataToPrint = [];
    const allProblems = await manager.getProblems();
    const probMap = {};
    allProblems.forEach(p => probMap[p.id || p.permalink.replace(/\/$/, '').split('/').pop()] = p);

    const getItems = (srcArray, type) => {
        srcArray.forEach(item => {
            dataToPrint.push({
                type: type,
                title: item.title,
                content: item.content,
                difficulty: item.difficulty,
                date: item.date || new Date().toLocaleDateString(),
                meta: (type === 'Problem Note' ? (probMap[item.id] || {}) : {}),
                problems: item.problems
            });
        });
    };

    if (scope === 'all' || scope === 'problems') getItems(notesItems, 'Problem Note');
    if (scope === 'all' || scope === 'reflections') getItems(reflectionItems, 'Reflection');

    if (dataToPrint.length === 0) { alert("No notes to print."); return; }

    // --- 3. LAYOUT ---
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentW = pageW - (margin * 2);
    let y = 0;
    let pageNum = 1;

    // --- HEADER ---
    const drawHeader = () => {
        // White Bg
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, pageW, 30, 'F');

        if (logoImg) {
            // Ratio matching website: Logo (w-8 h-8) | Sep (h-6) | Text
            const logoSize = 10;
            const logoRatio = logoImg.width / logoImg.height;
            const renderW = logoSize * logoRatio;

            doc.addImage(logoImg, 'PNG', margin, 10, renderW, logoSize);

            // Separator
            doc.setDrawColor(220, 220, 220); // Gray-200
            doc.setLineWidth(0.5);
            doc.line(margin + renderW + 4, 11, margin + renderW + 4, 19);

            // Brand
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.setTextColor(...colTextMain);
            doc.text("CSRGO DSA", margin + renderW + 8, 18); // Aligned vertically

            // User Note Tagline
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            doc.setTextColor(...colTextMuted);
            // "Srik's Personal Notes"
            const nameText = nickname.endsWith('s') ? nickname + "\u0027 Personal Notes" : nickname + "\u0027s Personal Notes";
            doc.text(nameText, margin + renderW + 8 + 40, 18);
        }

        // Date Right
        doc.setFontSize(9);
        doc.setTextColor(...colTextMuted);
        doc.text(new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }), pageW - margin, 18, { align: 'right' });

        // Bottom Gradient Border
        const gradH = 1;
        const steps = 60;
        // Purple to Blue gradient
        const c1 = [126, 34, 206]; // Purple-700
        const c2 = [37, 99, 235];  // Blue-600

        for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const r = Math.round(c1[0] + t * (c2[0] - c1[0]));
            const g = Math.round(c1[1] + t * (c2[1] - c1[1]));
            const b = Math.round(c1[2] + t * (c2[2] - c1[2]));
            doc.setFillColor(r, g, b);
            doc.rect((i * (pageW / steps)), 29, (pageW / steps) + 1, gradH, 'F');
        }
    };

    const drawFooter = () => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        doc.text(`${pageNum}`, pageW / 2, pageH - 10, { align: 'center' });
        pageNum++;
    };

    const drawWatermark = () => {
        if (logoImg) {
            const size = 50;
            doc.saveGraphicsState();
            doc.setGState(new doc.GState({ opacity: 0.04 }));
            doc.addImage(logoImg, 'PNG', (pageW - size) / 2, (pageH - size) / 2, size, size);
            doc.restoreGraphicsState();
        }
    };

    const checkOverflow = (h) => {
        if (y + h > pageH - margin) {
            drawFooter();
            doc.addPage();
            drawHeader();
            drawWatermark();
            y = 40;
            return true;
        }
        return false;
    };

    // --- RENDER LOOP ---
    for (let i = 0; i < dataToPrint.length; i++) {
        // ONE NOTE PER PAGE
        if (i > 0) {
            drawFooter(); // Footer for prev page
            doc.addPage();
        } else {
            // First page setup
            // No addPage needed for first, just init
        }

        // Re-draw header/watermark for this new page
        drawHeader();
        drawWatermark();
        y = 45; // Start content below header

        const item = dataToPrint[i];

        // --- TITLE BLOCK ---
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(...colTextMain);
        doc.text(item.title, margin, y);
        y += 10;

        // Difficulty / Subtitle
        if (item.type === 'Problem Note') {
            // Badge
            doc.setFontSize(10);
            const badgeText = item.difficulty.toUpperCase();
            let badgeBg = [229, 231, 235];
            let badgeTxt = [55, 65, 81];
            if (item.difficulty === 'Easy') { badgeBg = [220, 252, 231]; badgeTxt = [21, 128, 61]; }
            if (item.difficulty === 'Medium') { badgeBg = [254, 249, 195]; badgeTxt = [161, 98, 7]; }
            if (item.difficulty === 'Hard') { badgeBg = [254, 226, 226]; badgeTxt = [185, 28, 28]; }

            const badgeW = doc.getTextWidth(badgeText) + 10;
            doc.setFillColor(...badgeBg);
            doc.roundedRect(margin, y, badgeW, 7, 2, 2, 'F');
            doc.setTextColor(...badgeTxt);
            doc.text(badgeText, margin + 5, y + 5);

            y += 15;
        } else {
            doc.setFontSize(11);
            doc.setTextColor(...colTextMuted);
            doc.text("REFLECTION SESSION", margin, y);
            y += 10;
        }

        // --- PROBLEM META ---
        if (item.type === 'Problem Note' && item.meta) {
            // 1. Statement
            if (inclStatement && item.meta.summary) {
                const summaryTxt = stripHtml(item.meta.summary);
                const splitSum = doc.splitTextToSize(summaryTxt, contentW - 10);
                const boxH = (splitSum.length * 5) + 15;

                checkOverflow(boxH);

                doc.setFillColor(...colBgAccent);
                doc.roundedRect(margin, y, contentW, boxH, 3, 3, 'F');

                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.setTextColor(79, 70, 229);
                doc.text("PROBLEM", margin + 5, y + 7);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(...colTextMain);
                doc.text(splitSum, margin + 5, y + 14);

                y += boxH + 8;
            }

            // 2. Info Row (Complexity + Constraints + Examples)
            if (inclComplexity || inclConstraints || inclExamples) {
                checkOverflow(30);

                let infoY = y;

                // Complexity
                if (inclComplexity) {
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(10);
                    doc.setTextColor(30, 30, 30);
                    doc.text("Complexity", margin, infoY);
                    infoY += 5;
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(...colTextMuted);
                    const t = `Time: ${item.meta.timeComplexity || '-'}`;
                    const s = `Space: ${item.meta.spaceComplexity || '-'}`;
                    doc.text(`${t}  |  ${s}`, margin, infoY);
                    infoY += 10;
                }

                // Constraints (just count or short)
                if (inclConstraints && item.meta.constraints) {
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(30, 30, 30);
                    doc.text("Constraints", margin, infoY);
                    infoY += 5;
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(...colTextMuted);
                    const cTxt = item.meta.constraints.slice(0, 2).map(c => stripHtml(c)).join('; ');
                    const truncC = cTxt.length > 80 ? cTxt.substring(0, 80) + '...' : cTxt;
                    doc.text(truncC, margin, infoY);
                    infoY += 10;
                }

                y = infoY + 5;
            }
        }

        // --- REFLECTION BUBBLES ---
        if (item.type === 'Reflection' && item.problems) {
            checkOverflow(item.problems.length * 12);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text("PROBLEMS REVIEWED", margin, y);
            y += 8;

            item.problems.forEach((p, idx) => {
                checkOverflow(15);

                // Bubble "P{i}"
                const tag = `P${idx + 1}`;
                const status = (p.status || 'default').toLowerCase();
                const col = statusColors[status] || statusColors['default'];

                doc.setFillColor(...col.bg);
                doc.roundedRect(margin, y - 4, 10, 6, 2, 2, 'F');

                doc.setFontSize(8);
                doc.setTextColor(255, 255, 255);
                doc.text(tag, margin + 5, y, { align: 'center' });

                // Title
                doc.setFontSize(10);
                doc.setTextColor(...colTextMain);
                doc.text(p.title, margin + 14, y);

                y += 10;
            });
            y += 5;
        }

        // --- MY NOTES ---
        if (item.content) {
            y += 5;
            doc.setDrawColor(...colLine);
            doc.line(margin, y, margin + 40, y);
            y += 10;

            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.setTextColor(...colTextMain);
            doc.text("My Notes", margin, y);
            y += 8;

            const cleanContent = stripHtml(item.content);
            const splitContent = doc.splitTextToSize(cleanContent, contentW);

            // Render line by line to handle page breaks naturally
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11); // Good reading size
            doc.setTextColor(55, 65, 81);

            const lineHeight = 6;

            for (let l = 0; l < splitContent.length; l++) {
                if (checkOverflow(lineHeight)) {
                    // layout resets y to top margin
                }
                doc.text(splitContent[l], margin, y);
                y += lineHeight;
            }
        }
    }

    drawFooter(); // Final footer
    doc.save(`${nickname}_DSA_Notes.pdf`);
};
