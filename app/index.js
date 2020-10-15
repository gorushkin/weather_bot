import TelegramBot from 'node-telegram-bot-api';
import getWeather from './weather.js';

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const { text } = msg;
  const chatId = msg.chat.id;
  const data = await getWeather(text);
  const { name, temp } = data;
  bot.sendMessage(chatId, `Weather in ${name} is ${temp}`);
});
