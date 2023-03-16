const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../config');
const getCommands = require('../util/getCommands');

const commands = getCommands().map(command => command.data);

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  }
  catch (error) {
    console.error(error);
  }
})();
