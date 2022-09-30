const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Echo your message in a format!')
    .addStringOption((option) =>
      option
        .setName('message')
        .setDescription('A message to be echoed.')
        .setRequired(true)
    ),
  execute: async (interaction) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('normal')
        .setLabel('Normal')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId('reverse')
        .setLabel('Reverse')
        .setStyle(ButtonStyle.Danger)
    );
    await interaction.client.keyv.set(
      `${interaction.commandName}-${interaction.user}`,
      interaction.options.getString('message')
    );
    return await interaction.reply({
      content: 'How would you like your message echoed?',
      components: [row],
    });
  },
};
