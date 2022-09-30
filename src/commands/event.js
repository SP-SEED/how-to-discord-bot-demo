const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('event')
    .setDescription('Send an event!')
    .addSubcommand((subcommand) =>
      subcommand
        .setName('guildmemberadd')
        .setDescription('Emit guildMemberAdd Event')
        .addUserOption((option) =>
          option
            .setName('user')
            .setDescription('The user that joins')
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('guildmemberremove')
        .setDescription('Emit guildMemberRemove Event')
        .addUserOption((option) =>
          option
            .setName('user')
            .setDescription('The user that leaves')
            .setRequired(true)
        )
    ),
  execute: async (interaction) => {
    const subcommand = interaction.options.getSubcommand();

    const guildMemberManager = interaction.guild.members;

    switch (subcommand) {
      case 'guildmemberadd': {
        interaction.client.emit(
          'guildMemberAdd',
          guildMemberManager.cache.get(interaction.options.getUser('user').id)
        );
        break;
      }
      case 'guildmemberremove': {
        interaction.client.emit(
          'guildMemberRemove',
          guildMemberManager.cache.get(interaction.options.getUser('user').id)
        );
        break;
      }
    }

    return await interaction.reply({
      content: 'Event emitted',
      ephemeral: true,
    });
  },
};
