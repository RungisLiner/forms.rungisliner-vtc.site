
// Sélection des éléments
const menuToggle = document.getElementById("menuToggle");
const sidenav = document.getElementById("sidenav");
const closeSidenav = document.getElementById("closeSidenav");

// Ouvrir la sidenav
menuToggle.addEventListener("click", () => {
    sidenav.style.left = "0"; // Ouvrir le menu
});

// Fermer la sidenav
closeSidenav.addEventListener("click", () => {
    sidenav.style.left = "-250px"; // Fermer le menu
});

// Fermer la sidenav si on clique en dehors (sur l'écran)
window.addEventListener("click", (e) => {
    if (!sidenav.contains(e.target) && !menuToggle.contains(e.target)) {
        sidenav.style.left = "-250px";
    }
});

const sidebar = document.querySelector('.sidebar');
const mobileMenuButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
function toggleMenu() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}
mobileMenuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.add('hidden');
    }
});

const settingsModal = document.getElementById('settings-modal');
const openSettingsButtons = document.querySelectorAll('[data-open-settings]');
const closeSettingsButton = document.getElementById('close-settings');

// Fonction pour basculer l'affichage du modal
function toggleSettings() {
    settingsModal.classList.toggle('hidden');
}

// Événements pour ouvrir/fermer le modal
openSettingsButtons.forEach(btn => btn.addEventListener('click', toggleSettings));
closeSettingsButton.addEventListener('click', toggleSettings);

// Gestion du thème
document.addEventListener('DOMContentLoaded', () => {
    // Appliquer le thème sauvegardé ou le thème par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // Mettre en surbrillance le bouton du thème actif
    document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('ring-2', 'ring-indigo-500');
    
    // Gestion des clics sur les boutons de thème
    document.querySelectorAll('.theme-selector').forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            
            // Retirer les classes de thème existantes
            document.documentElement.classList.remove('dark', 'light');
            
            // Appliquer le nouveau thème
            document.documentElement.classList.add(theme);
            applyTheme(theme);
            
            // Sauvegarder dans le localStorage
            localStorage.setItem('theme', theme);
            
            // Mettre à jour la sélection visuelle
            document.querySelectorAll('.theme-selector').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-indigo-500');
            });
            button.classList.add('ring-2', 'ring-indigo-500');
        });
    });
});

// Fonction pour appliquer le thème
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('bg-gray-900', 'text-gray-100');
        document.body.classList.add('bg-[#f7f7f7]', 'text-[#111111]');
        
        // Vous pouvez ajouter d'autres ajustements pour le thème clair ici
    } else {
        document.body.classList.remove('bg-[#f7f7f7]', 'text-[#111111]');
        document.body.classList.add('bg-gray-900', 'text-gray-100');
        
        // Vous pouvez ajouter d'autres ajustements pour le thème sombre ici
    }
}

// Gestion de la langue (optionnel)
document.querySelectorAll('.lang-selector').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        localStorage.setItem('language', lang);
        document.cookie = `lang=${lang}; path=/`;
        location.reload();
    });
});

// Au chargement, appliquer la langue sauvegardée
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'fr';
    document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add('ring-2', 'ring-indigo-500');
});

function changeFavicon(src) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = src;
}

changeFavicon("https://imgur.com/8TbYZfq.png?v=" + new Date().getTime());