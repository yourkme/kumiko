import { Message, EmbedBuilder } from 'discord.js';
import { TEXT } from '../config/lang.json'

interface Command {
    [key : string] : any
}

let lang = TEXT.default;

class Command {
    args : Message;

    constructor(args : Message) {
        this.args = args;
    }

    // Bot Commands
    
    bot = () => {
        let botInformation = new EmbedBuilder()
            .setTitle(lang.bot.title)
            .setURL(lang.bot.url)
            .setDescription(lang.bot.description)
            .setFooter({text : lang.bot.footer.text});
        
            this.args.channel.send({embeds : [botInformation]});
    }

    server = () => {
        if(this.args.guild?.available) {
            let guild = this.args.guild;

            let cretedDate = `${guild.createdAt.getFullYear()}/${guild.createdAt.getMonth() + 1}/${guild.createdAt.getDate()}`;
            let joinedDate = `${guild.joinedAt.getFullYear()}/${guild.joinedAt.getMonth() + 1}/${guild.joinedAt.getDate()}`;

            let serverInformation = new EmbedBuilder()
                .setAuthor({
                    iconURL : `${guild.iconURL()}`,
                    name : `${guild.name}`
                })
                .addFields(
                    {name : `생성일`, value : `${cretedDate}`, inline : true},
                    {name : `고유 ID`, value : `${guild.id}`, inline : true}
                )
                .setFooter({
                    iconURL : `${this.args.author.avatarURL()}`,
                    text : `당신과 ${joinedDate}부터 함께하고 있어요 <3`
                });
            
            this.args.channel.send({embeds : [serverInformation]});    
        } else {
            this.args.reply("서버가 아니에요!");
        }
    }
}

export { Command };