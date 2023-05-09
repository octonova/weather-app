import React from 'react';

import PanelItemForecast9 from './PanelItemForecast9/PanelItemForecast9';
import PanelItemCurrent from './PanelItemCurrent/PanelItemCurrent';
import PanelItemForecast3 from './PanelItemForecast3/PanelItemForecast3';
import PanelItemForecast6 from './PanelItemForecast6/PanelItemForecast6';
import PanelItemForecast12 from './PanelItemForecast12/PanelItemForecast12';

import './ForecastPanel.scss';

const ForecastPanel = ({ weatherData }) => {

    return (
        <div className="forecast-panel">
            <PanelItemCurrent weatherData={weatherData}/>
            <PanelItemForecast3 weatherData={weatherData}/>
            <PanelItemForecast6 weatherData={weatherData}/>
            <PanelItemForecast9 weatherData={weatherData}/>
            <PanelItemForecast12 weatherData={weatherData}/>
        </div>
    );
};

export default ForecastPanel;