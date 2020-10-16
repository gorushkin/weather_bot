import axios from 'axios';
import WeatherService from './WeatherService.js';

const app = async (cityName) => {
  const weather = new WeatherService(axios.get);
  try {
    const data = await weather.getData(cityName);
    const { name } = data;
    const { temp } = data.main;
    return { name, temp };
  } catch (e) {
    switch (e.name) {
      case 'Error':
        throw new Error(`Нет информации по городу "${cityName}"`);
      case 'TypeError':
        throw new Error('Неправильный формат');
    };
    throw new Error('Уупс!');
  }
};

export default app;
