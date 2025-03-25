const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const app = express();

require("dotenv").config();
// Route de test
app.get("/", (req, res) => {
  res.send("Le bot est en ligne !");
});

// Démarre le serveur sur un port fourni par Render
const PORT = process.env.PORT || 3000;
app
  .listen(PORT, () => {
    console.log(`Serveur web démarré sur le port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Erreur du serveur Express:", err);
  });

// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });

// client.once("ready", () => {
//   console.log(`Connecté en tant que ${client.user.tag}`);
// });

// client.on("messageCreate", (message) => {
//   if (message.author.bot) return;

//   if (message.content === "!ping") {
//     message.reply("Pong!");
//   }
// });

// client.login(process.env.TOKEN).catch((err) => {
//   console.error("Erreur lors de la connexion :", err);
//   process.exit(1);
// });
