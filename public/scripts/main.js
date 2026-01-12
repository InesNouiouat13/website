// Particle Effects
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 4 + 4 + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    return particle;
}

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particlesContainer.appendChild(createParticle());
    }
}

// Smooth Scrolling for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Close Mobile Menu on Outside Click
function initMobileMenuClose() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);
        
        // If menu is open and click is outside menu and toggler, close it
        if (navbarCollapse.classList.contains('show') && !isClickInsideMenu && !isClickOnToggler) {
            navbarToggler.click();
        }
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';

        if (window.scrollY > 50) {
            if (isDark) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(129, 140, 248, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            if (isDark) {
                navbar.style.background = 'rgba(30, 41, 59, 0.7)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
            }
        }
    });
}

// Fade In Animation on Scroll
function initFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .timeline-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Typing Effect for Hero Subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 30);
        }, 500);
    }
}

// Skill Tags Glow Effect
function initSkillTagsGlow() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.6)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Mouse Movement Parallax Effect
function initParallaxEffect() {
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            particle.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initSmoothScroll();
    initMobileMenuClose();
    initNavbarScroll();
    initFadeInAnimation();
    initTypingEffect();
    initSkillTagsGlow();
    initParallaxEffect();
});
