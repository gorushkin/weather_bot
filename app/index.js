import TelegramBot from 'node-telegram-bot-api';
import getWeather from './weather.js';

const token = process.env.BOT_TOKEN;
console.log('bot started!!!');

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const { text } = msg;
  const chatId = msg.chat.id;
  try {
    const data = await getWeather(text);
    const { name, temp } = data;
    bot.sendMessage(chatId, `Температура в ${name} - ${temp}`);
  } catch(e) {
    bot.sendMessage(chatId, e.message);
  }
});
