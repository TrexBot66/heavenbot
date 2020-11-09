const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`<a:by:768435516319989780> Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
if(message.channel.id !== kanal) return message.channel.send(`<a:by:768435516319989780> Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if (!kızrol) return message.channel.send(`<a:by:768790537108062248> Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`<a:by:768790537108062248>Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
let isim = args[1]
if (!isim) return message.channel.send(`<a:by:768790537108062248> İsmini Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`<a:by:768790537108062248> Yaşını Belirtmelisin ! `)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kız `)
.setColor('BLACK')
.setDescription(`<a:hg:761571608791220244> Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n <a:mogo:761571608791220244> Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n `)
.addField(`<a:mogo:761571608552144936> Kullanıcının ismi;`, `${isim}`, true)
.addField(`<a:mogo:761571608552144936> Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}