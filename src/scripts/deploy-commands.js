const { REST, Routes } = require('discord.js');
const { clientId, environment, guildId, token } = require('../config');
const getCommands = require('../util/getCommands');

const isProduction = environment === 'production';
const commands = getCommands().map(command => command.data);
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    if (!isProduction && guildId) {
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands },
      );

      console.log(`Successfully updated ${data.length}/${commands.length} guild slash commands.`);
    }
    else {
      const data = await rest.put(
        Routes.applicationCommands(clientId),
        { body: commands },
      );

      console.log(`Successfully updated ${data.length}/${commands.length} global slash commands.`);
    }
  }
  catch (error) {
    console.error(error);
  }
})();
