import React from 'react';

import { useSearchParams } from 'react-router-dom';
import Headline2 from "../components/Headline2";

import { useWeather } from "../api2";

import "../styles/Weather.css"


const Weather = () => {
    const [searchParams] = useSearchParams();

    const City = searchParams.get("city");

    const { loading, headline, error } = useWeather(City);


    if (loading) {
        return <p>Loading...</p>;
      }

    return (
        <div className='City'>

            <h1> Current Weather in  {City} </h1>
            
            <div className='Weather'>

            {error === null ? 
                        <Headline2 key={headline.temp_c} {...headline} />
                 : (
                    <p>Error:   {error}</p>
                )}

            </div>
        </div>
    );
};

export default Weather;