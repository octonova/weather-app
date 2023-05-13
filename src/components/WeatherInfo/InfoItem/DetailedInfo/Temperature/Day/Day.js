import React from 'react';

import './Day.scss';
import {WiDaySunny} from "weather-icons-react";

const Day = ({ weatherData }) => {
    const { dayTemperature } = weatherData

    return (
        <div className="temperature-day">
            <span className="temperature-day-icon">
                <WiDaySunny size={50} color="white"/>
            </span>
            <p>День: {dayTemperature}°</p>
        </div>
    );
}

export default Day;