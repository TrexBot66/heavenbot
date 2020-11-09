const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavan - Özel Oda Sistemi Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`

 **<:mogo:768397908604485632>  ${prefix}özelodasistemi Sunucunuzda Gereksiz Odalardan Kurtulun.**
 **<:mogo:768397908604485632>  ${prefix}limit (sayı) Özel Odaya Kaç Kişinin Girebileceğini Ayarlayabilirsiniz.**
`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['özelodasistemi-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'özelodasistemi-yardım',
  description: 'a!özelodasistemi Menüsü',
  usage: 'oyun'
};