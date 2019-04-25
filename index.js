const SlackBot = require("slackbots");
const {BOT_TOKEN, BOT_NAME} = require('dotenv').config().parsed;

const bot = new SlackBot({
  token: BOT_TOKEN,
  name: BOT_NAME
});

bot.on("message", function(data) {
  if (data.type == 'message' && data.username !== BOT_NAME) {
    if (data.text == 'hello') {
      bot.postMessage(data.channel, 'yeah, whatever.');
    }
  }
});
