
  exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
//
       if (!db.has(`premod_${message.guild.id}`) == true) {
    
      const westrabumbeyyy = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`<a:redke:768435516319989780> Bu sunucuda premium mod aktif değil. Bu yüzden bu komutu kullanamazsınız.`)
      return message.channel.send(westrabumbeyyy)

    
  } else {
  
    //
  const member3 = new Discord.MessageEmbed()
     .setColor("Heavan")
.setDescription(`<a:redke:768435516319989780> **HATA** <a:redke:768435516319989780> - Bu Sunucuda Yetkili Değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("Heavan")
.setDescription(`<a:redke:768435516319989780> **HATA** <a:redke:768435516319989780> - Bir Kanal Etiketle.`)
      if(küfür) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`küfür.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`<a:onayke:768438687343968276> **Başarılı ile küfür log kanalı ayarlandı.** <a:onayke:768438687343968276>`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`<a:redke:768435516319989780> **Küfür engel açık değil.** <a:redke:768435516319989780>`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-log"],
  permLevel: 0
};

exports.help = {
  name: 'küfürlog',
  description: 'kl',
  usage: 'WESTRA'
}