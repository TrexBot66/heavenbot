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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavan - Ekonomi Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`

  **<:mogo:768397908604485632> ${prefix}soygun** Soygun yaparsınız.
  **<:mogo:768397908604485632> ${prefix}profil** Profil bilgilerinizi gösterir.
  **<:mogo:768397908604485632> ${prefix}altın-yolla** İstediğiniz kişiye altın yollayabilirsiniz.
  **<:mogo:768397908604485632> ${prefix}altınal** Paranızla altın alıp marketten eşya satın alabilirsiniz.
  **<:mogo:768397908604485632> ${prefix}elmasal** Altınınızla elmas alıp marketten eşya satın alabilirsiniz.
  **<:mogo:768397908604485632> ${prefix}elmas-yolla** İstediğiniz kişiye elmas yollayabilirsiniz.
  **<:mogo:768397908604485632> ${prefix}günlük** Günlük maaşınızı verir.
  **<:mogo:768397908604485632> ${prefix}market** Eşya satın alabilirsiniz gösterir.
  **<:mogo:768397908604485632> ${prefix}meslek** Meslek sahibi olarak daha hızlı para kazanabilirsiniz
  **<:mogo:768397908604485632> ${prefix}para-yolla** İstediğiniz kişiye para yollayabilirsiniz.
  **<:mogo:768397908604485632> ${prefix}soygun** Etiketlediğiniz Kişiden Para Çalarsınız.
  **<:mogo:768397908604485632> ${prefix}kazı-kazan** Kazı kazan oynarsınız.
`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekonomi'],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'oyun'
};