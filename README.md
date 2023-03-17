# discordjs-starter

Starter for Discord Bots using Discord.js

## Instructions

1. Create a Discord Bot and add it to your server.
2. Clone this repository:
   ```
   git clone https://github.com/iRiceCrispy/discordjs-starter.git
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Make a copy of the `.env.example` file and rename it to `.env` and fill in the variables:
   - CLIENT_ID - Your bot user id.
   - BOT_TOKEN - Your bot token.
   - GUILD_ID - Your server id.
   - CLIENT_ID_DEV - Your testing bot user id.
   - BOT_TOKEN_DEV - Your testing bot token.
5. Deploy slash commands:
   ```
   npm run deploy
   ```
   You only need to run this once, or whenever you create/update command data.
6. Start the bot:
   ```
   npm start
   ```
7. Enjoy.

## Notes

If you are using the same bot for development and production, you may experience command duplication in your server.

You may add the following code snippets into your command deployment script to reset global or guild commands:

```js
// resets global commands
rest
  .put(Routes.applicationCommands(clientId), { body: [] })
  .then(() => console.log('Reset global commands.'));

// resets guild commands
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
  .then(() => console.log('Reset guild commands.'));
```
