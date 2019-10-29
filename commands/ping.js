const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const msg = await message.reply(`Pinging...`);
    msg.edit(`Pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency ${Math.round(bot.ping)}ms`);

}
module.exports.help = {
  name: "ping"
}