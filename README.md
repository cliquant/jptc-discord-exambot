[![EXAMBOT](https://i.imgur.com/aPjk6vT.png)](https://github.com/cliquant)

> [!NOTE]
> The bot was created for the JPTC challenge, for my own experience and to help students prepare for their exams. ( The bot is in  latvian for now - I haven't finished language system. )

> [!TIP]
> Cannot use NODEMON since I'm using JSON database and it's all time updating, NODEMON thinks it's updating the code when database is being used.

[Test Server](https://discord.gg/EMzXFQZq) ( Bot is online till JPTC challange end. )

## Setup:

```
1. Download NodeJS and NPM from (https://nodejs.org/en)
2. Download the project or using "git clone https://github.com/cliquant/discord-exambot" clone it
3. Open IDE or terminal in the project folder and enter in terminal "npm i" ( make sure you have package.json file )
4. rename ".env.example" to ".env".
5. Open ".env" and enter your bot/guild details.
6. Run bot using "node index.js"
```

You can create your bot and get token at: [Discord Applications](https://discord.com/developers/applications)

## Commands:

```
/help - Explains how the bot works.
/profile - View your profile/progress.
/top - With this command you can see the top users ( you can get points by doing training ).
/books - With this command it is possible to read ( a book ) about a specific topic.
/train - With this command it is possible to start a training to test your knowledge.
/stop - With this command it is possible to stop a training.
/active - With this command it is possible to see who is currently training.
```

## Channels:

You're able to disable/enable them in .env if you want only commands based all.

## .env

```
AUTHOR="CLIQUANT"

DISCORD_BOT_TOKEN=""
DISCORD_BOT_ID=""

DISCORD_GUILD_ID=""

GUILD_TRAIN_CHANNEL_ID=""
GUILD_TOP_CHANNEL_ID=""
GUILD_LOG_CHANNEL_ID=""
GUILD_BOOKS_CHANNEL_ID=""
GUILD_START_CHANNEL_ID=""

START_CHANNEL_ENABLED=true
BOOKS_CHANNEL_ENABLD=true
TOP_CHANNEL_ENABLED=true
TRAINING_CHANNEL_ENABLED=true

GUILD_CATEGORY_LESSONS_ID=""

GUILD_ADMIN_ROLE_ID=""

MAX_ACTIVE_LESSONS=2
```

## Preview

[![EXAMBOT](https://i.imgur.com/20sa9ij.png)](https://github.com/cliquant)

[![EXAMBOT](https://i.imgur.com/GDuvIeo.png)](https://github.com/cliquant)

[![EXAMBOT](https://i.imgur.com/hBsSL35.png)](https://github.com/cliquant)

[![EXAMBOT](https://i.imgur.com/J62YPqM.png)](https://github.com/cliquant)

[![EXAMBOT](https://i.imgur.com/UBU85c6.png)](https://github.com/cliquant)

[![EXAMBOT](https://i.imgur.com/Z4ZbGsA.png)](https://github.com/cliquant)

```I know it's pretty dumb to use json as database :D```