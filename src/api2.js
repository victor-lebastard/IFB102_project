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
      return res.current;
    });
/*    .then((current) => {
      return ({
      temp_c: current.temp_c,
      temp_f: current.temp_f,
      wind_mph: current.wind_mph,
      wind_degree: current.wind_degree,
      precip_mm: current.precip_mm,
      humidity: current.humidity,
      gust_mph: current.gust_mph
      }); 
    });*/
}
