const env = require('dotenv').config().parsed;

const SlackBot = require("slackbots");
const channel = "general"

const token = env.ACTUAL_BOT_TOKEN;

const bot = new SlackBot({
  token: token,
  name: "hollybot"
});

bot.on("message", function(data) {
  if (data.type == 'message' && data.username !== 'hollybot') {
    if (data.text == 'hello') {
      bot.postMessageToChannel(channel, 'yeah, whatever.');
    }
  }
});
