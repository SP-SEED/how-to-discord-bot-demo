const env = require('./config/env');
const fs = require('node:fs');
const path = require('node:path');
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require('discord.js');
const Keyv = require('keyv');

// ==================================================
// Client Intents List
// ==================================================
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [Partials.Message, Partials.Reaction],
});

client.commands = new Collection();
client.buttonHandlers = new Collection();
client.modalHandlers = new Collection();
client.selectHandlers = new Collection();
client.keyv = new Keyv(); // This stores in memory

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'));

// ==================================================
// Attaching Events Dynamically
// ==================================================
for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// ==================================================
// Executing Commands Dynamically
// ==================================================
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

// ==================================================
// Executing Button Handlers Dynamically
// ==================================================
const buttonHandlersPath = path.join(__dirname, 'handlers', 'buttons');
const buttonHandlerFiles = fs
  .readdirSync(buttonHandlersPath)
  .filter((file) => file.endsWith('.js'));

for (const file of buttonHandlerFiles) {
  const filePath = path.join(buttonHandlersPath, file);
  const buttonHandler = require(filePath);
  for (const id of buttonHandler.customIds) {
    client.buttonHandlers.set(id, buttonHandler);
  }
}

// ==================================================
// Executing Modal Handlers Dynamically
// ==================================================
const modalHandlersPath = path.join(__dirname, 'handlers', 'modals');
const modalHandlerFiles = fs
  .readdirSync(modalHandlersPath)
  .filter((file) => file.endsWith('.js'));

for (const file of modalHandlerFiles) {
  const filePath = path.join(modalHandlersPath, file);
  const modalHandler = require(filePath);
  for (const id of modalHandler.customIds) {
    client.modalHandlers.set(id, modalHandler);
  }
}

// ==================================================
// Executing Select Menu Handlers Dynamically
// ==================================================
const selectHandlersPath = path.join(__dirname, 'handlers', 'selects');
const selectHandlerFiles = fs
  .readdirSync(selectHandlersPath)
  .filter((file) => file.endsWith('.js'));

for (const file of selectHandlerFiles) {
  const filePath = path.join(selectHandlersPath, file);
  const selectHandler = require(filePath);
  for (const id of selectHandler.customIds) {
    client.selectHandlers.set(id, selectHandler);
  }
}

client.login(env.BOT_TOKEN);
