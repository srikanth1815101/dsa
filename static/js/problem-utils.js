/**
 * Problem Page Utilities
 * Handles Timer, Bookmarks, Completion Status, and Interactions
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
function initializeProblemState() {
    const problemId = getProblemId();
    if (!problemId) return;

    // Bookmarks
    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
        updateBookmarkUI(problemId);
        // Event listener removed; using inline onclick
    }

    // Revision
    const revisionBtn = document.getElementById('revision-btn');
    if (revisionBtn) {
        updateRevisionUI(problemId);
        // Event listener removed; using inline onclick
    }

    // Completion
    const completeBtn = document.getElementById('mark-complete-btn');
    if (completeBtn) {
        updateCompletionUI(problemId);
        // Event listener removed; using inline onclick
    }

    // Hint Toggle Logic
    const hintBtn = document.getElementById('hint-btn');
    const hintDropdown = document.getElementById('hint-dropdown');

    // Notes Logic initialization
    loadNotes(problemId);

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
    } else {
        // Hint elements not found (optional handling)
    }

    // Storage Listener for Sync
    window.addEventListener('storage', (e) => {
        const id = getProblemId();
        if (!id) return;

        if (e.key === 'dsa-bookmarks') {
            updateBookmarkUI(id);
        } else if (e.key === 'dsa-completed') {
            updateCompletionUI(id);
        } else if (e.key === 'dsa-revised') {
            updateRevisionUI(id);
        }
    });
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
function toggleBookmark(e, id) {
    if (id) {
        e.stopPropagation();
        e.preventDefault();
    } else {
        id = e;
    }

    let bookmarks = JSON.parse(localStorage.getItem('dsa-bookmarks') || '[]');
    const index = bookmarks.indexOf(id);

    if (index === -1) {
        bookmarks.push(id);
        showToast('Problem bookmarked!', 'success');
    } else {
        bookmarks.splice(index, 1);
        showToast('Bookmark removed.', 'info');
    }

    localStorage.setItem('dsa-bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI(id);
}

function updateBookmarkUI(id) {
    const bookmarks = JSON.parse(localStorage.getItem('dsa-bookmarks') || '[]');
    const isBookmarked = bookmarks.includes(id);
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
function toggleRevision(e, id) {
    if (id) {
        e.stopPropagation();
        e.preventDefault();
    } else {
        id = e;
    }

    let revised = JSON.parse(localStorage.getItem('dsa-revised') || '[]');
    const index = revised.indexOf(id);

    if (index === -1) {
        revised.push(id);
        showToast('Added to Revision list!', 'success');
    } else {
        revised.splice(index, 1);
        showToast('Removed from Revision list.', 'info');
    }

    localStorage.setItem('dsa-revised', JSON.stringify(revised));
    updateRevisionUI(id);
}

function updateRevisionUI(id) {
    const revised = JSON.parse(localStorage.getItem('dsa-revised') || '[]');
    const isRevised = revised.includes(id);
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
function toggleCompletion(e, id) {
    if (id) {
        // Called as (event, id)
        e.stopPropagation();
        e.preventDefault();
    } else if (typeof e === 'string') {
        // Called as (id)
        id = e;
    } else {
        // Fallback or called as event only? 
        // If called as (e) from listener, we rely on problemId from closure? 
        // No, the listener is () => toggleCompletion(problemId). So e is id.
        id = e;
    }

    let completed = JSON.parse(localStorage.getItem('dsa-completed') || '[]');
    const index = completed.indexOf(id);

    if (index === -1) {
        completed.push(id);
        showToast('Problem marked as complete!', 'success');
        triggerConfetti();
    } else {
        completed.splice(index, 1);
        showToast('Problem marked as incomplete.', 'info');
    }

    localStorage.setItem('dsa-completed', JSON.stringify(completed));
    updateCompletionUI(id);
}

function updateCompletionUI(id) {
    const completed = JSON.parse(localStorage.getItem('dsa-completed') || '[]');
    const isCompleted = completed.includes(id);
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
            text.textContent = 'Mark Complete';
            text.classList.remove('text-white');
        }
    }
}



// Notes Logic
// Notes Logic
function saveNotes() {
    const id = getProblemId();
    if (!id) return;

    const textarea = document.getElementById('problem-notes');
    if (!textarea) return;

    const content = textarea.value;
    let notes = JSON.parse(localStorage.getItem('dsa-notes') || '{}');

    notes[id] = content;
    localStorage.setItem('dsa-notes', JSON.stringify(notes));

    // Update Display
    const display = document.getElementById('notes-display');
    if (display) {
        display.textContent = content || 'Click to add notes...';
        if (!content) display.innerHTML = '<span class="text-gray-400 italic">Click to add notes...</span>';
        display.classList.remove('hidden');
    }

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
}

function loadNotes(id) {
    const textarea = document.getElementById('problem-notes');
    const display = document.getElementById('notes-display');
    if (!textarea) return;

    const notes = JSON.parse(localStorage.getItem('dsa-notes') || '{}');
    const content = notes[id] || '';

    textarea.value = content;

    if (display) {
        display.textContent = content || 'Click to add notes...';
        if (!content) display.innerHTML = '<span class="text-gray-400 italic">Click to add notes...</span>';
    }

    // Trigger auto-resize after setting content
    autoResize(textarea);
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

function cancelEditNotes() {
    const id = getProblemId();
    const textarea = document.getElementById('problem-notes');
    const display = document.getElementById('notes-display');
    const inputContainer = document.getElementById('notes-input-container');
    const editBtn = document.getElementById('edit-notes-btn');

    // Revert value
    const notes = JSON.parse(localStorage.getItem('dsa-notes') || '{}');
    if (textarea) textarea.value = notes[id] || '';

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

// Expose for onclick/oninput
// Expose for onclick/oninput
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
