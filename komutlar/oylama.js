const Discord = require('discord.js');
 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send(
     new Discord.MessageEmbed()
     .addField(`**Oylama başlaması için oylamanın konusunu yazman gerek** <a:by:761571601677942784> `)).then(m => m.delete(5000));
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından başlatıldı.")
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('Heavan Oylama Sistemi', client.user.displayAvatarURL()) 
       .addField(`**Oylama Başladı**`, `<a:mogo:764435342618132480> Oylama sebep: **${question}** <a:mogo:764435342618132480>`)).then(function(message) {
         message.react('<:mogo:771741932921683998>');
         message.react('<:mogo:771741888801144873>');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};