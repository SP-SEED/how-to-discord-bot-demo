const memberEmbed = require('../components/embeds/member');
const env = require('../config/env');

module.exports = {
  name: 'guildMemberRemove',
  execute: async (guildMember) => {
    const welcomeChannel = guildMember.client.channels.cache.get(
      env.WELCOME_CHANNEL_ID
    );
    return await welcomeChannel.send({
      content: `${guildMember.user.tag} has left us!`,
    });
  },
};
