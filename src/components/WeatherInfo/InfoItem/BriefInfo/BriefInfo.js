import React from 'react';

import CurrentValue from './CurrentValue/CurrentValue';
import MainInfo from './MainInfo/MainInfo';
import SunTime from './SunTime/SunTime';

import './BriefInfo.scss';

const BriefInfo = ({
                       weatherData,
                       formattedTime,
                       city,
                       sunRise,
                       sunSet
                   }) => {

    return (
        <div className="item-brief">
            <MainInfo weatherData={weatherData}/>
            <CurrentValue
                city={city}
                weatherData={weatherData}
                formattedTime={formattedTime}
            />
            <SunTime
                weatherData={weatherData}
                sunRise={sunRise}
                sunSet={sunSet}
            />
        </div>
    );
}

export default BriefInfo;