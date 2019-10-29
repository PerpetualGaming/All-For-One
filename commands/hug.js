const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let Huguser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!Huguser) return message.channel.send("Can't find user.");
  
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
  
    let hugEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`${message.author} has hugged ${Huguser}`)
    .setImage(body.url)
    .setFooter("Powered by Nekos.Life API");
  
    message.channel.send(hugEmbed);
}

module.exports.help = {
  name: "hug"
}