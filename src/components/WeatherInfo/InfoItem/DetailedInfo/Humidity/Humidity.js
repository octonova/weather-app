import React from 'react';

import { WiRaindrop } from 'weather-icons-react';

import './Humidity.scss';

const Humidity = ({ weatherData }) => {
    const { humidity } = weatherData

    return (
        <div className="detailed-humidity">
            <span>
                <WiRaindrop size={50} color="white"/>
            </span>
            <p>Влажность: {humidity}%</p>
        </div>
    );
}

export default Humidity;