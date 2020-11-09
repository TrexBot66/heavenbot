
 exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
  
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`**HATA** <a:redke:763316512937082890> - Bu Sunucuda Yetkili Değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${message.guild.id}`)
      message.channel.send(`<a:redke:763316512937082890> **Başarılı ile reklam engel kapandı.** <a:redke:763316512937082890>`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${message.guild.id}.durum`,true)
      message.channel.send(`**Başarılı ile reklam engel açıldı. ** <a:onayke:768438687343968276>`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel"],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'WESTRA',
  usage: 'WESTRA'
}