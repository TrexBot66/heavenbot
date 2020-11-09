const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.delete();
message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Eğer Kabul Ediyorsan => `onay` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('TheRenk', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('TheRenk', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};