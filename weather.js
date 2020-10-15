import axios from 'axios';
import WeatherService from './app/WeatherService';


const app = async (cityName) => {
  const weather = new WeatherService(axios.get);
  const data = await weather.getData(cityName);
  const {name} = data;
  const {temp} = data.main;
  return { name , temp};
};

export default app;
