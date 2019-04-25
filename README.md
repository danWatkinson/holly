# Holly

```bash
git clone https://github.com/danWatkinson/holly.git

cd holly
```

* create a .env file with the following fields:
```bash
BOT_TOKEN=<the bot token that the bot being tested is going to use>
BOT_NAME=<the name of the bot being tested>

TEST_BOT_TOKEN=<the bot token that the testing application is going to use>
TEST_BOT_NAME=<the name of the bot doing the testing>

TEST_CHANNEL=<the name of the channel the tests should take place in>
```

* start app
```bash
npm start
```

* run tests
```bash
npm test
```
