

import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";

import "../styles/App.css";


export default function App() {
  

  return (
    <div className="App">

      <h1>Chose your city for current Weather</h1> 

      <SearchBar2/>

      <h1>Chose Your City For Forecast</h1>
      
      <SearchBar/>

    </div>
  );
}

/*
export default function App() {
  const { loading, headlines, error } = useWeather();
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Brisbane Weather Forecast Today</h1>
          {headlines.map((headline) => (
            <Headline key={headline.time} {...headline} />
          ))}
        </div>
      )}
    </div>
  );
}
*/
