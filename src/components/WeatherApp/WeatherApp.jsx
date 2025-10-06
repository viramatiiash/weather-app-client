import axios from "axios";
import { useCallback, useState } from "react";
import { getWeatherVideo } from "@utils";

import styles from "./WeatherApp.module.scss";
import { HumidityIcon, WindIcon } from "@icons";
import { Video } from "./Video/Video";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = useCallback(async () => {
    if (!city.trim()) return;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/weather?city=${city}`
      );
      setWeather(res.data);
      setError("");
    } catch {
      setError("City not found");
      setWeather(null);
    }
  }, [city]);

  const videoSrc = getWeatherVideo(weather?.weather, weather?.icon);
  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.inputContainer}>
        <div className={styles.blur}></div>

        <input
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <Video key={videoSrc} videoSrc={videoSrc} />

      {weather && (
        <div className={styles.card}>
          <div className={styles.blur}></div>

          <h2 className={styles.cityName}>{weather.name}</h2>

          <div className={styles.temperatureContainer}>
            <p className={styles.temperature}>{weather.temp}°</p>

            <img
              className={styles.weatherIcon}
              src={weatherIcon}
              alt="Weather icon"
            />
          </div>

          <p className={styles.description}>{weather.weather}</p>

          <div className={styles.divider}></div>

          <div className={styles.additionalInfosContainer}>
            <div className={styles.additionalInfoContainer}>
              <HumidityIcon className={styles.additionalInfoIcon} />
              <p className={styles.additionalInfo}>
                <span>Humidity:</span> {weather.humidity}%
              </p>
            </div>

            <div className={styles.additionalInfoContainer}>
              <WindIcon className={styles.additionalInfoIcon} />
              <p className={styles.additionalInfo}>
                <span>Wind:</span> {weather.wind} m/s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
