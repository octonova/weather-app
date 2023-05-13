import React from 'react';

import WindDirectionIcon from '../../../../../utilits/getWindDirectionIcon';
import windDirection from '../../../../../utilits/getWindDirection';

import './WindDeg.scss';

const WindDeg = ({ weatherData }) => {
    const { windDeg } = weatherData;
    const WindDirectionValue = windDirection(windDeg);

    return (
        <div className="detailed-wind-deg">
            <span className="detailed-wind-deg-icon">
                <WindDirectionIcon deg={windDeg} />
            </span>
            <p>Направление: {WindDirectionValue}</p>
        </div>
    );
}

export default WindDeg;