const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

/* Toggle menu */
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

/* Prevent inside clicks from bubbling */
navLinks.addEventListener('click', (e) => {
    e.stopPropagation();
});

/* Close menu when clicking outside */
document.addEventListener('click', (e) => {
    const clickedInsideNav =
        navLinks.contains(e.target) || hamburger.contains(e.target);

    if (!clickedInsideNav && navLinks.classList.contains('active')) {
        closeNavWithDelay();
    }
});


/* Close menu on link click */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        closeNavWithDelay();
    });
});

/* Optional: Close on ESC key */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNavWithDelay();
    }
});

function closeNavWithDelay() {
    setTimeout(() => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }, 120);
}
