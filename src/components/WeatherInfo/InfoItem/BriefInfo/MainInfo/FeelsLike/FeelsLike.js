import React from 'react';

import './FeelsLike.scss'

const FeelsLike = ({ weatherData }) => {

    const { feelsTemperature, weatherDescription } = weatherData

    return (
            <div className="main-feels">
                <p className="main-feels-description">{weatherDescription}</p>
                <p className="main-feels-feels">Ощущается как: {feelsTemperature}°</p>
            </div>
    );
}

export default FeelsLike;