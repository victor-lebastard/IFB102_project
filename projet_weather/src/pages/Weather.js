import React from 'react';

import { useSearchParams } from 'react-router-dom';
import Headline from "../components/Headline";

import { useWeather } from "../api2";

import "../styles/Weather.css"


const Weather = () => {
    const [searchParams] = useSearchParams();

    const City = searchParams.get("city");

    const { loading, headlines, error } = useWeather(City);


    if (loading) {
        return <p>Loading...</p>;
      }

    return (
        <div className='City'>

            <h1> Current Weather in  {City} </h1>
            
            <div className='Weather'>

                {error === null ? (
                    headlines.map((headline) => (
                        <Headline key={headline.time} {...headline} />
                    ))
                ) : (
                    <p>Error: {error}</p>
                )}

            </div>
        </div>
    );
};

export default Weather;