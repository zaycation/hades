module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, args) {
        if (message.content === `${prefix}help`) {
            message.channel.send(`Hades Bot CMD List...\n
        [PREFIX IS ?]\n \n
        ?help ~ display help and cmd list\n
        ?serverinfo ~ display info of current server\n
        ?userinfo ~ display info of current user\n
        ?ping ~ ping pong boi\n
        ?beep ~ boop boi\n \n
        ?del [# of msgs to delete]`)
        }
    },
};