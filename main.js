const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const keepAlive = require(`./server.js`);


setInterval(() => {
  http.get('http://NA-level-rewards--aprixia.repl.co/');
}, 10000);

client.on('message', message => {
  if (message.author.id === '159985870458322944') {
    console.log('is Mee6');
    if (message.channel.id !== '715858624353796096') return;
    console.log('is a levelup');
    if (message.content.endsWith(`level 5!`)) message.mentions.members.first().roles.add(`715961119508004954`, `Level 5 reached.`);
    if (message.content.endsWith(`level 10!`)) message.mentions.members.first().roles.add(`715961234687787049`, `Level 10 reached.`);
    if (message.content.endsWith(`level 15!`)) message.mentions.members.first().roles.add(`715961339272626259`, `Level 15 reached.`);
    if (message.content.endsWith(`level 20!`)) message.mentions.members.first().roles.add(`715961489143496755`, `Level 20 reached.`);
    if (message.content.endsWith(`level 30!`)) message.mentions.members.first().roles.add(`716876258968862730`, `Level 30 reached.`);
    if (message.content.endsWith(`level 50!`)) message.mentions.members.first().roles.add(`717604067282518047`, `Level 50 reached.`);
  }
});


client.once('ready', ready => {console.log('hehe');});
// This is a test
keepAlive();
client.login(process.env.TOKEN);