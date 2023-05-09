import React from 'react';

import InfoHeader from './InfoHeader/InfoHeader';
import InfoItem from './InfoItem/InfoItem';
import Icons from '../Icons/Icons';
import LoadingWindow from './LoadingWindow/LoadingWindow';

import './WeatherInfo.scss';

const WeatherInfo = ({
                         city,
                         weatherData,
                         handleGoToCitySelection,
                         handleRefreshWeather,
                         isRefreshing,
                         formattedTime,
                         formattedDate,
                         dayOfWeek,
                         sunRise,
                         sunSet
                     }) => {

    return (
        <div className="weather-info">
            <InfoHeader
                handleGoToCitySelection={handleGoToCitySelection}
                handleRefreshWeather={handleRefreshWeather}
            />
            <InfoItem
                city={city}
                weatherData={weatherData}
                formattedDate={formattedDate}
                formattedTime={formattedTime}
                dayOfWeek={dayOfWeek}
                sunRise={sunRise}
                sunSet={sunSet}

            />
            {isRefreshing && <LoadingWindow/>}
            <Icons/>
        </div>
    );
};

export default WeatherInfo;
