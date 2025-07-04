const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Configuration
const BOT_TOKEN = process.env.token;
const CHANNEL_ID = '1390696686090719303'; // salon texte
const ROLE_ID = '1358963787964878919'; // rôle à ping

const app = express();
app.use(bodyParser.json());

// Route qui reçoit le POST du formulaire
app.post('/formulaire', async (req, res) => {
    try {
        const form = req.body;

        const channel = await client.channels.fetch(CHANNEL_ID);

        const embed = new EmbedBuilder()
            .setTitle("📋 Détails du formulaire")
            .setDescription("📨 Voici les réponses envoyées par l'utilisateur :")
            .setColor(0x6E0000)
            .addFields(
                { name: "👤 Pseudo ?", value: form.pseudo || "Non renseigné", inline: false },
                { name: "🆔 ID Discord ?", value: form.iddiscord || "Non renseigné", inline: false },
                { name: "🎂 Âge ?", value: form.age || "Non renseigné", inline: false },
                { name: "🚛 TruckersMP ?", value: form.tmp || "Non renseigné", inline: false },
                { name: "💻 Logiciel utilisé ?", value: form.software || "Non renseigné", inline: false },
                { name: "🇳🇱 Connaissance Holland Style ?", value: form.holland || "Non renseigné", inline: false }
            )
            .setFooter({ text: "📠 Formulaire automatisé" })
            .setTimestamp();

        const sentMessage = await channel.send({
            content: `<@&${ROLE_ID}>\n🔔📩 **Un nouveau formulaire a été soumis !**`,
            embeds: [embed]
        });

        // Ajout automatique des réactions
        await sentMessage.react('✅');
        await sentMessage.react('❌');

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Erreur lors de l'envoi :", err);
        res.status(500).json({ error: 'Erreur serveur.' });
    }
});

client.login(BOT_TOKEN);

// Lancement du serveur HTTP pour écouter les formulaires
app.listen(3000, () => {
    console.log("Serveur d'écoute du formulaire en ligne sur le port 3000");
});