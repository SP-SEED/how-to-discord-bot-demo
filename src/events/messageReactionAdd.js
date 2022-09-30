const env = require('../config/env');

module.exports = {
  name: 'messageReactionAdd',
  execute: async (reaction, user) => {
    if (reaction.message.id !== env.REACTION_MESSAGE_ID) return;

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

    if (reaction.emoji.id === env.EMOTE1_ID)
      guildMember.roles.add(env.ROLE1_ID);

    if (reaction.emoji.id === env.EMOTE2_ID)
      guildMember.roles.add(env.ROLE2_ID);

    return;
  },
};
