const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice'); //#DevTR - xFalcon
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size; //#DevTR - xFalcon
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size; //#DevTR - xFalcon
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  devtr_kod = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size //#DevTR - xFalcon
    const devtr  = new Discord.MessageEmbed()
        .setColor("RED")
       // .setThumbnail(`https://cdn.discordapp.com/attachments/616938010725974029/735472467782533200/Baslksz-1re3.gif`) //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`) //#DevTR - xFalcon
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${devtr_kod}\`\`\`**`) //#DevTR - xFalcon
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`) //#DevTR - xFalcon
        .addField(`  **Yazı Kanalları**`, `» **${textChannels}**`) //#DevTR - xFalcon
        .addField(`  **Ses Kanalları**`, `» **${voiceChannels.size}**`) //#DevTR - xFalcon
        .addField(` **Kullanıcılar**`, ` Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true) //#DevTR - xFalcon
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`) //#DevTR - xFalcon
        .setFooter(`Heavan`, client.user.avatarURL()) //#DevTR - xFalcon
    message.channel.send(devtr); //#DevTR - xFalcon
//#DevTR - xFalcon
//#DevTR - xFalcon
} 
                                                           //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon
//#DevTR - xFalcon

//#DevTR - xFalcon
exports.conf = {
    enabled: true, //#DevTR - xFalcon                               //#DevTR - xFalcon                             //#DevTR - xFalcon           //#DevTR - xFalcon
    guildOnly: false, //#DevTR - xFalcon
    aliases: [], //#DevTR - xFalcon
    permLevel: 0 //#DevTR - xFalcon            //#DevTR - xFalcon                        //#DevTR - xFalcon
}; //#DevTR - xFalcon

//#DevTR - xFalcon

exports.help = {
    name: 'say', //#DevTR - xFalcon
    description: 'Say', //#DevTR - xFalcon
    usage: 'say'//#DevTR - xFalcon
} //#DevTR - xFalcon