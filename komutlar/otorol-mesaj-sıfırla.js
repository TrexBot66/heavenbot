const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:768435516319989780> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<a:by:768435516319989780>  **Ayarlanmamış bir özellik sıfırlanamaz! **`)
 
 
  message.channel.send(`<a:hg:768438687343968276> **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-mesaj-sıfırla']
  };
  
  exports.help = {
    name: 'otorol-mesaj-sıfırşa',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };