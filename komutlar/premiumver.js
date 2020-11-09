const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 
  
if(message.author.id !== '750212022100164658')
    
      return;
  

 const args0 = args[0];
  if(!args0) {
    message.channel.send("<a:redke:768435516319989780> Sunucu **ID** yazmalısın!")
  } else {
  
db.set(`premod_${args0}`, "aktif")
  message.channel.send("**Başarıyla premium verildi.** <a:onayke:768438687343968276>")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumver',
    description: '',
    usage: '',

}