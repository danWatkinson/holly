const { Before, Given, When, Then, After } = require('cucumber');
const expect = require('./expect');

const SlackBot = require('slackbots');
const {TEST_BOT_TOKEN, TEST_BOT_NAME, TEST_CHANNEL, BOT_NAME} = require('dotenv').config().parsed;

let bot;

After( () => {
  bot.ws.close();
});

Given('I am connected to Slack', function () {
  bot = new SlackBot({
      token: TEST_BOT_TOKEN,
      name: TEST_BOT_NAME
  });
});

When('I say {string}', async function (message) {
  await bot.postMessageToChannel(TEST_CHANNEL, message);
});

Then('Hollybot should reply with {string}', function (expectedMessage, done) {
  bot.on('message', function(data) {
    if (data.type == 'message' && data.username == BOT_NAME) {
      expect(data.text).to.equal(expectedMessage);
      done();
    }
  });
});
