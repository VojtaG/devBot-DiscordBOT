const moment = require("moment");
         require("moment-duration-format");

module.exports = {
    config: {
        name: "uptime",
        usage: "d!uptime",
        aliases: ["ut"],
        category: "general",
        accessableby: "Members",
    },

    run: async (bot, message, args) => {
        if(message.channel.type === "dm") return;
        if(message.author.bot) return;

        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        return message.channel.send(`**Bot's uptime:**\n${duration}`);
    
}
}