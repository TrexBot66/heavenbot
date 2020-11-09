const Discord = require('discord.js');

exports.run = (client, message, params) => {
    if (!message.guild) return;
    if (message.channel.type !== 'dm') {
      const drdeli = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Artık Kral Oldun!!!')
    .setColor(`RANDOM`)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
    message.channel.send(drdeli);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kralol',
  description: 'kralol',
  usage: 'kralol'
};
