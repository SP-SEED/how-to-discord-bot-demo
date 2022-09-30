const { SlashCommandBuilder } = require('discord.js');
const memberFormModal = require('../components/modals/memberForm');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('modal')
    .setDescription('Create a modal!'),
  execute: async (interaction) => {
    await interaction.showModal(memberFormModal());
  },
};
