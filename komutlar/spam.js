const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:redke:768435516319989780> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`<a:redke:768435516319989780> Spam engelleme zaten aktif. Daha neyi açmaya çalışıyorsun?`)).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`, 'Heavan');
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setColor('#000001').setDescription(`<a:onayke:761571609551044629> Spam kısıtlaması başarıyla açıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel'],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};