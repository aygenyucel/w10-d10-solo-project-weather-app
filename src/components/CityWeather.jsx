import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CityWeather = () => {
  let params = useParams();
  let cityName = params.cityName;
  let countryCode = params.countryCode;

  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async () => {
    try {
      let response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=6b41d2f6d99bc61d1df7964f2d8e7146
    `);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log("weatherData:", data);
      } else {
        console.log("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return <div>{cityName}</div>;
};

export default CityWeather;
