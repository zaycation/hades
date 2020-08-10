module.exports = {
	name: 'serverinfo',
	description: 'ServerInfo!',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer region: ${message.guild.region}\nDate created: ${message.guild.createdAt}`);
	},
};