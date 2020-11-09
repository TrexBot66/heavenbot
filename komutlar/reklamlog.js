
  exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
//
       if (!db.has(`premod_${message.guild.id}`) == true) {
    
      const westrabumbeyyy = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Bu sunucuda premium mod aktif değil. Bu yüzden bu komutu kullanamazsınız. <a:redke:768435516319989780>`)
      return message.channel.send(westrabumbeyyy)

    
  } else {
  
    //
  const member3 = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`**HATA** <a:redke:763316512937082890> - Bu Sunucuda Yetkili Değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("CYAN")
.setDescription(`**HATA** - Bir Kanal Etiketle. <a:redke:768435516319989780>`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`**Başarılı ile reklam log kanalı ayarlandı.** <a:onayke:768438687343968276>`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`**Reklam engel açık değil.** <a:redke:768435516319989780>`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: 'WESTRA',
  usage: 'WESTRA'
}