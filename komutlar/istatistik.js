const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(`:spy: Yapımcım:`, ` <@750212022100164658>`, true)
     .addField(`:question: Yardımcı Yapımcı:`, `<@458327367467663360> \n `, true)
    .addField(`:question: Yardımcı Yapımcı:`, ` <@670736844761202688> \n`, true)
    .addField(`:question: Yardımcı Yapımcı:`, ` <@728663975633354814> \n`, true)
  .addField(":desktop: Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB \n`, true)
  .addField(":clipboard: Sunucu Sayısı:", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField(":busts_in_silhouette: Kullanıcı Sayısı", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(":tv: Kanallar", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField(`:construction_worker: Çalışma Süresi:`, `${duration}`, true)
  .addField(":timer: Ping", `${client.ws.ping}`, true)
  .addField(":globe_with_meridians: Discord.js Sürümü", `${Discord.version}`, true)
  .addField(`:book: Destek Sunucum`, `[Tıkla](https://discord.gg/UUNfxyU)`, true)
  .addField(`:fax: Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=767415660590399549&scope=bot&permissions=2146958847)`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};