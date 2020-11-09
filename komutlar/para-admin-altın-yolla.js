const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
      
  if(message.author.id !== '750212022100164658') if(message.author.id !== '595604842702045194')
    
      return;
  
  
  let user = message.mentions.users.first();

  if (!user) return message.reply('<:money:768783648933543976> **Kime altın yollayacağını etiketlemen lazım!**');
  if (user.bot === true) return message.reply('<:money:768783648933543976> **altın bir bota yollarsan sen zararlı çıkarsın!**');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('<:money:768783648933543976> **Yollayacağın miktarı yazman gerek!**');


if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")

    
    

  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

 



  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<:money:768783648933543976> **${user} Adlı kullanıcıya altın yollandı, yollanılan miktar: ${mesaj}**`)
  message.channel.send(embed)
  db.add(`altıncıklar_${user.id}`, mesaj)

  

}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['admin-altın-ver', 'adminaltınyolla'],
  permLevel: 0,
  kategori: "yapımcı"
};

exports.help = {
  name: 'admin-altın-yolla',
  description: 'İstediğiniz kişiye altın yollayabilirsiniz.',
  usage: 'admin-altın-yolla <@üye> <miktar>'
};