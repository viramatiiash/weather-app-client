import { WeatherData } from '@interfaces/weather';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function getWeather(city: string): Promise<WeatherData> {
  const trimmed = city.trim().toLowerCase();
  if (!trimmed) throw new Error("City name is empty");

  const res = await axios.get(`${API_URL}/weather?city=${trimmed}`);
  return res.data;
}
