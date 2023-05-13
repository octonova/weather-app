import React from 'react';

import './Night.scss';
import {WiNightClear} from "weather-icons-react";

const Night = ({ weatherData }) => {
    const { nightTemperatureAtMidnight } = weatherData

    return (
        <div className="temperature-night">
            <span className="temperature-night-icon">
                <WiNightClear size={50} color="white"/>
            </span>
            <p>Ночь: {nightTemperatureAtMidnight}°</p>
        </div>
    );
}

export default Night;