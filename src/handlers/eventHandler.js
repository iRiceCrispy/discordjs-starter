const getEvents = require('../util/getEvents');

module.exports = (client) => {
  getEvents().forEach((event) => {
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    }
    else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  });
};
