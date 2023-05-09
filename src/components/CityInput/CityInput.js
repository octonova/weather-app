import React, { useState } from 'react';

import Icons from "../Icons/Icons";
import Translate from "../Translate/Translate";

import './CityInput.scss'

const CityInput = ({ onSubmit, dayOfWeek, formattedDate, formattedTime }) => {
    const [city, setCity] = useState('');

    const handleCitySubmit = (event) => {
        event.preventDefault();
        onSubmit(city);
        setCity('');
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="city-input">
            <Translate/>
            <form className="city-input-form" onSubmit={handleCitySubmit}>
                <h2 className="city-input-header">Выберите город</h2>
                <input
                    className="city-input-input"
                    type="text"
                    placeholder="Например, Москва"
                    value={city}
                    onChange={handleCityChange}
                />
                <button className="city-input-button" type="submit" disabled={!city}>
                    Отправить данные
                </button>
            </form>
            <p className="city-input-default">Сегодня, {dayOfWeek} <span>{formattedDate}</span> {formattedTime}</p>
            <Icons/>
        </div>
    );
};

export default CityInput;


// import React, { useState } from 'react';
//
// import Icons from "../Icons/Icons";
// import Translate from "../Translate/Translate";
//
// import './CityInput.scss'
//
// const CityInput = ({ onSubmit, dayOfWeek, formattedDate, formattedTime }) => {
//     const [city, setCity] = useState('');
//
//     const handleCitySubmit = (event) => {
//         event.preventDefault();
//         onSubmit(city);
//         setCity('');
//     };
//
//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     };
//
//     return (
//         <div className="city-input active">
//             <Translate/>
//             <form className="city-input-form" onSubmit={handleCitySubmit}>
//                 <h2 className="city-input-header">Выберите город</h2>
//                 <input
//                     className="city-input-input"
//                     type="text"
//                     placeholder="Например, Москва"
//                     value={city}
//                     onChange={handleCityChange}
//                 />
//                 <button className="city-input-button" type="submit" disabled={!city}>
//                     Отправить данные
//                 </button>
//             </form>
//             <p className="city-input-default">Сегодня, {dayOfWeek} <span>{formattedDate}</span> {formattedTime}</p>
//             <Icons/>
//         </div>
//     );
// };
//
// export default CityInput;
