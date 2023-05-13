import React from 'react';

import { WiBarometer } from 'weather-icons-react';

import './Pressure.scss';

const Pressure = ({ weatherData }) => {
    const { pressure } = weatherData;

    return (
        <div className="detailed-pressure">
            <span className="detailed-pressure-icon">
                <WiBarometer size={50} color="white"/>
            </span>
            <p>Давление: {pressure} мм</p>
        </div>
    );
}

export default Pressure;