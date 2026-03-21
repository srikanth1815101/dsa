/**
 * Problem Page Utilities
 * Handles Timer, Bookmarks, Completion Status, and Interactions
 * Updated to use IndexedDB (dsaDB)
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeTimer();
    initializeProblemState();
});

/* --- Timer Functionality --- */
let timerInterval;
let seconds = 0;
let isRunning = false;

function initializeTimer() {
    // New design has controls directly visible, no dropdown
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-timer');
    const pauseBtn = document.getElementById('pause-timer');
    const resetBtn = document.getElementById('reset-timer');

    // Toggle Logic for Inline Timer (Smooth Left Expansion)
    const timerBtn = document.getElementById('timer-btn');
    const timerPanel = document.getElementById('timer-panel');

    if (timerBtn && timerPanel) {
        timerBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Our truth for "collapsed on desktop" is the presence of the md:max-w-0 class.
            // If it's there, we are collapsed. If it's missing, we are expanded.
            const isCollapsed = timerPanel.classList.contains('md:max-w-0');

            const desktopCollapsedClasses = ['md:max-w-0', 'md:opacity-0', 'md:overflow-hidden', 'md:px-0'];

            if (isCollapsed) {
                // Open: Remove the constraint classes
                timerPanel.classList.remove(...desktopCollapsedClasses);
            } else {
                // Close: Add the constraint classes back
                timerPanel.classList.add(...desktopCollapsedClasses);
            }
        });
    }

    if (!timerDisplay || !startBtn || !pauseBtn || !resetBtn) return;

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);

    // Toggle buttons
    document.getElementById('start-timer').classList.add('hidden');
    document.getElementById('pause-timer').classList.remove('hidden');
}

function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);

    // Toggle buttons
    document.getElementById('pause-timer').classList.add('hidden');
    document.getElementById('start-timer').classList.remove('hidden');
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const display = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    const displayEl = document.getElementById('timer-display');
    if (displayEl) {
        displayEl.textContent = display;
    }
}

function pad(val) {
    return val.toString().padStart(2, '0');
}

/* --- Local Storage & State Management --- */
async function initializeProblemState() {
    const problemId = getProblemId();
    if (!problemId) return;

    if (!window.dsaDB) {
        console.error("Database not waiting, retrying...");
        setTimeout(initializeProblemState, 100);
        return;
    }

    // Load initial state
    try {
        const problem = await window.dsaDB.getProblem(problemId);

        // Update UIs based on DB state
        updateBookmarkUIState(problem.bookmarked);
        updateRevisionUIState(problem.revised);
        updateCompletionUIState(problem.completed);
        updateNotesUIState(problem.note);

    } catch (e) {
        console.error("Failed to load problem state", e);
    }

    // Hint Toggle Logic
    const hintBtn = document.getElementById('hint-btn');
    const hintDropdown = document.getElementById('hint-dropdown');

    if (hintBtn && hintDropdown) {
        // Toggle on icon click
        hintBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent closing immediately
            hintDropdown.classList.toggle('hidden');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hintBtn.contains(e.target) && !hintDropdown.contains(e.target)) {
                if (!hintDropdown.classList.contains('hidden')) {
                    hintDropdown.classList.add('hidden');
                }
            }
        });
    }

    // Storage Listener for Sync (Optional: implementing cross-tab sync with BroadcastChannel or just simple polling if needed, skipping for now as IDB doesn't fire storage events)
}

function getProblemId() {
    // 1. Try to get explicit ID from template (Hash)
    const hiddenInput = document.getElementById('problem-id');
    if (hiddenInput && hiddenInput.value) {
        return hiddenInput.value;
    }
    // 2. Fallback to URL (legacy/fallback)
    return window.location.pathname.replace(/\/$/, '').split('/').pop();
}

// Bookmark Logic
async function toggleBookmark(e, id) {
    if (id) {
        e.stopPropagation();
        e.preventDefault();
    } else {
        id = e;
    }
    // fallback if called with event as first arg and no id
    if (!id || typeof id !== 'string') id = getProblemId();

    try {
        const problem = await window.dsaDB.getProblem(id);
        const newState = !problem.bookmarked;
        await window.dsaDB.updateField(id, 'bookmarked', newState);

        if (newState) {
            showToast('Problem bookmarked!', 'success');
        } else {
            showToast('Bookmark removed.', 'info');
        }
        updateBookmarkUIState(newState);
    } catch (err) {
        console.error(err);
        showToast('Error updating bookmark', 'error');
    }
}

function updateBookmarkUIState(isBookmarked) {
    const btn = document.getElementById('bookmark-btn');
    if (!btn) return;

    const iconAdd = document.getElementById('bookmark-icon-add');
    const iconRemove = document.getElementById('bookmark-icon-remove');

    // Inactive: Neutral Gray
    const inactiveClasses = ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-400', 'dark:text-gray-500', 'shadow-sm'];
    // Active: Vibrant Amber Gradient
    const activeClasses = ['bg-gradient-to-br', 'from-amber-400', 'to-orange-500', 'text-white', 'shadow-lg', 'shadow-orange-500/20'];

    if (isBookmarked) {
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);
        if (iconAdd) iconAdd.classList.add('hidden');
        if (iconRemove) iconRemove.classList.remove('hidden');
    } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
        if (iconAdd) iconAdd.classList.remove('hidden');
        if (iconRemove) iconRemove.classList.add('hidden');
    }
}

// Revision Logic
async function toggleRevision(e, id) {
    if (id) {
        e.stopPropagation();
        e.preventDefault();
    } else {
        id = e;
    }
    if (!id || typeof id !== 'string') id = getProblemId();

    try {
        const problem = await window.dsaDB.getProblem(id);
        const newState = !problem.revised;
        await window.dsaDB.updateField(id, 'revised', newState);

        if (newState) {
            showToast('Added to Revision list!', 'success');
        } else {
            showToast('Removed from Revision list.', 'info');
        }
        updateRevisionUIState(newState);
    } catch (err) {
        console.error(err);
    }
}

function updateRevisionUIState(isRevised) {
    const btn = document.getElementById('revision-btn');
    if (!btn) return;

    // Inactive: Neutral Gray
    const inactiveClasses = ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-400', 'dark:text-gray-500', 'shadow-sm'];
    // Active: Vibrant Blue Gradient
    const activeClasses = ['bg-gradient-to-br', 'from-blue-400', 'to-indigo-500', 'text-white', 'shadow-lg', 'shadow-indigo-500/20'];

    if (isRevised) {
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);
    } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
    }
}

// Completion Logic
async function toggleCompletion(e, id) {
    if (id) {
        e.stopPropagation();
        e.preventDefault();
    } else if (typeof e === 'string') {
        id = e;
    } else {
        id = e;
    }
    if (!id || typeof id !== 'string') id = getProblemId();

    try {
        const problem = await window.dsaDB.getProblem(id);
        const newState = !problem.completed;
        await window.dsaDB.updateField(id, 'completed', newState);

        if (newState) {
            showToast('Problem marked as complete!', 'success');
            triggerConfetti();
        } else {
            showToast('Problem marked as incomplete.', 'info');
        }
        updateCompletionUIState(newState);
    } catch (err) {
        console.error(err);
    }
}

function updateCompletionUIState(isCompleted) {
    const btn = document.getElementById('mark-complete-btn');
    const text = document.getElementById('mark-complete-text');

    if (!btn) return;

    // Inactive: Neutral Gray
    const inactiveClasses = ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-500', 'dark:text-gray-400', 'shadow-sm'];
    // Active: Vibrant Green Gradient (Matching other icons)
    const activeClasses = ['bg-gradient-to-br', 'from-emerald-400', 'to-green-600', 'text-white', 'shadow-lg', 'shadow-green-500/30'];

    if (isCompleted) {
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);
        if (text) {
            text.textContent = 'Completed';
            text.classList.add('text-white'); // Force white text
        }
    } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
        if (text) {
            text.textContent = 'Complete';
            text.classList.remove('text-white');
        }
    }
}

// Notes Logic
async function saveNotes() {
    const id = getProblemId();
    if (!id) return;

    const textarea = document.getElementById('problem-notes');
    if (!textarea) return;

    const content = textarea.value;

    try {
        await window.dsaDB.updateField(id, 'note', content);

        updateNotesUIState(content);

        // Hide Input
        const inputContainer = document.getElementById('notes-input-container');
        const editBtn = document.getElementById('edit-notes-btn');
        if (inputContainer) inputContainer.classList.add('hidden');
        if (editBtn) editBtn.classList.remove('hidden');

        // UI Feedback
        const status = document.getElementById('notes-status');
        if (status) {
            status.classList.remove('opacity-0');
            setTimeout(() => status.classList.add('opacity-0'), 2000);
        }

        showToast('Notes saved successfully!', 'success');

    } catch (err) {
        console.error(err);
        showToast('Failed to save notes', 'error');
    }
}

function updateNotesUIState(content) {
    const display = document.getElementById('notes-display');
    const textarea = document.getElementById('problem-notes');

    if (textarea) textarea.value = content || '';

    if (display) {
        display.textContent = content || 'Click to add notes...';
        if (!content) display.innerHTML = '<span class="text-gray-400 italic">Click to add notes...</span>';
        display.classList.remove('hidden');
    }

    if (textarea) autoResize(textarea);
}

function enableEditNotes() {
    const display = document.getElementById('notes-display');
    const inputContainer = document.getElementById('notes-input-container');
    const editBtn = document.getElementById('edit-notes-btn');
    const textarea = document.getElementById('problem-notes');

    if (display) display.classList.add('hidden');
    if (editBtn) editBtn.classList.add('hidden');
    if (inputContainer) {
        inputContainer.classList.remove('hidden');
        if (textarea) {
            textarea.focus();
            autoResize(textarea);
        }
    }
}

async function cancelEditNotes() {
    const id = getProblemId();

    // Revert value
    const problem = await window.dsaDB.getProblem(id);
    const textarea = document.getElementById('problem-notes');
    if (textarea) textarea.value = problem.note || '';

    const display = document.getElementById('notes-display');
    const inputContainer = document.getElementById('notes-input-container');
    const editBtn = document.getElementById('edit-notes-btn');

    if (display) display.classList.remove('hidden');
    if (inputContainer) inputContainer.classList.add('hidden');
    if (editBtn) editBtn.classList.remove('hidden');
}

// Auto-expand Textarea
function autoResize(el) {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
}

/* --- Expose functions for onclick events --- */
window.toggleBookmark = toggleBookmark;
window.toggleRevision = toggleRevision;
window.toggleCompletion = toggleCompletion;
window.saveNotes = saveNotes;
window.enableEditNotes = enableEditNotes;
window.cancelEditNotes = cancelEditNotes;
window.autoResize = autoResize;

/* --- Utilities --- */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    // Using fixed z-index and high contrast colors for specific visibility
    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-2xl transform transition-all duration-300 translate-y-10 opacity-0 z-[100] font-medium ${type === 'success' ? 'bg-green-600 text-white' : 'bg-gray-800 text-white'
        }`;
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function triggerConfetti() {
    // Confetti! (Functionality placeholder)
    console.log("Confetti!");
}

/* --- Expose functions for onclick events --- */
window.copyLink = function () {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!', 'success');
};

window.copyCode = function () {
    const codeEl = document.getElementById('code-template');
    if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent);
        showToast('Code copied to clipboard!', 'success');
    }
};

function copySolutionCode(button) {const codeBlock = document.getElementById('solution-code-block');
        if (!codeBlock) return;

        // Try to find the inner code table cell (Chroma layout) to exclude line numbers
        const codeCell = codeBlock.querySelector('td:last-child') || codeBlock;
        const textToCopy = codeCell.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            // TARGETING
            const container = button.querySelector('.copy-icon-container');
            const tooltip = button.querySelector('div');

            // STATES
            // Note: We use innerHTML replacement to be robust against Lucide's SVG replacement behavior
            const checkIconHTML = `<i data-lucide="check" class="w-5 h-5 text-green-500 transition-colors"></i>`;
            const copyIconHTML = `<i data-lucide="copy" class="w-5 h-5 text-gray-400 group-hover/copy:text-blue-500 transition-colors"></i>`;

            // 1. APPLY SUCCESS STATE
            if (container) {
                container.innerHTML = checkIconHTML;
            }

            if (tooltip) {
                tooltip.innerText = 'Copied!';
                tooltip.classList.remove('opacity-0', 'group-hover/copy:opacity-100');
                tooltip.classList.add('opacity-100');
            }

            // Re-render icons immediately
            lucide.createIcons();

            // 2. REVERT STATE (2s Delay)
            setTimeout(() => {
                if (container) {
                    container.innerHTML = copyIconHTML;
                }

                if (tooltip) {
                    tooltip.innerText = 'Copy Code';
                    tooltip.classList.remove('opacity-100');
                    tooltip.classList.add('opacity-0', 'group-hover/copy:opacity-100');
                }

                lucide.createIcons();
            }, 2000);

        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }