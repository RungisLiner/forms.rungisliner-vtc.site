document.addEventListener('DOMContentLoaded', function() {
    // Animation des statistiques
    function animateStats() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const partnaireCount = parseInt(statsSection.dataset.partnaireCount) || 0;
                const discordMembers = parseInt(statsSection.dataset.discordMembers) || 0;
                const routiersCount = parseInt(statsSection.dataset.routiersCount) || 0;

                animateValue('partnaire-count', 0, partnaireCount, 2000);
                animateValue('discord-members-count', 0, discordMembers, 2000);
                animateValue('routiers-count', 0, routiersCount, 2000);

                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // Fonction d'animation
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.textContent = "+" + " " + Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Initialisation
    animateStats();

    // Initialisation
    document.addEventListener('DOMContentLoaded', function () {
        animateStats();

        // Menu mobile
        const navToggle = document.createElement('button');
        navToggle.className = 'nav-toggle';
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navToggle.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('show');
        });

        document.querySelector('.corporate-nav .container').prepend(navToggle);
    });


    const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.querySelector('.play-button').addEventListener('click', function () {
    const placeholder = document.querySelector('.video-placeholder');
    const video = document.getElementById('rungis-video');

    placeholder.style.display = 'none'; // cache l’image
    video.style.display = 'block';      // affiche la vidéo
    video.play();                       // lance la lecture
});

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("mobileToggle");
    const navLinks = document.querySelector(".nav-links");

    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });