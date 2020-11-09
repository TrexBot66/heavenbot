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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavan - Logo Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
**<:mogo:768397908604485632> ${prefix}gold** Gold Logo oluşturur.
**<:mogo:768397908604485632> ${prefix}arrow** Arrow Logo oluşturur.
**<:mogo:768397908604485632> ${prefix}graffiti** Graffiti Logo oluşturur.
**<:mogo:768397908604485632> ${prefix}green** Green Logo Logo oluşturur.
`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['logo-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'logo',
  description: 'a!davet-sistemi Menüsü',
  usage: 'logo-yardım'
};