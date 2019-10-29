const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let Slapuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!Slapuser) return message.channel.send("Can't find user or user not specified.");

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);
  
    let slapEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`${message.author} has slapped ${Slapuser}`)
    .setImage(body.url)
    .setFooter("Powered by Nekos.Life API");
  
    message.channel.send(slapEmbed);
}

module.exports.help = {
  name: "slap"
}