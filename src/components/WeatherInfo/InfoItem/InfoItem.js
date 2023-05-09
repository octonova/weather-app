import React from 'react';

import ItemHeader from './ItemHeader/ItemHeader';
import BriefInfo from './BriefInfo/BriefInfo';
import DetailedInfo from './DetailedInfo/DetailedInfo';
import ForecastPanel from './ForecastPanel/ForecastPanel';

import './InfoItem.scss';

const InfoItem = ({
                      weatherData,
                      formattedTime,
                      dayOfWeek,
                      formattedDate,
                      city,
                      sunRise,
                      sunSet
                  }) => {

    return (
        <div className="info-item">
            <ItemHeader
                weatherData={weatherData}
            />
            <BriefInfo
                city={city}
                weatherData={weatherData}
                formattedTime={formattedTime}
                sunRise={sunRise}
                sunSet={sunSet}
            />
            <DetailedInfo weatherData={weatherData} />
            <ForecastPanel
                city={city}
                weatherData={weatherData}
            />
        </div>
    )

}

export default InfoItem