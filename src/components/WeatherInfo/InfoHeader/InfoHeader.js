import React from 'react';

import Translate from "../../Translate/Translate";

import './InfoHeader.scss';

const InfoHeader = ({ handleGoToCitySelection, handleRefreshWeather }) => {

    return (
        <div className="info-header">
            <button onClick={handleGoToCitySelection} className="info-header-button"><span>Перейти к выбору города</span></button>
            <Translate/>
            <button onClick={handleRefreshWeather} className="info-header-button"><span>Обновить данные погоды</span></button>
        </div>
    )

}

export default InfoHeader;