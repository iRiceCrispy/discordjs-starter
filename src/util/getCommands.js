const fs = require('fs');
const path = require('path');

const getCommands = (dir = __dirname, rel = '../commands') => {
  const commandsFolder = path.join(dir, rel);
  const commandFiles = fs.readdirSync(commandsFolder);
  const commands = [];

  commandFiles.forEach((file) => {
    const stat = fs.lstatSync(path.join(commandsFolder, file));

    if (stat.isDirectory()) {
      commands.push(...getCommands(commandsFolder, file));
    }
    else {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      const command = require(path.join(commandsFolder, file));

      commands.push(command);
    }
  });

  return commands;
};

module.exports = getCommands;
