// Theme Toggle Functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Update icon
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        // If the new theme is dark, the icon to switch back to light is 'sun'. 
        // If the new theme is light, the icon to switch to dark is 'moon'.
        themeIcon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
        if (window.lucide) lucide.createIcons();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Fix: Close mobile menu on page show (handles bfcache/back swiping)
window.addEventListener('pageshow', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#mobile-menu a');
    items.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });

    // Smooth Page Transitions
    document.body.classList.remove('page-transitioning');
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}, { passive: true });

// Intercept navigation for smooth fade out
document.addEventListener('click', e => {
    // Close mobile menu if clicked outside
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = e.target.closest('button[onclick="toggleMobileMenu()"]');
    const clickedInsideMenu = e.target.closest('#mobile-menu');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && !clickedInsideMenu && !menuBtn) {
        mobileMenu.classList.add('hidden');
    }

    const link = e.target.closest('a');
    if (!link || !link.href) return;

    // Ignore external links, new tabs, downloads, or anchor links
    const isExternal = link.hostname !== window.location.hostname;
    const isNewTab = link.target === '_blank';
    const isDownload = link.hasAttribute('download');
    const isAnchor = link.getAttribute('href').startsWith('#');

    if (!isExternal && !isNewTab && !isDownload && !isAnchor) {
        // If it's a guide-prompt modal intercept, let header.html handle it first
        const hasSeenGuidePrompt = localStorage.getItem('dsa-seen-guide-prompt');
        const isProblemLink = link.pathname.startsWith('/problems/') && link.pathname !== '/problems/';

        // If header.html will intercept this, skip smooth transition
        const willBeIntercepted = isProblemLink && !hasSeenGuidePrompt;

        if (!willBeIntercepted) {
            e.preventDefault();
            document.body.classList.add('page-transitioning');
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // match transition duration
        }
    }
});

// Handle browser back/forward buttons graceful restore
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        document.body.classList.remove('page-transitioning');
    }
});

// Test Runner Prompt
document.addEventListener('DOMContentLoaded', function() {
    var trModal = document.getElementById('testRunnerModal');
    var trBackdrop = document.getElementById('testRunnerBackdrop');
    var trDownload = document.getElementById('testRunnerDownloadBtn');
    var trSkip = document.getElementById('testRunnerSkipBtn');

    function closeTRModal() {
        if (trModal) {
            trModal.classList.add('hidden');
            trModal.style.display = 'none';
        }
    }

    if (trBackdrop) trBackdrop.addEventListener('click', closeTRModal);
    if (trDownload) trDownload.addEventListener('click', closeTRModal);
    if (trSkip) trSkip.addEventListener('click', closeTRModal);

    document.addEventListener('click', function(e) {
        var link = e.target.closest('a[data-code-download]');
        if (!link) return;
        if (localStorage.getItem('dsa-seen-test-runner-prompt')) return;

        localStorage.setItem('dsa-seen-test-runner-prompt', 'true');
        e.preventDefault();
        e.stopPropagation();

        if (trModal) {
            trModal.classList.remove('hidden');
            trModal.style.display = 'flex';
            if (window.lucide) lucide.createIcons();
        }
        window.open(link.href, '_blank');
    }, true);
});

// Go to Top Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (goToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                goToTopBtn.classList.remove('hidden', 'opacity-0', 'translate-y-4');
                goToTopBtn.classList.add('flex', 'opacity-100', 'translate-y-0');
            } else {
                goToTopBtn.classList.remove('flex', 'opacity-100', 'translate-y-0');
                goToTopBtn.classList.add('hidden', 'opacity-0', 'translate-y-4');
            }
        }, { passive: true });

        goToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
