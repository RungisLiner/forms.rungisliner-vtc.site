document.addEventListener('DOMContentLoaded', function () {
    // Animation des statistiques
    function animateStats() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const partnerCount = parseInt(statsSection.dataset.partnerCount) || 0;
                const driversCount = parseInt(statsSection.dataset.driversCount) || 0;
                const membersCount = parseInt(statsSection.dataset.membersCount) || 0;

                animateValue('partner-count', 0, partnerCount, 2000);
                animateValue('drivers-count', 0, driversCount, 2000);
                animateValue('members-count', 0, membersCount, 2000);

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
});