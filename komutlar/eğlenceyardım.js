const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 

exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
 .setTitle(`<a:ykleniyor:768397918264623114> **Heavam - Eğlence Komutlar** <a:ykleniyor:768397918264623114>`)        .setDescription(`
 
        **<:mogo:768397908604485632> ${prefix}yumruk-at** Etiketlediğiniz Kişiye Yumruk Atarsınız.
        **<:mogo:768397908604485632> ${prefix}tersyazı** Yazdığınız Yazıyı Tersine Çevirir.
        **<:mogo:768397908604485632> ${prefix}sarıl** Etiketlediğiniz Kişiye Sarılırsınız.
        **<:mogo:768397908604485632> ${prefix}kralol** Kral Olursunuz.
        **<:mogo:768397908604485632> ${prefix}fbi** FBI Gif Atar
        **<:mogo:768397908604485632> ${prefix}espri** Rastgele Espri Atar.
        **<:mogo:768397908604485632> ${prefix}elyazısı** Yazdığınız Yazıyı El Yazısına Çevirir.
        **<:mogo:768397908604485632> ${prefix}doğrulukcesaret** Doğruluk Veya Cesaret Cümlesi Atar.
        **<:mogo:768397908604485632> ${prefix}banner**  Yazdığınız YAZIYI Bannera Çevirir.
        **<:mogo:768397908604485632> ${prefix}aşk-ölçer** Etiketlediğiniz Kişiyle Aranızdaki Aşkı Ölçer. (Şaka Amaçlıdır)
	    **<:mogo:768397908604485632> ${prefix}tkm** Bot ile tkm Oynarsınız (t-k-m)
        **<:mogo:768397908604485632> ${prefix}ys** Yıldız Savaşı Oynarsınız')
        **<:mogo:768397908604485632> ${prefix}bg** Bilek Güreşi Oynarsınız
        **<:mogo:768397908604485632> ${prefix}1vs1** Düello Oynarsınız
`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'a!davet-sistemi Menüsü',
  usage: 'eğlence'
};