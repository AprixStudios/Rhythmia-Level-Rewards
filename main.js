const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const keepAlive = require(`./server.js`);


setInterval(() => {
  http.get('http://lime-abrasive-throne.glitch.me/');
}, 60000);

setInterval(() => {
  http.get('http://aprixkeepalives.glitch.me/');
}, 60000);

client.on('message', message => {
  if (message.author.id === '159985870458322944') {
    console.log('is Mee6');
    if (message.channel.id !== '720675435335123044') return;
    console.log('is a levelup');
    if (message.content.endsWith(`level 3!`)) message.mentions.members.first().roles.add(`720650527935037513`, `Level 3 reached.`);
    if (message.content.endsWith(`level 5!`)) message.mentions.members.first().roles.add(`720649533977264130`, `Level 5 reached.`);
    if (message.content.endsWith(`level 10!`)) message.mentions.members.first().roles.add(`720649531267481681`, `Level 10 reached.`);
    if (message.content.endsWith(`level 20!`)) message.mentions.members.first().roles.add(`720649525156511754`, `Level 20 reached.`);
    if (message.content.endsWith(`level 25!`)) message.mentions.members.first().roles.add(`720649510027788469`, `Level 25 reached.`);
    if (message.content.endsWith(`level 30!`)) message.mentions.members.first().roles.add(`720649504084459621`, `Level 30 reached.`);
    if (message.content.endsWith(`level 40!`)) message.mentions.members.first().roles.add(`720649492512374784`, `Level 40 reached.`);
    if (message.content.endsWith(`level 50!`)) message.mentions.members.first().roles.add(`720649341399728158`, `Level 50 reached.`);
    if (message.content.endsWith(`level 60!`)) message.mentions.members.first().roles.add(`720649340569518160`, `Level 60 reached.`);
    if (message.content.endsWith(`level 70!`)) message.mentions.members.first().roles.add(`720649339541913601`, `Level 70 reached.`);
    if (message.content.endsWith(`level 75!`)) message.mentions.members.first().roles.add(`720649337092177920`, `Level 75 reached.`);
    if (message.content.endsWith(`level 80!`)) message.mentions.members.first().roles.add(`720649327986475038`, `Level 80 reached.`);
    if (message.content.endsWith(`level 90!`)) message.mentions.members.first().roles.add(`720649314497462363`, `Level 90 reached.`);
    if (message.content.endsWith(`level 100!`)) message.mentions.members.first().roles.add(`720649130933878834`, `Level 100 reached.`);
  }
});


client.once('ready', ready => {console.log('hehe');});
// This is a test
keepAlive();
client.login(process.env.TOKEN);