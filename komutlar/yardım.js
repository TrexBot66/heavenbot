const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('767415660590399549') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:768397918264623114> **Heavan - Komutlar** <a:ykleniyor:768397918264623114>`)
        .setDescription(`
  **<:mogo:768397908604485632> ${prefix}premium-sistemi **Premium Komutlarını Gösterir.	
  **<:mogo:768397908604485632> ${prefix}ekonomi **Ekonomi Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}gif-menü **  Gif Komutlarını Gosterir.
  **<:mogo:768397908604485632> ${prefix}moderasyon**  Moderasyon Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}moderasyon2**  2. Moderasyon Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}kullanıcı** Kullanıcı Komutlarıni Gösterir.
  **<:mogo:768397908604485632> ${prefix}eğlence ** Eğlence Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}kayıt-sistemi**  Kayıt Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}seviye-yardım**  Seviye Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}koruma-yardım** Koruma Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}logo-yardım** Logo Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}botlist-yardım** Bot List Komutlarını Gösterir.
  **<:mogo:768397908604485632> ${prefix}özelodasistemi-yardım** Özel Oda Sistemi Komutlarını Gösterir.

\n <a:mogo:768397918264623114> **Heavan - Genel Komutlar**

**<:mogo:768397908604485632>  ${prefix}özel-komut __Özel Komut Sistemini Gösterir.__**
**<:mogo:768397908604485632>  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**<:mogo:768397908604485632>  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**<:mogo:768397908604485632>  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**<:mogo:768397908604485632>  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**
`)
        .addField(`**<a:ykleniyor:768397918264623114> Heavan Bot Bağlantıları <a:ykleniyor:768397918264623114>**`, ` <a:alev:768400614094012417>[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=767415660590399549&scope=bot&permissions=2146958847) **|** [Destek Sunucusu](https://discord.gg/UUNfxyU) **|** <a:alev:768400614094012417>`)
     .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    .setImage("https://media.discordapp.net/attachments/772918293543125003/772927675496661012/northdanmagoya.gif")
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','y'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'help'
};