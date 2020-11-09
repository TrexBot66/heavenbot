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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavan - Bot List Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
**<:mogo:768397908604485632> ${prefix}botlog** Bot Eklenince Log Gidicek Kanalı Ayarlar.
**<:mogo:768397908604485632> ${prefix}botekle** Bot Ekle Kanalını Ayarlar.
**<:mogo:768397908604485632> ${prefix}kabul-red-log** Kabul veya Red Haberlerinin Gideceği Kanalı Ayarlar.
**<:mogo:768397908604485632> ${prefix}developer** Bot Kabul Edilince Bot Sahibine Verilicek Rolü Ayarlar.
**<:mogo:768397908604485632> ${prefix}reset** Sunucunuzda Ayarlanan Bütün Ayarları Sıfırlarsınız.
**<:mogo:768397908604485632> ${prefix}yetkili-rol** Yetkili Komutlarını Kullanabilicek Rolü Ayarlar.
`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botlist-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'botlist',
  description: 'a!davet-sistemi Menüsü',
  usage: 'botlist-yardım'
};