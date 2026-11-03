const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        siteNav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});
