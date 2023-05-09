import React from 'react';

import { WiSolarEclipse } from 'weather-icons-react';
import accountUvIndex from '../../../../../utilits/accountUvIndex';

import './UvIndex.scss';

const UvIndex = ({ weatherData }) => {
    const { valueUv } = weatherData;
    const descriptionUvIndex = accountUvIndex(valueUv)

    return (
        <div className="detailed-uv">
            <span className="detailed-uv-icon">
                <WiSolarEclipse size={50} color="white"/>
            </span>
            <span className="detailed-uv-wrapper">
                <p>УФ-Индекс: {valueUv}</p>
                <p>{descriptionUvIndex}</p>
            </span>
        </div>
    );
}

export default UvIndex;