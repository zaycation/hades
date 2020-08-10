const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Prepared to fuck shit up!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong, bitch. Now go away and stop summoning me.');
    } else if (command === 'beep') {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}help`) {
        message.channel.send(`Hades Bot CMD List...\n
    [PREFIX IS ?]\n \n
    ?help ~ display help and cmd list\n
    ?serverinfo ~ display info of current server\n
    ?userinfo ~ display info of current user\n
    ?ping ~ ping pong boi\n
    ?beep ~ boop boi\n \n
    ?del [# of msgs to delete]`)
    } else if (message.content === `${prefix}serverinfo`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer region: ${message.guild.region}\nDate created: ${message.guild.createdAt}`);
    } else if (message.content === `${prefix}userinfo`) {
        message.channel.send(`Tag: ${message.author.tag}\nUnique ID: ${message.author.id}\nDate Created: ${message.author.createdAt}\nUser's Last Message: ${message.author.lastMessage}`);
    } else if (message.content === 'cp') {
        // send back mean message to creeps that like cp
        message.channel.send('BRUHH stfu!! Go somewhere else u weird mf.');
    } else if (command === `del`) {
        const amount = parseInt(args[0]) + 1;
        message.channel.send('Messages have been deleted... Discord prob still saved them hoes tho /s');
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    }
    // other commands...
});

client.login(token);