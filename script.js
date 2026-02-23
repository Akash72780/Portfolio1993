// Initialize Animations
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false
});

// Interactive Hero Card: Moves slightly with Mouse
const card = document.querySelector('.hero-glass-card');
if(card) {
    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// Navbar Scroll Effect
window.onscroll = function() {
    const nav = document.querySelector('.custom-nav');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.padding = "10px 0";
        nav.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        nav.style.padding = "20px 0";
        nav.style.background = "rgba(15, 23, 42, 0.8)";
    }
};

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        // Optional: Close mobile menu after click
        const menu = document.getElementById('navbarNav');
        if(menu.classList.contains('show')) {
            new bootstrap.Collapse(menu).hide();
        }
    });
});

// Function to animate expertise bars on scroll
const animateSkills = () => {
    const bars = document.querySelectorAll('.mini-progress .fill');
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1.5s ease-out';
            }, 100);
        }
    });
}

window.addEventListener('scroll', animateSkills);
// Refresh AOS to catch new sections
AOS.refresh();
