const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandsPath = path.join(__dirname, '..', 'commands');
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter(file => file.endsWith('.js'));

  commandFiles.forEach((file) => {
    const filePath = path.join(commandsPath, file);
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const command = require(filePath);

    client.commands.set(command.data.name, command);
  });
};
