const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiString = require('chai-string');
chai.use(assertArrays);
chai.use(chaiString);
const expect = chai.expect;

const { Before, Given, When, Then, After } = require('cucumber');
const SlackBot = require('slackbots');

const env = require('dotenv').config().parsed;

const token = env.TEST_BOT_TOKEN;
const botName = env.TEST_BOT_NAME;

let bot;

After( () => {
  bot.ws.close();
});

Given('I am connected to Slack', function () {
  bot = new SlackBot({
      token,
      name: botName
  });
});

When('I say {string}', async function (message) {
  await bot.postMessageToChannel('general', message);
});

Then('Hollybot should reply with {string}', function (expectedMessage, done) {
  bot.on('message', function(data) {
    if (data.type == 'message' && data.username !== botName) {
      expect(data.text).to.equal(expectedMessage);
      done();
    }
  });
});
