const { SelectMenuBuilder } = require('discord.js');

module.exports = () =>
  new SelectMenuBuilder()
    .setCustomId('hobby')
    .setPlaceholder('Select a hobby')
    .setMinValues(2)
    .setMaxValues(3)
    .addOptions(
      {
        label: 'Programming',
        description: 'A true SOC student',
        value: 'Programming',
      },
      {
        label: 'Running',
        description: 'Wow speed',
        value: 'Running',
      },
      {
        label: 'Swimming',
        description: 'Wow Joseph',
        value: 'Swimming',
      }
    );
