const memberEmbed = require('../components/embeds/member');

module.exports = {
  name: 'guildMemberAdd',
  execute: async (guildMember) => {
    const welcomeChannelId = '968543999029821440';
    const welcomeChannel =
      guildMember.client.channels.cache.get(welcomeChannelId);
    await welcomeChannel.send({
      embeds: [memberEmbed(guildMember)],
    });
    return await guildMember.user.send({
      content: 'Welcome to the server!',
    });
  },
};
