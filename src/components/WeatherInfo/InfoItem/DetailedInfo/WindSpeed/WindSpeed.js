import React from 'react';

import { WiStrongWind } from 'weather-icons-react';

import './WindSpeed.scss';

const WindSpeed = ({ weatherData }) => {
    const { windSpeed } = weatherData;

    return (
        <div className="detailed-wind-speed">
            <span>
                <WiStrongWind size={50} color="white"/>
            </span>
            <p>Скорость: {windSpeed} м/с</p>
        </div>
    );
}

export default WindSpeed;
