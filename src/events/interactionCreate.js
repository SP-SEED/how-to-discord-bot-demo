module.exports = {
  name: 'interactionCreate',
  execute: async (interaction) => {
    if (interaction.isChatInputCommand()) {
      // Here tells us that the interaction is a slash command.

      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) return; // Here indicates that the command input by user is actually not found.

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'Something went wrong!',
          ephemeral: true,
        });
      }
    }

    if (interaction.isButton()) {
      // Here tells us that the interaction is a button click.

      const button = interaction.client.buttonHandlers.get(
        interaction.customId
      );

      if (!button) return; // Here indicates that the command input by user is actually not found.

      try {
        await button.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'Something went wrong!',
          ephemeral: true,
        });
      }
    }

    if (interaction.isModalSubmit()) {
      // Here tells us that the interaction is a modal submit.

      const modal = interaction.client.modalHandlers.get(interaction.customId);

      if (!modal) return; // Here indicates that the command input by user is actually not found.

      try {
        await modal.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'Something went wrong!',
          ephemeral: true,
        });
      }
    }

    if (interaction.isSelectMenu()) {
      // Here tells us that the interaction is a modal submit.

      const select = interaction.client.selectHandlers.get(
        interaction.customId
      );

      if (!select) return; // Here indicates that the command input by user is actually not found.

      try {
        await select.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'Something went wrong!',
          ephemeral: true,
        });
      }
    }
  },
};
