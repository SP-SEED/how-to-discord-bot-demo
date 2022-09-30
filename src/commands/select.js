const { SlashCommandBuilder, ActionRowBuilder } = require('discord.js');
const hobbySelect = require('../components/selects/hobby');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('select')
    .setDescription('Create a select menu!'),
  execute: async (interaction) => {
    const row = new ActionRowBuilder().addComponents(hobbySelect());

    return await interaction.reply({
      content: 'Here is a select menu',
      components: [row],
    });
  },
};
