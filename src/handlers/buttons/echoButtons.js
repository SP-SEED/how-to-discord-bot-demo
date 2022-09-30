module.exports = {
  customIds: ['normal', 'reverse'],
  execute: async (interaction) => {
    const message = await interaction.client.keyv.get(
      `echo-${interaction.user}`
    );
    let echoMessage = '';
    switch (interaction.customId) {
      case 'normal':
        echoMessage = message;
        break;

      case 'reverse':
        echoMessage = message.split('').reverse().join('');
        break;
    }
    await interaction.client.keyv.delete(`echo-${interaction.user}`);
    return await interaction.update({
      content: echoMessage,
      components: [],
    });
  },
};
