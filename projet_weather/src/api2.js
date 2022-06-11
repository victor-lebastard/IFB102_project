import { useEffect, useState } from "react";

const API_KEY = "de867676b7ca457aa7041433220504";

export function useWeather(query) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeatherByQuery(query)
      .then((weather) => {
        setHeadlines(weather);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [query]);

  return {
    loading,
    headlines,
    error
  };
}

function getWeatherByQuery(q) {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${q}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if ("error" in res) {
        throw new Error(res.error.message);
      }
      return res.weather.current;
    })
    .then((weather) =>
      weather.map((temps) => ({
        time: temps.time,
        text: temps.condition.text,
        temp: temps.temp_c,
        wind: temps.wind_kph,
        icon: temps.condition.icon

      }))
    );
}
