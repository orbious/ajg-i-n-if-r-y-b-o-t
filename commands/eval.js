const Discord = require("discord.js");
const beautify = require("beautify")
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "eval",
 aliases: [],
 description: "Evaluates and runs JavaScript code",
 category: "General",
 usage: "eval <code>",
 run: async (client, message, args) => {
  try {
   if(message.author.id !== "440200028292907048") {
    return message.channel.send({embed: {
     color: 16734039,
     description: "❌ | You do not have permission to run this command (Only owner of the bot can run this)!"
    }});
   }
   var result = args.join(" ");
   if (!result) {
    return message.channel.send({embed: {
     color: 16734039,
     description: "❌ | Please input code to evaluate!"
    }});
   }
   let evaluated = eval(result);
   console.log(result);
   const success = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("💡 Eval")
    .addField(`Input:\n`, '```js\n' + `${args.join(" ").slice(5)}` + '```', false)
    .addField(`Output:\n`, '```js\n' + evaluated + '```', true)
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   message.channel.send(success)
  } catch (err) {
   const errormessage = new Discord.MessageEmbed()
   .setColor("#e31212")
   .setTitle("An error has occured")
   .addField(`Input:\n`, '```js\n' + `${result}` + '```', false)
   .addField(`Output:\n`, '```js\n' + `${err.message}` + '```', true)
   .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   return message.channel.send(errormessage)
  }
 }
}
