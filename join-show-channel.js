const Discord = require('discord.js');
const client = new Discord.Client();
const token ='Token-Here';


client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on("voiceStateUpdate",(oldd,neww)=>{

    var chat =neww.guild.channels.get('Id-Chat');


    if(neww.voiceChannelID == 'Id-Room'){


      chat.overwritePermissions(neww,{
        "SEND_MESSAGES":true,
        "READ_MESSAGES":true,
});
    }else{

        chat.overwritePermissions(neww,{
          "SEND_MESSAGES":false,
          "READ_MESSAGES":false,
  });
    }
});

client.login(token);
