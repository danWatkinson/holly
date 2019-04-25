const env = require('dotenv').config().parsed;
const token = env.ACTUAL_BOT_TOKEN;
const botName = env.ACTUAL_BOT_NAME;

const SlackBot = require("slackbots");

const bot = new SlackBot({
  token: token,
  name: botName
});

bot.on("message", function(data) {
  if (data.type == 'message' && data.username !== botName) {
    if (data.text == 'hello') {
      bot.postMessage(data.channel, 'yeah, whatever.');
    }
  }
});
