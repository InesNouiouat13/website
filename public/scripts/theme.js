// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const html = document.documentElement;

    // Function to update navbar on theme change
    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        const isDark = html.getAttribute('data-theme') === 'dark';

        if (window.scrollY > 50) {
            if (isDark) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(129, 140, 248, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }
        } else {
            if (isDark) {
                navbar.style.background = 'rgba(30, 41, 59, 0.7)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
            }
        }
    }

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.add('fa-moon');
        themeIcon.classList.remove('fa-sun');
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
        // Update navbar immediately on theme change
        updateNavbar();
    });
});
