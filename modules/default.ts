import { Message, EmbedBuilder } from 'discord.js';

interface Command {
    [key : string] : any
}

class Command {
    args : Message;

    constructor(args : Message) {
        this.args = args;
    }
    
    bot = () => {
        let botInformation = new EmbedBuilder()
            .setTitle("kumiko - Open Source Discord bot with discord.js")
            .setURL("https://github.com/yourkme/kumiko")
            .setDescription("서버를 관리하는 귀여운 아이입니다.")
            .setFooter({text : "yourkme's First Typescript Project <3"});
        
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