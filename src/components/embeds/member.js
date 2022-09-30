const { EmbedBuilder } = require('discord.js');

module.exports = (guildMember) => {
  const { user } = guildMember;
  const embed = new EmbedBuilder()
    .setColor('Green')
    .setTitle(user.username)
    .setThumbnail(user.avatarURL())
    .setDescription(`${user.tag} has joined the server!`)
    .setTimestamp();

  embed.addFields(
    {
      name: 'Username',
      value: user.username,
      inline: true,
    },
    {
      name: 'Discriminator',
      value: user.discriminator,
      inline: true,
    }
  );

  // Generating a random number between 0 and 100
  let luckyNumber = Math.floor(Math.random() * 101);

  if (luckyNumber > 50) {
    embed.addFields({
      name: 'Lucky Guy Award',
      value: `You hit the 50/50 jackpot by drawing ${luckyNumber}!`,
    });
  }

  return embed;
};
