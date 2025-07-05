document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(e.target); // Récupère les données du formulaire
    const webhookURL = "https://discord.com/api/webhooks/1390845010542592131/eDaj1SEkD_ldnIUv9iODHwddspn979Pbn50VKeD3qA5ypr7r6P0uotNw0OAjtOxf6HFh"; // Remplacez par votre Webhook Discord

    const data = {
        username: 'Ruиgis Liиεr | εvεиt',
        avatar_url: 'https://imgur.com/8TbYZfq.png',
        content: "<@&1358962788969480242>\n- 📩 **Un nouveau formulaire a été soumis !**",
        embeds: [
            {
                title: "📋 Détails du formulaire",
                description: "Voici les réponses envoyées par l'utilisateur :",
                color: 116e0000,
                fields: [
                    {
                        name: "ID Discord ?",
                        value: formData.get("iddiscord") || "Non renseigné",
                        inline: true,
                    },
                    {
                        name: "Nom de l'événement",
                        value: formData.get("nameevents") || "Non renseigné",
                        inline: true,
                    },
                    {
                        name: "Date + Heure",
                        value: formData.get("datehourevents") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Serveur",
                        value: formData.get("server") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Distance:",
                        value: formData.get("distanceevents") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Ville de départ:",
                        value: formData.get("citydeparture") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Ville d'arrivée:",
                        value: formData.get("cityarrival") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "DLC ?",
                        value: formData.get("dlc") || "Non renseigné",
                        inline: false,
                    },
                ],
                footer: {
                    text: "Formulaire automatisé",
                },
                timestamp: new Date().toISOString(),
            },
        ],
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("✅ Formulaire envoyé avec succès à Discord !");
            e.target.reset();
        } else {
            alert("❌ Une erreur s'est produite lors de l'envoi du formulaire.");
            console.error("Erreur :", response.statusText);
        }
    } catch (error) {
        alert("❌ Impossible d'envoyer le formulaire à Discord.");
        console.error("Erreur :", error);
    }
});
document.addEventListener("contextmenu", function (event) {
    // Message d'alerte
    alert('Veuillez respecter le travail des créateurs en ne copiant pas le contenu sans autorisation');
    event.preventDefault();
});

const dropdownToggle = document.getElementById('navbarDropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function () {
    // Vérifier si le menu est déjà ouvert
    if (dropdownMenu.classList.contains('show')) {
        // Fermer le menu
        dropdownMenu.classList.remove('show');
    } else {
        // Ouvrir le menu
        dropdownMenu.classList.add('show');
    }
});