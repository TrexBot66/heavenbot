const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 

  if(message.author.id !== '750212022100164658')
    
      return;

 const args0 = args[0];
  if(!args0) {
    message.channel.send("**Sunucu id yazdın mı yoksa ben mi körüm amk! <a:redke:768435516319989780>**")
  } else {
  
 
db.delete(`premod_${args0}`,"deaktif")
message.channel.send("Başarıyla premium alındı. <a:onayke:768438687343968276> ")
 
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumal',
    description: 'premiumal',
    usage: 'premiumal',

}