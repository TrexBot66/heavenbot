const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let user = message.mentions.users.first()
  
  
  if(!user) return message.reply('Oyunu oynamak için kendine bir rakip seçmelisin.')
  if(user.id === message.author.id) return message.reply('Oyunu kendinle oynuyamazsın.')
  if(user.bot) return message.reply('Rakip bir bot olamaz.')
  
  
  message.channel.send(`<@!${user}>,<@${message.author.id}> Seninle **Emoji Yakalamaca** oyununu oynamak istiyor.Kabul ediyor musun? \n\n *evet* / *hayır*`).then(codeming => {
    
   let filtre = mes => mes.author.id === user.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "hayır") {
     
   codeming.edit(`:x: <@${message.author.id}>,<@!${user}> Oyun teklifini reddetti.`)  
   return  
     
   }
    
if(collected.first().content === "evet") {
codeming.delete()
  
  let başlangıç = new Discord.MessageEmbed()
  .setTitle('🎲 Oyun Başlıyor!')
  .setDescription('`10` Saniye sonra bu embedin altında bir emoji belirecek.İlk tıklayan **100** puan kazanır!') 
  .setColor('RANDOM')
  .setFooter('Lydia')
  message.channel.send(başlangıç).then(async function (sentEmbed) {
    
setTimeout(() => {
  

			const emojiArray = ["✅"];
			const filter = (reaction, userz) => emojiArray.includes(reaction.emoji.name) && userz.id === message.author.id || user.id;
		  sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => sentEmbed.edit("Oyun süresi doldu."));
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {

   sentEmbed.edit('Oyunu <@!'+reaction.user.id+'> Kazandı! **100** parası verildi.')       
    
  db.add(`paracık_${reaction.user.id}`, 100)        
          
          
  
        }
    
        })
  
    

  
  
}, 10000)    
    
    
    
    
    
  })
  
  
  
  
  }   
  let kontrol;
  if(collected.first().content === "evet") kontrol = "+"
  if(collected.first().content === "hayır") kontrol = "+"
 if(!kontrol) return message.reply(':x: Doğru bir seçenek yazmalısın. `evet` / `hayır`')
  })
    
    
    
    
    
    
    
    
  })
  
  
  
  
  
  
  
  //CODEMİNG | TÜM HAKLARI SAKLIDIR.
  
  
  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'emoji-yakalamaca',
  description: 'taslak', 
  usage: 'emoji-yakalamaca'
};
