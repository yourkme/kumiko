import { Client, Partials, GatewayIntentBits } from "discord.js";
import { Command } from './modules/default'
import { Setup, Token } from './config/config.json';

const client = new Client ({
    intents : [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials : [
        Partials.Channel
    ]
});

client.once('ready', async => {
    client.user?.setPresence({ activities : [
        {name : Setup.presenceText, type : Setup.presenceType},
    ]});
})

client.on('messageCreate', async msg => {
    if(msg.content[0] != '~') return;
    msg.content = msg.content.slice(1);
    
    let interpreter = new Command(msg);
    let command = msg.content.split(' ')[0];

    try {
        interpreter[command]();
    } catch (err) {
        return;
    }

});

client.login(Token)