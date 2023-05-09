import React from 'react';

import './ItemHeader.scss';

const ItemHeader = ({ weatherData }) => {

    const { localCityDate, localCityWeekDay } = weatherData;

    return (
        <div className="item-header">
            <p className="item-header-default">Погода на {localCityDate}, <span>{localCityWeekDay}</span></p>
        </div>
    )

}

export default ItemHeader