import React from 'react';

import Day from './Day/Day';
import Night from './Night/Night';

import './Temperature.scss';

const Temperature = ({ weatherData }) => {
    return (
        <div className="detailed-temperature">
            <h4><span>Прогноз температуры</span></h4>
            <Day weatherData={weatherData}/>
            <Night weatherData={weatherData}/>
        </div>
    );
}

export default Temperature;