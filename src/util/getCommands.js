/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const getCommands = (dir = __dirname, rel = '../commands') => {
  const commandsPath = path.join(dir, rel);
  const commandFiles = fs.readdirSync(commandsPath);
  const commands = [];

  commandFiles.forEach((file) => {
    const filePath = path.join(commandsPath, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      commands.push(...getCommands(commandsPath, file));
    }
    else if (path.extname(file) === '.js') {
      const command = require(filePath);

      if ('data' in command && 'execute' in command) {
        commands.push(command);
      }
      else {
        console.warn(`The command file ${file} is missing a required "data" or "execute" property.`);
      }
    }
  });

  return commands;
};

module.exports = getCommands;
