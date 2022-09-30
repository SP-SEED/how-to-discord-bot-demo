const {
  ModalBuilder,
  TextInputStyle,
  TextInputBuilder,
  ActionRowBuilder,
} = require('discord.js');

module.exports = () => {
  const rows = [
    new ActionRowBuilder().addComponents(
      new TextInputBuilder()
        .setCustomId('name')
        .setLabel('Name')
        .setStyle(TextInputStyle.Short)
    ),
    new ActionRowBuilder().addComponents(
      new TextInputBuilder()
        .setCustomId('bio')
        .setLabel('Bio')
        .setStyle(TextInputStyle.Paragraph)
    ),
  ];

  return new ModalBuilder()
    .setCustomId('memberform')
    .setTitle('This is a test modal')
    .addComponents(...rows);
};
