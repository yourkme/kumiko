import { Message, EmbedBuilder } from 'discord.js';

class Command {
    args : Message;

    constructor(args : Message) {
        this.args = args;
    }
    
    bot = () => {
        const botInformation = new EmbedBuilder()
            .setTitle("kumiko - Open Source Discord bot with discord.js")
            .setURL("https://github.com/yourkme/kumiko")
            .setDescription("서버를 관리하는 귀여운 아이입니다.")
            .setFooter({text : "First Typescript Project <3"});
        
        console.log("bot worked");
        this.args.channel.send({embeds : [botInformation]});
    }
    server = () => {
        const serverInformation = new EmbedBuilder()
    }
}

export { Command };