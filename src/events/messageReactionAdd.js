const env = require('../config/env');

module.exports = {
  name: 'messageReactionAdd',
  execute: async (reaction, user) => {
    if (reaction.message.id !== '1025134866251120721') return;

    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        console.error('Something went wrong when fetching the message:', error);
        return;
      }
    }

    const guild = user.client.guilds.cache.get(env.GUILD_ID);
    const guildMember = guild.members.cache.get(user.id);

    if (reaction.emoji.id === '860439197843849228')
      guildMember.roles.add('1025134913923588137');

    if (reaction.emoji.id === '931556187676237874')
      guildMember.roles.add('1025134938435100682');

    return;
  },
};
