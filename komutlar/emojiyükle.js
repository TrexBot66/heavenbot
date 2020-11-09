const Discord = require('discord.js');

exports.run = function(client, message, args) {
 
  if (!message.member.hasPermission("CONNECT")) return message.channel.send(`<a:srowyanl:733997295711944734> Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let [westralink, westraad] = args.join(" ").split(" - ");
  if (!westralink) return message.channel.send(`<a:srowyanl:733997295711944734> Bir link yazmalısın.`)
  if (!westraad) return message.channel.send(`<a:srowyanl:733997295711944734> Bir isim yazmalısın.`)
 
  guild.createEmoji(westralink, westraad)
    .then(emoji => message.channel.send(`<a:srowdoru:733997295384789023> ${emoji.name} adında emoji başarıyla oluşturuldu. (${emoji})`))
    .catch(console.error);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 3
};

exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emojiyükle <link> - <isim>'
};