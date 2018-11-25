const Discord = require('discord.js');
const client = new Discord.Client();


var prefix = ".";
client.login(TOKEN);
client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setActivity("vec un kiwi MiniLu");
});
client.on(`message`, message=> {
    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour')
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Voici mes commandes ^^")
        .setDescription("Merci d'avoir ajouter le bot Pachimari ! Je suis un bot créer par MiniLu#8298")
        .addField(".help", "Affiche les commandes du bot")
        .addField(".creator", "affiche les coordonnées du créateur")
        .setFooter("Menu d'aide - PachimariBot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectuer la commande d'aide")
    }

    if(message.content === prefix + "info")  {
        var info_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Voici les informations sur le bot et le serveur !")
        .addField(" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        ;addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de quatégories et de salons", message.guild.channels.size)
        .setFooter("Info - PachimariBot")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'info !")
    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner quelqu'un")
        
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe")

        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return MessageChannel.channel.send("Je n'ai pas la permission pour kick");
        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
        });
    }

    

    
    if(message.content === prefix + "creator"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Regardez c'est MiniLu aka Nao!!!")
        .setDescription("Merci d'avoir ajouter le bot Pachimari ! C'est donc moi MiniLu#8298 le créateur x3, C'est un bot fun et non SNFW :D")
    
        .setFooter("Coordonnées du créateur - PachimariBot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectuer la commande créateur")
    }
    

        
});

