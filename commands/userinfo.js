module.exports = {
    name: 'userinfo',
    description: 'UserInfo!',
    execute(message, args) {
        if (message.content === `${prefix}userinfo`) {
            message.channel.send(`Tag: ${message.author.tag}\nUnique ID: ${message.author.id}\nDate Created: ${message.author.createdAt}\nUser's Last Message: ${message.author.lastMessage}`);
        }
    },
};