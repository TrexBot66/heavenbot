const westra = require('discord.js')
const westraclient = new westra.Client()
const westraembed = new westra.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Selam!\n **Heavan** Botu Ekleyerek Bize Destek Sağlayabilirsiniz.\nBotu Eklemek İçin [BURAYA](https://discord.com/oauth2/authorize?client_id=767415660590399549&scope=bot&permissions=2146958847) Tıkla!`)
exports.run = async (westraclient, message, args) => {
	message.channel.send(westraembed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davet"],
    permLevel: 0,
}
exports.help = {
    name: 'invite',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}