const memberEmbed = require('../components/embeds/member');

module.exports = {
  name: 'guildMemberRemove',
  execute: async (guildMember) => {
    const welcomeChannelId = '968543999029821440';
    const welcomeChannel =
      guildMember.client.channels.cache.get(welcomeChannelId);
    return await welcomeChannel.send({
      content: `${guildMember.user.tag} has left us!`,
    });
  },
};
