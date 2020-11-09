const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let dil = await db.fetch(`dil_${message.guild.id}`)
  
  
  
  if(!!dil) { // DİL AYARLANMAMIŞ ( BOTUNUZ EĞER DİL AYARLANMADIYSA HANGİ DİLİ KULLANMASINI İSTİYORSANIZ. )
    message.channel.send('Herhangi bir dil ayarlanmamış varsayılan dil çalıştı.')
  }
  
  
  if(dil === "TR") { // TÜRKÇE DİL
    
   message.channel.send('botun dili **TÜRKÇE** olarak ayarlanmış türkçe cevap vericek.')
   message.channel.send('Pingim: **'+client.ping+'** ms') 
  }
 
    if(dil === "EN") { // TÜRKÇE DİL
    
   message.channel.send('botun dili **İNGİLİZCE** olarak ayarlanmış ingilizce cevap vericek.')
   message.channel.send('My Ping Level: **'+client.ping+'** ms') 
  }
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'dil',
  description: 'taslak', 
  usage: 'dil'
};