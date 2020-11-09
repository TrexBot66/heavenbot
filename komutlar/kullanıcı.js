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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Kullanıcı Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
  **<:mogo:768397908604485632> ${prefix}avatar** Avatarınızı Atar.
  **<:mogo:768397908604485632> ${prefix}sunucutanıt** < Sunucunuzu Tanıtır.
  **<:mogo:768397908604485632> ${prefix}kullanıcı-bilgi**  Etiketlediğiniz Kişinin Kullanıcı Bilgisini Gösterir.
  **<:mogo:768397908604485632> ${prefix}kanalbilgi ** Belirtilen Kanal Hakkında Bilgi Verir.
  **<:mogo:768397908604485632> ${prefix}davet**  Botu Davet Edersiniz!
  **<:mogo:768397908604485632> ${prefix}korona **  Korona Hakkında Bilgi Alırsınız.
  **<:mogo:768397908604485632> ${prefix}id ** Etiketlediğiniz Kişini İD sini atar.
  **<:mogo:768397908604485632> ${prefix}mcskin ** İsmini Girdiğiniz Skini Fotosunu Atar.
  **<:mogo:768397908604485632> ${prefix}emoji-bilgi**  İsmini Yazdığınız Emoji Hakkında Bilgi Alırsınız.
  **<:mogo:768397908604485632> ${prefix}saat ** Saati Gösterir.(Kendinde Bakabilirsin Ama)
  **<:mogo:768397908604485632> ${prefix}say** Sunucuda ki Üye Durumlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}sunucu-bilgi**  Sunucu Hakkın da Bilgi Verir.
  **<:mogo:768397908604485632> ${prefix}sunucu-resim** Sunucunun İconunu Atar.
  **<:mogo:768397908604485632> ${prefix}yetkilerim** Sunucuda ki Yetkilerinizi Gösterir.
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kullanıcı'
};