import React from 'react';

import './CurrentValue.scss'

const CurrentValue = ({ weatherData, city }) => {

    const { localCityTime } = weatherData;

    return (
        <div className="brief-current">
            <p className="brief-current-time">Локальное время: <span>{localCityTime}</span></p>
            <p className="brief-current-city">Выбранный город: <span>{city}</span></p>
        </div>
    );
}

export default CurrentValue;