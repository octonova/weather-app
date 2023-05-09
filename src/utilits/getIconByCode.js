import React from 'react';
import {
    WiDaySunny,
    WiNightClear,
    WiCloud,
    WiCloudy,
    WiShowers,
    WiRain,
    WiThunderstorm,
    WiSnow,
} from 'weather-icons-react';

const WeatherIcon = ({ code, source }) => {
    const iconCode = code;

    if (source === 'MainInfo') {
        const mainIcons = {
            '01d': <WiDaySunny size={80} color="white"/>,
            '01n': <WiNightClear size={80} color="white"/>,
            '02d': <WiCloudy size={80} color="white"/>,
            '02n': <WiCloudy size={80} color="white"/>,
            '03d': <WiCloud size={80} color="white"/>,
            '03n': <WiCloud size={80} color="white"/>,
            '04d': <WiCloud size={80} color="white"/>,
            '04n': <WiCloud size={80} color="white"/>,
            '09d': <WiShowers size={80} color="white"/>,
            '09n': <WiShowers size={80} color="white"/>,
            '10d': <WiRain size={80} color="white"/>,
            '10n': <WiRain size={80} color="white"/>,
            '11d': <WiThunderstorm size={80} color="white"/>,
            '11n': <WiThunderstorm size={80} color="white"/>,
            '13d': <WiSnow size={80} color="white"/>,
            '13n': <WiSnow size={80} color="white"/>,
            '50d': <WiRain size={80} color="white"/>,
            '50n': <WiRain size={80} color="white"/>,
        };

        if (mainIcons[iconCode]) {
            return mainIcons[iconCode];
        }

    } else if (source === 'ForecastPanel') {
        const forecastIcons = {
            '01d': <WiDaySunny size={40} color="black" />,
            '01n': <WiNightClear size={40} color="black" />,
            '02d': <WiCloudy size={40} color="black" />,
            '02n': <WiCloudy size={40} color="black" />,
            '03d': <WiCloud size={40} color="black" />,
            '03n': <WiCloud size={40} color="black" />,
            '04d': <WiCloud size={40} color="black" />,
            '04n': <WiCloud size={40} color="black" />,
            '09d': <WiShowers size={40} color="black" />,
            '09n': <WiShowers size={40} color="black" />,
            '10d': <WiRain size={40} color="black" />,
            '10n': <WiRain size={40} color="black" />,
            '11d': <WiThunderstorm size={40} color="black" />,
            '11n': <WiThunderstorm size={40} color="black" />,
            '13d': <WiSnow size={40} color="black" />,
            '13n': <WiSnow size={40} color="black" />,
            '50d': <WiRain size={40} color="black" />,
            '50n': <WiRain size={40} color="black" />,
        };

        if (forecastIcons[iconCode]) {
            return forecastIcons[iconCode];
        }
    }
}

export default WeatherIcon;