const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`${client.user.username} is ready!`);
    console.log(`Running ${client.commands.size} command(s).`);
  },
};
