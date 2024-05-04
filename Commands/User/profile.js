const { SlashCommandBuilder } = require("discord.js");
const embeds = require("../../Functions/embeds");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Apskati savu profilu/progressu.'),
	async execute(interaction) {
        const user = interaction.user;

        await interaction.reply(embeds.myProfileEmbed(user));
	},
};