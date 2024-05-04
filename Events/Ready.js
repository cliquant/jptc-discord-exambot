const { ActivityType, Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const Database = require("../Functions/database");
const { createStartEmbed, usersWhoCurrentlyTraining, createBooksEmbed, createTopEmbed, explainBotEmbed } = require("../Functions/embeds");
const { GUILD_BOOKS_CHANNEL_ID, GUILD_TRAIN_CHANNEL_ID, GUILD_TOP_CHANNEL_ID, GUILD_START_CHANNEL_ID } = process.env;

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
        Database.prepareDatabase().then(async () => {
            Database.startTimers();
            console.log('[DATABASE] Database is ready.')
            console.log(`[CLIENT] Logged in as ${client.user.tag}.\n`)

            client.user.setPresence({
                activities: [{ name: "Spotify", type: ActivityType.Listening }]
            });
            setInterval(async () => {
                client.user.setPresence({
                    activities: [{ name: `${Database.getActiveLessonCount()} active lessons`, type: ActivityType.Watching }]
                });
                setTimeout(async () => {
                    client.user.setPresence({
                    activities: [{ name: "Spotify", type: ActivityType.Listening }]
                    });
                }, 5000);
            }, 5000);

            const channel_train = client.channels.cache.get(GUILD_TRAIN_CHANNEL_ID);
            await channel_train.messages.fetch().then(messages => {
                channel_train.bulkDelete(messages);
            });
            await channel_train.send(usersWhoCurrentlyTraining()).then(message => {
                setInterval(() => {
                    message.edit(usersWhoCurrentlyTraining());
                }, 1000);
            });
            await channel_train.send(createStartEmbed());

            const channel_top = client.channels.cache.get(GUILD_TOP_CHANNEL_ID);
            await channel_top.messages.fetch().then(messages => {
                channel_top.bulkDelete(messages);
            });
            await channel_top.send(createTopEmbed()).then(message => {
                setInterval(() => {
                    message.edit(createTopEmbed());
                }, 1000);
            });

            const channel_books = client.channels.cache.get(GUILD_BOOKS_CHANNEL_ID);
            await channel_books.messages.fetch().then(messages => {
                channel_books.bulkDelete(messages);
            });

            await channel_books.send(createBooksEmbed());

            const channel_start = client.channels.cache.get(GUILD_START_CHANNEL_ID);
            await channel_start.messages.fetch().then(messages => {
                channel_start.bulkDelete(messages);
            });

            await channel_start.send(explainBotEmbed());


        
        })
    }
}