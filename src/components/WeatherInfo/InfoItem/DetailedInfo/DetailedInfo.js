import React from 'react';

import Humidity from './Humidity/Humidity';
import Pressure from './Pressure/Pressure';
import WindSpeed from './WindSpeed/WindSpeed';
import Clouds from './Clouds/Clouds';
import UvIndex from './UvIndex/UvIndex';
import WindDeg from './WindDeg/WindDeg';
import Temperature from './Temperature/Temperature';

import './DetailedInfo.scss';

const DetailedInfo = ({ weatherData }) => {

    return (
        <div className="item-detailed">
            {/*<h3><span>Актуальные данные</span><h3/>*/}
            <Humidity weatherData={weatherData}/>
            <Pressure weatherData={weatherData}/>
            <WindSpeed weatherData={weatherData}/>
            <Clouds weatherData={weatherData}/>
            <UvIndex weatherData={weatherData}/>
            <WindDeg weatherData={weatherData}/>
            <Temperature weatherData={weatherData}/>
        </div>
    );
};

export default DetailedInfo;