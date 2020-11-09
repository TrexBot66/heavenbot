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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Moderasyon 2 Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
  **<:mogo:768397908604485632> ${prefix}mod-log** Mod-Log Kanalını Belirlersiniz.
  **<:mogo:768397908604485632> ${prefix}mod-log kapat** Ayarlanan Mod-Log Kanalı Kapatılır.
  **<:mogo:768397908604485632> ${prefix}oylama ** Oylama Yaparsınız
  **<:mogo:768397908604485632> ${prefix}yasaklı-tag ** Yasaklı Tag Ayarlar.
  **<:mogo:768397908604485632> ${prefix}otorol-ayarla** Otorol Ayarlar.
  **<:mogo:768397908604485632> ${prefix}otorol-mesaj**  Otorol Mesajı Ayarlar.
  **<:mogo:768397908604485632> ${prefix}otorol-sıfırla** Otorol Sıfırlar.
  **<:mogo:768397908604485632> ${prefix}sayaç-ayarla** Sayaç Ayarlar.
  **<:mogo:768397908604485632> ${prefix}ban **  Etiketlenen Kullanıcıyı Banlar.
  **<:mogo:768397908604485632> ${prefix}kick ** Etiketlenen Kullanıcıyı Kickler.
  **<:mogo:768397908604485632> ${prefix}sa-as aç ** SA-AS Sistemini Açar.
  **<:mogo:768397908604485632> ${prefix}sa-as kapat **  SA-AS Sistemini Kapatır.
  **<:mogo:768397908604485632> ${prefix}emoji-ekle ** Emoji Ekler.
  **<:mogo:768397908604485632> ${prefix}çekiliş ** Çekiliş yaparsınız.
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};