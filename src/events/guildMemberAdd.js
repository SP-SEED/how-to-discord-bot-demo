const memberEmbed = require('../components/embeds/member');
const env = require('../config/env');

module.exports = {
  name: 'guildMemberAdd',
  execute: async (guildMember) => {
    const welcomeChannel = guildMember.client.channels.cache.get(
      env.WELCOME_CHANNEL_ID
    );
    await welcomeChannel.send({
      embeds: [memberEmbed(guildMember)],
    });
    return await guildMember.user.send({
      content: 'Welcome to the server!',
    });
  },
};
