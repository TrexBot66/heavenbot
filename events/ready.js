const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"!!help | Sistem optimize edildi",
"Heavan Sponsore | Quality System",
"Yeni Komut - !!özelodasistemi",
"!!invite | Advanced commands",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/mogoply' })
}, 15000);
    console.log(`Heavan Giriş Yaptı.`);
}
  
