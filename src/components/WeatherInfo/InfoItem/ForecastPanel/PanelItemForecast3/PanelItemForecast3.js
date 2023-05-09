import React from 'react';

import WeatherIcon from '../../../../../utilits/getIconByCode';

import './PanelItemForecast3.scss';

const PanelItemForecast3 = ({weatherData}) => {
    const { forecast3HoursTime, forecast3HoursTemp, forecast3HoursIconCode } = weatherData;

    return (
        <div className="forecast-panel-forecast_3">
            <p>{forecast3HoursTime}</p>
            <WeatherIcon code={forecast3HoursIconCode} source="ForecastPanel" />
            <p>{forecast3HoursTemp}°</p>
        </div>
    );
}

export default PanelItemForecast3;