import { Client, Events, Message, GatewayIntentBits, EmbedBuilder } from "discord.js";
import { Command } from './modules/default'
import { Token } from './config/config.json';

const client = new Client ({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.on('messageCreate', async msg => {
    if(msg.content[0] != '~') return;
    msg.content = msg.content.slice(1);

    let interpreter = new Command(msg);

    try {
        interpreter[msg.content]();
    } catch (err) {
        console.log(err);
    }

});

client.login(Token)