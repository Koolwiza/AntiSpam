const Discord = require('discord.js'),
    Enmap = require('enmap'),
    AntiSpam = require('./struct/AntiSpam'),
    client = new Discord.Client(),
    config = require('./config.json')

require('./helpers/extenders')

client.on('ready', () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
})

client.on("message", async message => {
    if (!message.guild || message.author.bot) return;
    new AntiSpam({})
    let args = message.content.trim().slice(prefix.length).split(/\s+/g)
    let commandName = args.shift().toLowerCase()


})