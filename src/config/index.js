const isProduction = process.env.NODE_ENV === 'production';
const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
const clientIdDev = process.env.CLIENT_ID_DEV || clientId;
const token = process.env.BOT_TOKEN;
const tokenDev = process.env.BOT_TOKEN_DEV || token;

module.exports = {
  environment: isProduction ? 'production' : 'development',
  guildId,
  clientId: isProduction ? clientId : clientIdDev,
  token: isProduction ? token : tokenDev,
};
