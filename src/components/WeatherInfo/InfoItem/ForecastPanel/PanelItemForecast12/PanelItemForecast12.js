import React from 'react';

import WeatherIcon from '../../../../../utilits/getIconByCode';

import './PanelItemForecast12.scss';

const PanelItemForecast12 = ({ weatherData }) => {
    const { forecast12HoursTime, forecast12HoursTemp, forecast12HoursIconCode } = weatherData;

    return (
        <div className="forecast-panel-forecast_12">
            <p>{forecast12HoursTime}</p>
            <WeatherIcon code={forecast12HoursIconCode} source="ForecastPanel"/>
            <p>{forecast12HoursTemp}°</p>
        </div>
    );
}

export default PanelItemForecast12;