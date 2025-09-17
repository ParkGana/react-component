import { useEffect, useState } from 'react';
import { generateWeather } from '../../utils/generateData';
import ComponentContainer from '../layout/ComponentContainer';

type WeatherType = {
  icon: string;
  temperature: string;
};

const Weather = () => {
  const [weather, setWeather] = useState<WeatherType>();

  useEffect(() => {
    const getWeather = async () => {
      const latitude = 37.555946; // 서울역 위도
      const longitude = 126.972317; // 서울역 경도
      const data = await generateWeather(latitude, longitude);
      if (data) setWeather(data);
    };
    getWeather();
  }, []);

  return (
    <ComponentContainer label="WEATHER">
      {weather && (
        <div className="flex items-center justify-center gap-1">
          <img src={`/icons/${weather.icon}.svg`} width={24} />
          <p className="text-body">{weather.temperature}</p>
        </div>
      )}
    </ComponentContainer>
  );
};

export default Weather;
