// Add/remove 'compact' class on scroll direction, always expand at page bottom
let lastScrollY = window.scrollY || window.pageYOffset;
let compactNavTimeout = null;

function handleCompactNav() {
    const nav = document.querySelector('nav.small');
    if (!nav) return;

    const currentScrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    const atBottom = Math.abs(currentScrollY + windowHeight - docHeight) < 4;

    if (atBottom) {
        // Always expand at the bottom
        nav.classList.remove('compact');
    } else if (currentScrollY < lastScrollY - 4) {
        // Scrolling up, expand
        nav.classList.remove('compact');
    } else if (currentScrollY > lastScrollY + 4) {
        // Scrolling down, compact
        if (compactNavTimeout) clearTimeout(compactNavTimeout);
        compactNavTimeout = setTimeout(() => {
            nav.classList.add('compact');
        }, 50); // debounce for downwards scrolling
    }

    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleCompactNav);
window.addEventListener('load', handleCompactNav);