const { bold } = require('discord.js');

module.exports = {
  customIds: ['hobby'],
  execute: async (interaction) => {
    const hobbies = interaction.values;

    return await interaction.update({
      content: `Your hobbies are ${bold(hobbies.join(', '))}.`,
      components: [],
    });
  },
};
