const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:768435516319989780> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:by:768438687343968276>  **Bu özellik zaten kapalı! **`)
 
 
  message.channel.send(`<a:hg:768438687343968276>  **Oto rol Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-sıfırla']
  };
  
  exports.help = {
    name: 'otorol-sıfırla ',
    description: 'otorol-sıfırla ',
    usage: 'otorol-sıfırla '
  };