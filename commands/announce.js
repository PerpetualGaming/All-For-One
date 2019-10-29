const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (message.deletable) message.delete();

    if (args.length < 1)
        return message.reply("Nothing to say?").then(m => m.delete(5000));

    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

    if (args[0].toLowerCase() === "embed") {
        const embed = new Discord.RichEmbed()
        .setColor(roleColor)
        //.setTitle()
        //.setImage()
        //.setThumbnail()
        .setDescription(args.slice(1).join(" "));

        message.channel.send(embed);
    }
    else {
        message.channel.send(args.join(" "));
    }

}
module.exports.help = {
  name: "announce"
}
