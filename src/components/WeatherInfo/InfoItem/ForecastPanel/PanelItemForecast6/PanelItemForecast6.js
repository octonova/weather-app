import React from 'react';

import WeatherIcon from '../../../../../utilits/getIconByCode';

import './PanelItemForecast6.scss';

const PanelItemForecast6 = ({ weatherData }) => {
    const { forecast6HoursTime, forecast6HoursTemp, forecast6HoursIconCode } = weatherData;

    return (
        <div className="forecast-panel-forecast_6">
            <p>{forecast6HoursTime}</p>
            <WeatherIcon code={forecast6HoursIconCode} source="ForecastPanel" />
            <p>{forecast6HoursTemp}°</p>
        </div>
    );
}

export default PanelItemForecast6;