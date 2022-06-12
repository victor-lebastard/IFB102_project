import LikeCounter from "./LikeCounter";

export default function Headline2({ temp_c, temp_f, wind_mph, wind_degree, precip_mm, humidity,gust_mph}) {
  return (
    <div className="Headline">
      <h2>Temp_c: {temp_c} &deg;C, Temp_f: {temp_f} &deg;C </h2>
      <h2>Precipitations: {precip_mm} mm,</h2>
      <p>
        Temp_c: {temp_c} &deg;C, Temp_f: {temp_f} &deg;C 
      </p>
      <p>Wind: {wind_mph} mph, Wind degree: {wind_degree} &deg;C, Gusts: {gust_mph} mph</p>
      <p> Humidity: {humidity}</p>
      <LikeCounter />
    </div>
  );
}
