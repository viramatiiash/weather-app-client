import { WeatherData } from "@/interfaces/weather";
import { HumidityIcon, WindIcon } from "@icons";
import styles from "./WeatherCard.module.scss";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
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
  );
};
