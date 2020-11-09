const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
const db = require("quick.db");
let botid = ('767415660590399549') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Seviye Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
 
  **<:mogo:768397908604485632> ${prefix}seviye** Mevcut Olduğunuz Seviyeyi Gösterir.
  **<:mogo:768397908604485632> ${prefix}seviye-ayarlar** Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}seviye-rol** İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
  **<:mogo:768397908604485632> ${prefix}seviye-sıfırla ** Mevcut Seviye Sistemini Sıfırlar
  **<:mogo:768397908604485632> ${prefix}seviye-sınır ** Maksimum Kazanılanabilecek Seviyeyi Belirler.
  **<:mogo:768397908604485632> ${prefix}seviye-xp ** Bir Mesaj Başına Verilecek Xp yi ayarlar.
  **<:mogo:768397908604485632> ${prefix}seviye-top ** Sunucuda ki En yüksek 5 Kişiyi Gösterir
  **<:mogo:768397908604485632> ${prefix}seviye-rütbeler ** Hangi Seviye de Rol Verilecek Onu Gösterir.
`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'seviye-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'seviye-yardım'
};