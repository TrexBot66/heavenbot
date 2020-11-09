const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db =  require("quick.db");
const talkedRecently = new Set();

let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!";
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Kayıt Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
 
  **<:mogo:768397908604485632> ${prefix}alınacak-rol** Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **<:mogo:768397908604485632> ${prefix}alınacak-rol sıfırla ** Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}kayıt-kanal** Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **<:mogo:768397908604485632> ${prefix}kayıt-kanal sıfırla** Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **<:mogo:768397908604485632> ${prefix}kayıt-hg ** Gelen Kullanıcılara Kayıt Bilgisi Verir.
  **<:mogo:768397908604485632> ${prefix}kayıt-hg sıfırla ** Kayıt Hg sistemini sıfırlar.
  **<:mogo:768397908604485632> ${prefix}kayıt-yetkili** Kayıt Edebilecek Yetkiyi Ayarlar.
  **<:mogo:768397908604485632> ${prefix}kayıt-yetkili sıfırla** Kayıt Edebilecek Yetkiyi Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}erkek-rol ** Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **<:mogo:768397908604485632> ${prefix}erkek-rol sıfırla ** Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}kız-rol** Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **<:mogo:768397908604485632> ${prefix}kız-rol sıfırla** Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}erkek ** Erkekleri Kayıt Etmeye Yarar.
  **<:mogo:768397908604485632> ${prefix}kız ** Kızları Kayıt Etmeye Yarar.
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};