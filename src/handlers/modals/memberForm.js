const { blockQuote, bold, underscore } = require('discord.js');

module.exports = {
  customIds: ['memberform'],
  execute: async (interaction) => {
    const name = interaction.fields.getTextInputValue('name');
    const bio = interaction.fields.getTextInputValue('bio');

    return await interaction.reply({
      content: `Your name is: ${underscore(
        bold(name)
      )}\nYour bio is: \n${blockQuote(bio)}`,
      ephemeral: true,
    });
  },
};
