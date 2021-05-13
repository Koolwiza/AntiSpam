const {
    MessageEmbed
} = require('discord.js')


MessageEmbed.prototype.success = function () {
	this.setColor("GREEN")
	return this
}

MessageEmbed.prototype.error = function () {
	this.setColor("RED")
	return this
}

MessageEmbed.prototype.default = function(user) {
	this
	.setAuthor(user.tag, user.displayAvatarURL())
	.setFooter(client.user.username, client.user.displayAvatarURL())
	return this
}