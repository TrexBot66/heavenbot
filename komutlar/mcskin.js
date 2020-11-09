const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let devtr_kod = args.slice(0).join(' ');
 let xfalcon = 'https://mc-heads.net/body/' + devtr_kod
 if (devtr_kod.length < 1) return message.reply('Bir Oyuncu Adı Giremlisin. \Örn: AliDenizSenpotuk');

 const DevTR = new Discord.MessageEmbed()
   .setColor('#ffa200')
   .setTitle('Oyuncu: ' + devtr_kod)
   .setImage(xfalcon)
   .setFooter(`Eğer fotoğrafta Steve fotosu varsa oyuncu adını yanlış girmişsinizdir demektir`)
 message.channel.send(DevTR);
 }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'mcskin',
};