const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Moderasyon Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`<a:YanpSnennleGif:767705275507277845> ${prefix}moderasyon2 **Menümüze Bakmayı Unutmayın.** <a:YanpSnennleGif:767705275507277845> \n
  **<:mogo:768397908604485632> ${prefix}giriş-çıkış-ayarla ** Resimli Hg-BB sistemini Açarsınız.
  **<:mogo:768397908604485632> ${prefix}giriş-çıkış-kapat ** Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  **<:mogo:768397908604485632> ${prefix}güvenlik ** Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  **<:mogo:768397908604485632> ${prefix}güvenlik sıfırla ** Resimli Güvenlik Sistemini Kapatırsınız.
  **<:mogo:768397908604485632> ${prefix}capslock-engelleme ** CapsLock Engelleme Sistemini Açıp Kapatırsınız.
  **<:mogo:768397908604485632> ${prefix}küfürengel** Küfür Sistemini Açar/Kapatırsınız.
  **<:mogo:768397908604485632> ${prefix}reklamengel** Reklam Engel Sistemini Açar/Kapatırsınız.
  **<:mogo:768397908604485632> ${prefix}temizle ** Belirlenen Miktarda Mesaj Siler.
  **<:mogo:768397908604485632> ${prefix}sunucupanel ** Sunucu Panel Açar.
  **<:mogo:768397908604485632> ${prefix}unban ** İdsi Girelen Kullanıcıyı Banının Açar.
`)

        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};