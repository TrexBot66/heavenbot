const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let yetkili = db.fetch(`muteyetkilirol_${message.guild.id}`)

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(`<a:by:768435516319989780> Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın!`)

let muterol = db.fetch(`muterol_${message.guild.id}`)

if (!muterol) return message.channel.send(`<a:by:768435516319989780> Mute Rolü Ayarlanmamış! Ayarlamak İçin: \`!!mute-rol @rol\``)
let kullanıcı = message.mentions.members.first()
if(!kullanıcı) return message.channel.send(`<a:by:768438687343968276> Muteleyeceğin Kullanıcıyı Belirt!`)

let sebep = args.slice(1).join(' ')
if (!sebep) return message.channel.send(`<a:by:768438687343968276> Muteleme Sebebini Belirtmelisin!`)

message.guild.channels.cache.forEach(x => x.createOverwrite(muterol, {
SEND_MESSAGES: false
}))
  
kullanıcı.roles.add(muterol)

message.channel.send(`<a:hg:768438687343968276> ${kullanıcı}, ${message.author} Tarafından **${sebep}** Nedeniyle Muteledi! \n Not: Mute Rolu Üste Olmasa Mute Çalışmaz`)

db.set(`mutelimi_${message.guild.id}_${kullanıcı.id}`, 'mutelimi')

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'mute'
}
﻿