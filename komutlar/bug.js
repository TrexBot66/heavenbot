const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Botumuzda bug bulursanız Mogo#5050 Söylerseniz Mogo sizi ödüllendirecektir.** <a:mogo:761571608552144936>')

const embed = new Discord.MessageEmbed()
.setTitle("İstek Kod")
.setColor('BLUE')
.setDescription(`**Bug Kanal** ${message.channel.name} \n **Bug Bıldırılen Sunucu** \`${message.guild.name}\` \n **Bugu Bıldıren Kullanıcı** <@${message.author.id}> \n **Bug:** \`${istek}\``)
client.channels.cache.get('765811604209532928').send(embed)
  
message.channel.send("**Bug bildiriminiz ekibimize gönderildi. en kısa zamanda halledicez. Teşşekür ederiz** <a:mogo:761571608791220244>");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}