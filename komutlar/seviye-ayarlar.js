const Discord = require('discord.js');

const db = require("quick.db")

exports.run = async (client, message, args) => {

let kanal = await db.fetch(`seviyekanal${message.guild.id}`)

let xp = await db.fetch(`seviyexp${message.guild.id}`)

let sınır = await db.fetch(`seviyesınır${message.guild.id}`)

let kanal1 = [];

  if(kanal) kanal1 = `<a:hg:768790537108062248> **Açık!**`

  if(!kanal) kanal1 = `<a:by:768790536916041728> **Kapalı!**`

  let xp1 = [];

  if(xp) xp1 = `<a:hg:768790537108062248> \`${xp}\``

  if(!xp) xp1 = `<a:by:768790537108062248> **Ayarlanmamış! Default: \`250\`**`

let sınır1 = [];

  if(sınır) sınır1 = `<a:hg:768790537108062248> \`${sınır}\``

  if(!sınır) sınır1 = `<a:by:768790536916041728> **Ayarlanmamış! Default: \`5\`**`

message.channel.send(new Discord.MessageEmbed()

.setColor("RANDOM")

.setTitle(`${message.guild.name} Sunucusuna Ait Seviye-Sistemi Ayarları!`)   

.addField(`**Seviye-Log**`, `${kanal1}`,true)

.addField(`**Mesaj Başı Verilecek Xp**`, `${xp1}`,true)       

.addField(`**Kaç Puan Seviye Atlama**`, `${sınır1}`,true))

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-ayarlar'

};