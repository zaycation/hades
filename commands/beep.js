module.exports = {
    name: 'beep',
    description: 'Beep!',
    execute(message, args) {
        if (command === 'beep') {
            message.channel.send('Boop.');
        }
    },
};