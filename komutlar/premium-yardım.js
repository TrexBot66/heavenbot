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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Premium Komutlar** <a:ykleniyor:768397918264623114>`)
	   .setDescription(`
   **<:mogo:768397908604485632> ${prefix}reklamlog **Reklam engel logunu ayarlarsınız.
   **<:mogo:768397908604485632> ${prefix}küfürlog **Küfür engel logunu ayarlarsınız.
   **<:mogo:768397908604485632> ${prefix}rol **Ayarlamalı rol alma/verme sistemidir.
`)
      .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'premiumsistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};