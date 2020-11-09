const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let devtr=[
      "Aşk ölçer %1 Gösteriyor.",
      "Aşk ölçer %2 Gösteriyor.",
      "Aşk ölçer %3 Gösteriyor.",
      "Aşk ölçer %4 Gösteriyor.",
      "Aşk ölçer %5 Gösteriyor.",
      "Aşk ölçer %6 Gösteriyor.",
      "Aşk ölçer %7 Gösteriyor.",
      "Aşk ölçer %8 Gösteriyor.",
      "Aşk ölçer %9 Gösteriyor.",
      "Aşk ölçer %10 Gösteriyor.",
      "Aşk ölçer %11 Gösteriyor.",
      "Aşk ölçer %12 Gösteriyor.",
      "Aşk ölçer %14 Gösteriyor.",
      "Aşk ölçer %15 Gösteriyor.",
      "Aşk ölçer %16 Gösteriyor.",
      "Aşk ölçer %18 Gösteriyor.",
      "Aşk ölçer %19 Gösteriyor.",
      "Aşk ölçer %20 Gösteriyor.",
      "Aşk ölçer %29 Gösteriyor.",
      "Aşk ölçer %31 Gösteriyor. (Tehlike)",
      "Aşk ölçer %32 Gösteriyor.",
      "Aşk ölçer %34 Gösteriyor.",
      "Aşk ölçer %35 Gösteriyor.",
      "Aşk ölçer %36 Gösteriyor.",
      "Aşk ölçer %37 Gösteriyor.",
      "Aşk ölçer %38 Gösteriyor.",
      "Aşk ölçer %39 Gösteriyor.",
      "Aşk ölçer %40 Gösteriyor.",
      "Aşk ölçer %41 Gösteriyor.",
      "Aşk ölçer %42 Gösteriyor.",
      "Aşk ölçer %43 Gösteriyor.",
      "Aşk ölçer %55 Gösteriyor.",
      "Aşk ölçer %57 Gösteriyor.",
      "Aşk ölçer %59 Gösteriyor.",
      "Aşk ölçer %60 Gösteriyor.",
      "Aşk ölçer %62 Gösteriyor.",
      "Aşk ölçer %63 Gösteriyor.",
      "Aşk ölçer %64 Gösteriyor.",
      "Aşk ölçer %65 Gösteriyor.",
      "Aşk ölçer %66 Gösteriyor.",
      "Aşk ölçer %69 Gösteriyor.",
      "Aşk ölçer %70 Gösteriyor.",
      "Aşk ölçer %74 Gösteriyor.",
      "Aşk ölçer %75 Gösteriyor.",
      "Aşk ölçer %76 Gösteriyor.",
      "Aşk ölçer %77 Gösteriyor.",
      "Aşk ölçer %79 Gösteriyor.",
      "Aşk ölçer %80 Gösteriyor.",
      "Aşk ölçer %81 Gösteriyor.",
      "Aşk ölçer %82 Gösteriyor.",
      "Aşk ölçer %83 Gösteriyor.",
      "Aşk ölçer %0 Gösteriyor.",
      "Aşk ölçer %95 Gösteriyor.(ooo kanka siz direk evlenin ya)",
      "Aşk ölçer %99 Gösteriyor.(ooo kanka siz direk evlenin ya)",
      "Aşk ölçer %100 Gösteriyor. (ooo kanka siz direk evlenin ya)",
    ]
let devtr_kod_paylasim = devtr[Math.floor(Math.random() * devtr.length)]
let xfalcon = msg.mentions.members.first()
     if (!xfalcon) return msg.channel.send('**Kimi Sevdiğini Etiketle?** <a:by:771953412862246912> ') 
  msg.channel.send(`${msg.author}, ${xfalcon} **İle Olan Aşkını ${devtr_kod_paylasim}.**<a:by:771953412862246912>`)
    }



  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'aşk-ölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }