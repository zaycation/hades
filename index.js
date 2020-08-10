// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();
const config = require('./config.json');


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong, bitch. Now go away and stop summoning me.');
    } else if (message.content === 'cp') {
        // send back mean message to creeps that like cp
        message.channel.send('BRUHH stfu!! Go somewhere else u weird mf.');
    }});
    client.login(config.token)