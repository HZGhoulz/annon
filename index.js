const Discord = require('discord.js');
const { create } = require('domain');
const bot = new Discord.Client;
const prefix = '-';
const fs = require('fs');
const ms = require('ms');
require("./html.js");




bot.on('ready', () => {
    console.log('Your bot is now online!')
    bot.user.setActivity("Edates",{
        type: "STREAMING"
    })
});


bot.on("message", message => {
if (message.author.bot) return;
if (message.channel.author) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLocaleLowerCase();

    if(!message.content.startsWith(prefix))return;

if (command === 'message') {
        if(!message.member.hasPermission(['KICK_MEMBERS'])) return;
        const dmuser = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if (!args[0]) return message.channel.send("Please list a member to message.")
          let messagedms = args.join(" ").slice(22);
          if (!messagedms) return message.channel.send('Please list a message.')
      
        dmuser.send(messagedms)
        message.channel.send('Sent ✅')
      }
      
        
})

bot.login('OTUyNjk5ODU3ODMzOTc5OTQ0.Yi504g.RU4I3bTK9smIYfXoOUo3FzE66JY');