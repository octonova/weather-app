import React from 'react';

import WeatherIcon from '../../../../../utilits/getIconByCode';

import './PanelItemCurrent.scss';

const PanelItemCurrent = ({ weatherData }) => {
    const { currentTime, currentTemp, currentIconCode } = weatherData;

    return (
        <div className="forecast-panel-current">
            <p>{currentTime}</p>
            <WeatherIcon code={currentIconCode} source="ForecastPanel"/>
            <p>{currentTemp}°</p>
        </div>
    );
}

export default PanelItemCurrent;