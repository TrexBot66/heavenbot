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
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Gif Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
 
        **<:mogo:768397908604485632> ${prefix}gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
        **<:mogo:768397908604485632> ${prefix}man-gif** Rastgele Erkek Gifi Atar!
        **<:mogo:768397908604485632> ${prefix}woman-gif** Rastgele Kadın Gifi Atar!
        **<:mogo:768397908604485632> ${prefix}couple-gif** Rastgele Sevgili Gifi Atar!
        **<:mogo:768397908604485632> ${prefix}baby-gif** Rastgele Bebek Gifi Atar!
        **<:mogo:768397908604485632> ${prefix}animal-gif** Rastgele Hayvan Gifi Atar!
        **<:mogo:768397908604485632> ${prefix}marvel-gif** Rastgele Marvel Gifi Atar!
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Gif-menü'],
  permLevel: 0,
};

exports.help = {
  name: 'gif-menü',
  description: 'a!davet-sistemi Menüsü',
  usage: 'gif-menü'
};