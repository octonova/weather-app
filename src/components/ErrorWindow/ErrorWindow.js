import React from 'react';

import Translate from '../Translate/Translate';
import Icons from '../Icons/Icons';

import './ErrorWindow.scss'

const ErrorWindow = ({ onRetry, formattedDate, formattedTime, dayOfWeek }) => {


    return (
        <div className="error-window">
            <Translate/>
            <h2 className="error-window-header">Извините, данный город не поддерживается ;(</h2>
            <button
                className="error-window-button"
                onClick={onRetry}
            >Выбрать другой город</button>
            <p className="city-input-default">Сегодня, {dayOfWeek} <span>{formattedDate}</span> {formattedTime}</p>
            <Icons/>
        </div>
    );
};

export default ErrorWindow;
