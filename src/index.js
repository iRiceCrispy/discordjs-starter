const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config');
const commandHandler = require('./handlers/commandHandler.js');
const eventHandler = require('./handlers/eventHandler.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

commandHandler(client);
eventHandler(client);

client.login(token);