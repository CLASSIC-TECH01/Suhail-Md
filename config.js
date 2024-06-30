const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_52_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFaNFdQWXJobVpQWW9nVlJPc2trUGlVSkwrTnJhL0hyUVdIaU94L2FTbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJQQVAyVVRRVFZLZlhXOHJ0OHYwUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTUzN2VlYWQtM2ZlNi00NzBkLWE1OTQtZWRhMTdlZjczNTQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDExOCxcbiAgICAgIDE5NixcbiAgICAgIDIzMSxcbiAgICAgIDY5LFxuICAgICAgODYsXG4gICAgICA0OCxcbiAgICAgIDEyOSxcbiAgICAgIDYsXG4gICAgICAyMDcsXG4gICAgICAxMTcsXG4gICAgICA3MyxcbiAgICAgIDE1NSxcbiAgICAgIDIzOCxcbiAgICAgIDM3LFxuICAgICAgNzUsXG4gICAgICAxNzksXG4gICAgICAxMjQsXG4gICAgICA5LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMTUsXG4gICAgICAxMDQsXG4gICAgICAxNCxcbiAgICAgIDE0NSxcbiAgICAgIDUzLFxuICAgICAgMTYzLFxuICAgICAgNzEsXG4gICAgICAyMzQsXG4gICAgICAxMDQsXG4gICAgICAxMTYsXG4gICAgICAxMTQsXG4gICAgICA3NCxcbiAgICAgIDExNCxcbiAgICAgIDExMyxcbiAgICAgIDI1MCxcbiAgICAgIDI0MixcbiAgICAgIDcxLFxuICAgICAgMzQsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODZIWkFINEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTM2MzA3ODI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDgxOTU3OTI5Nzk5OToyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcVZ1SWtHRUtmUzZiTUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFMVUtYb0c1U0pJeU9IZFBCNFBwMTZCZUlGNEpldFFWUkI5ZXJoaEdzM3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVlsRWNUTWYwL0h6L1V3TVNRM01PYTBnU0c5ZFRDVjB2aFdYczJheVd1TkdSei9URCs2OXB6bFRmaG5lNU9GZlVjQkxvR2VGdjM4QkhWOUVPYS9iQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK25PMS9hdDRmZkxqTDJDSE00aWlWZVpUM3duNUhsdWlpck1aYjA5Yk9PamdUN1QxZzlZT0xPdnpkeDR1YXc0bmdwV3RsMzZuWDFIOGtkUTEzRFcxakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMzYzMDc4MjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyOTgzNDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
