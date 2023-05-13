import React from 'react';

import { WiStrongWind } from 'weather-icons-react';

import './WindSpeed.scss';

const WindSpeed = ({ weatherData }) => {
    const { windSpeed } = weatherData;

    return (
        <div className="detailed-wind-speed">
            <span className="detailed-wind-speed-icon">
                <WiStrongWind size={50} color="white"/>
            </span>
            <p>Скорость: {windSpeed} м/с</p>
        </div>
    );
}

export default WindSpeed;
