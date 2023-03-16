/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const getEvents = (dir = __dirname, rel = '../events') => {
  const eventsPath = path.join(dir, rel);
  const eventFiles = fs.readdirSync(eventsPath);
  const events = [];

  eventFiles.forEach((file) => {
    const filePath = path.join(eventsPath, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      events.push(...getEvents(eventsPath, file));
    }
    else if (path.extname(file) === '.js') {
      const event = require(filePath);

      if ('name' in event && 'execute' in event) {
        events.push(event);
      }
      else {
        console.warn(`The event file ${file} is missing a required "name" or "execute" property`);
      }
    }
  });

  return events;
};

module.exports = getEvents;
