const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const embeds = require("../../Functions/embeds");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('training')
		.setDescription('Darbības gar treniņu sistēmu.')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('Izvēlies')
				.setRequired(true)
				.addChoices(
					{ name: 'question', value: 'trainingQuestion' },
                    { name: 'lesson', value: 'trainingLesson' },
				))
		.addStringOption(option =>
			option.setName('option')
				.setDescription('Izvēlies ko gribi darīt')
				.setRequired(true)
				.addChoices(
					{ name: 'pievienot', value: 'add' },
					{ name: 'dzēst', value: 'delete' },
					{ name: 'rediģēt', value: 'edit' },
				))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const user = interaction.user;
		const type = interaction.options.getString('type');
		const option = interaction.options.getString('option');

        if (type == 'trainingQuestion') {
            let forWhat = 'trainingQuestion-' + option;
            await interaction.reply(await embeds.admin_ChooseLessonEmbed(forWhat));
        }

        if (type == 'trainingLesson') {
            let forWhat = 'trainingLesson-' + option;
            if (option == 'add') {
                await interaction.showModal(await embeds.admin_CreateLessonModal(forWhat));
            }
			if (option == 'delete') {
				await interaction.reply(await embeds.admin_ChooseLessonEmbed(forWhat));
			}
			if (option == 'edit') {
				await interaction.reply(await embeds.admin_ChooseLessonEmbed(forWhat));
			}
        }
	},
};