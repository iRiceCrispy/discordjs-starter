const getCommands = require('../util/getCommands');

module.exports = (client) => {
  getCommands().forEach((command) => {
    client.commands.set(command.data.name, command);
  });
};
