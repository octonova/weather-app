import React from 'react';

import WeatherIcon from '../../../../../utilits/getIconByCode';

import './PanelItemForecast9.scss';

const PanelItemForecast9 = ({ weatherData }) => {
    const { forecast9HoursTime, forecast9HoursTemp, forecast9HoursIconCode } = weatherData;

    return (
        <div className="forecast-panel-forecast_9">
            <p>{forecast9HoursTime}</p>
            <WeatherIcon code={forecast9HoursIconCode} source="ForecastPanel"/>
            <p>{forecast9HoursTemp}°</p>
        </div>
    );
}

export default PanelItemForecast9;