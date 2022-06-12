import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Headline from "../components/Headline";

import { useWeather } from "../api";

//MAP
import { Map, Marker } from "pigeon-maps"

import "../styles/Forecast.css"

const Forecast = () => {

    const [searchParams] = useSearchParams();
    const City = searchParams.get("city");

    const { loading, headlines, error } = useWeather(City);


    if (loading) {
        return <p>Loading...</p>;
      }

    return (
        <div className='City'>

            <h1> Forecast for {City} </h1>
            
            <div className='Forecast'>

                {error === null ? (
                    headlines.map((headline) => (
                        <Headline key={headline.time} {...headline} />
                    ))
                ) : (
                    <p>Error: {error}</p>
                )}

            </div>

            <div className='Map'>
                <h1>{City}</h1>
                <Map height={450} defaultCenter={[40, 18]} defaultZoom={1.5}>
                    <Marker width={50} anchor={{City}} />
                </Map>

            </div>

        </div>
    );
};

export default Forecast;