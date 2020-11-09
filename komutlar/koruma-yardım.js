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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Koruma Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`

  **<:mogo:768397908604485632> ${prefix}ban-koruma #kanal** Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar
  **<:mogo:768397908604485632> ${prefix}ban-koruma-sıfırla **  Ayarlanan Ban Koruma Sistemini Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}kanal-koruma #kanal** Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
  **<:mogo:768397908604485632> ${prefix}kanal-koruma-sıfırla** Ayarlanan Kanal Koruma Sistemini Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}rol-koruma #kanal **  Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
  **<:mogo:768397908604485632> ${prefix}rol-koruma-sıfırla ** Ayarlanan Rol Koruma Sistemini Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}spam ** Spam engel açar.
  **<:mogo:768397908604485632> ${prefix}spamkapat ** Spam engel kapatır.
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};