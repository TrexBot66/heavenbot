const Discord = require('discord.js')
const db = require('quick.db');
//Efe ve codare
exports.run = async(client, message, args) => {  
let id = "750212022100164658" //buranın içerisine kendi id ni yaz
let user = message.mentions.users.first() || client.users.cache.get(args.slice(1).join(' '))
if (message.author.id !== id) return message.channel.send("Bu komutu yalnızca bot sahibi kullanabilir!")
if(!args[0]) return message.channel.send("Lütfen **aç** veya **kapat** yazınız.\nKullanıcının karaliste bilgisini görmek için **bilgi** kullanın ör:`!!blacklist bilgi @kullanıcı <a:mogo:761571608791220244>`")
switch(args[0]) {//codare & Efe
  case "aç":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın. <a:mogo:761571608791220244>")
    if(user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz.")
    //codare and efe
    db.set(`cokaradalistere_${user.id}`, true)
    message.channel.send(`\`${user.tag}\` **artık botu kullanamayacak.**`)
    break;//codare ve efe
  case "kapat":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın. <a:mogo:761571608791220244>")
    if(user.id == id) return message.channel.send("Bu kullanıcı karalisteye alınamaz.")
    db.delete(`cokaradalistere_${user.id}`)
    message.channel.send(`\`${user.tag}\` **artık botu kullanabilir.**`)
    break;
  case "bilgi":
    if (!user) return message.channel.send("Bir kişiyi etiketlemelisin veya id sini yazmalısın. <a:mogo:761571608791220244>")
let i = db.fetch(`cokaradalistere_${user.id}`)
      if(i == true) message.channel.send(`\`${user.tag}\` botu şu anda **kullanamıyor.** <a:mogo:761571608791220244>`)
      else message.channel.send(`\`${user.tag}\` botu şu anda **kullanabiliyor.**`)
    //codare <3 Efe
    break;
}
}//efe <3 codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 0,
  kategori: "geliştirici"
};
//codare
exports.help = { 
	name: 'blacklist', 
	description: 'Belirlenen kişinin botu kullanmasını engeller.', 
  usage: 'blacklist <aç/kapat/bilgi> <kişi>'
};