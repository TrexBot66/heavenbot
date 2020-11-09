const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'En utanç duyduğun şey ?','En Kötü Anın ne ?','En sevmediğin kişi kim ?','Geçmişte yaşadığın en kötü olay ?','Sahil olduğunu en büyük ve kötü alışkanlık','Seni en çok ne etkiler ','Burnunu karıştırirmisin',]
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır','Aklına gelen ilk kelimeyi söyle','Bir dakika boyunca birini taklit et','Telefonda ki tarayıcı geçmişini ss alıp at','Son zamanlarda nefret ettiğin veya sevdiğin kişi kim ?','İnstagram veya wp de ki son mesaji oku','Hayatının en büyük hatası ne?','İşlediğini en büyük suç ?','Çocukluğundan bir sırrını bize de paylaş','Şimdiye kadar yaptığın en büyük şey?',]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};