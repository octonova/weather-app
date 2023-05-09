import React from 'react';

import getCloudsDescription from '../../../../../utilits/getCloudsDescription';

import { WiCloud } from 'weather-icons-react';

import './Clouds.scss';

const Clouds = ({ weatherData }) => {
    const { clouds } = weatherData;
    const cloudsDescription = getCloudsDescription(clouds);

    return (
        <div className="detailed-clouds">
            <span className="detailed-clouds-icon">
                <WiCloud size={50} color="white"/>
            </span>
            <span className="detailed-clouds-wrapper">
                <p>Облачность: {clouds}%</p>
                <p>{cloudsDescription}</p>
            </span>
        </div>
    );
}

export default Clouds;