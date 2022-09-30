module.exports = {
  name: 'ready',
  once: true,
  execute: (client) => {
    console.log(`Client is ready as ${client.user.tag}!`);
  },
};
