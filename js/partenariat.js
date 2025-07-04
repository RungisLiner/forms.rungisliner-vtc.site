document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(e.target); // Récupère les données du formulaire
    const webhookURL = "https://discord.com/api/webhooks/1390447197300064508/eNoOeFF2SMu7-kO3GpuIIl9FbZLcXwB6RLQijVlmQjhXybkNZ5XLDTA6lt_lX18j-tXJ"; // Remplacez par votre Webhook Discord

    const data = {
        username: 'Ruиgis Liиεr | Partner',
        avatar_url: 'https://imgur.com/8TbYZfq.png',
        content: "<@&1257843243174068243>\n- 📩 **Un nouveau formulaire a été soumis !**",
        embeds: [
            {
                title: "📋 Détails du formulaire",
                description: "Voici les réponses envoyées par l'utilisateur :",
                color: 7208960,
                fields: [
                    {
                        name: "Pseudo ?",
                        value: formData.get("pseudo") || "Non renseigné",
                        inline: true,
                    },
                    {
                        name: "ID Discord ?",
                        value: formData.get("iddiscord") || "Non renseigné",
                        inline: true,
                    },
                    {
                        name: "Nom VTC ?",
                        value: formData.get("namevtc") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Nombre de personne dans la VTC ?",
                        value: formData.get("numbercount") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Liens:",
                        value: `**Discord**: ${formData.get("linkdiscord") || "Non renseigné"}\n**Truckersmp**: ${formData.get("linktmp") || "Non renseigné"}\n**Site internet**: ${formData.get("linkwebsite") || "Non renseigné"}`,
                        inline: false,
                    },
                    {
                        name: "Liste gérant:",
                        value: formData.get("liststaff") || "Non renseigné",
                        inline: false,
                    },
                    {
                        name: "Pourquoi nous ?",
                        value: formData.get("whyus") || "Non renseigné",
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