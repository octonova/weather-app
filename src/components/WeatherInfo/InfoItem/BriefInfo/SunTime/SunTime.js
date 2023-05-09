import React from 'react';

import './SunTime.scss'
import {WiHorizon, WiHorizonAlt} from "weather-icons-react";


const SunTime = ({ sunRise, sunSet }) => {

    return (
        <div className="brief-sun">
            <WiHorizonAlt size={40} color="white"/>
            <p className="sun-rise">Восход: {sunRise}</p>
            <WiHorizon size={40} color="white"/>
            <p>Закат: {sunSet}</p>
        </div>
    );
}

export default SunTime;