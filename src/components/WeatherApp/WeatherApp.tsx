import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getWeatherVideo } from "@utils";
import { getWeather } from "@services/weatherService";
import { WeatherData } from "@interfaces/weather";

import styles from "./WeatherApp.module.scss";
import { Empty, Error, Loading, Video, Input } from "@UI";
import { WeatherCard } from "./components/WeatherCard";

export const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const {
    data: weather,
    error,
    isLoading,
    refetch,
  } = useQuery<WeatherData, Error>({
    queryKey: ["weather", searchCity],
    queryFn: () => getWeather(searchCity),
    enabled: !!searchCity,
    retry: false,
  });

  const handleSearch = () => {
    const trimmed = city.trim();
    if (!trimmed) return;
    setSearchCity(trimmed);
    refetch();
  };

  const videoSrc = getWeatherVideo(weather?.weather, weather?.icon);

  return (
    <div className={styles.weatherContainer}>
      {!isLoading && !error && !weather && <Empty />}

      <Input value={city} onChange={setCity} onSearch={handleSearch} />

      {isLoading && <Loading />}

      {error && <Error message={error.message} />}

      <Video key={videoSrc} videoSrc={videoSrc} />

      {weather && !isLoading && <WeatherCard weather={weather} />}
    </div>
  );
};
