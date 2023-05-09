import React from 'react';

import FeelsLike from './FeelsLike/FeelsLike';
import WeatherIcon from '../../../../../utilits/getIconByCode';

import './MainInfo.scss'

const MainInfo = ({ weatherData }) => {

    const { mainTemperature, weatherIcon } = weatherData

    return (
        <div className="brief-main">
            <h3 className="brief-main-temperature">{mainTemperature}°</h3>
            <WeatherIcon code={weatherIcon} source="MainInfo" size={80} color="white" />
            <FeelsLike weatherData={weatherData}/>
        </div>
    );
}

export default MainInfo;