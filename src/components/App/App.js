import React, { useState, useEffect } from 'react';
import CityInput from '../CityInput/CityInput';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import ErrorWindow from '../ErrorWindow/ErrorWindow';
import { getWeatherData } from '../../utilits/getWeatherData';

import './App.scss';

const App = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [sunRise, setSunRise] = useState('');
    const [sunSet, setSunSet] = useState('');

    const capitalizeFirstLetter = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const handleCitySubmit = async (city) => {
        try {
            const formattedCity  = capitalizeFirstLetter (city);
            const {
                data,
                mainTemperature,
                feelsTemperature,
                weatherDescription,
                weatherIcon,
                sunRise,
                sunSet,
                pressure,
                humidity,
                windSpeed,
                dayTemperature,
                nightTemperature,
                nightTemperatureAtMidnight,
                windDeg,
                valueUv,
                clouds,
                currentTime,
                currentTemp,
                currentIconCode,
                forecast3HoursTime,
                forecast3HoursTemp,
                forecast3HoursIconCode,
                forecast6HoursTime,
                forecast6HoursTemp,
                forecast6HoursIconCode,
                forecast9HoursTime,
                forecast9HoursTemp,
                forecast9HoursIconCode,
                forecast12HoursTime,
                forecast12HoursTemp,
                forecast12HoursIconCode,
                localCityTime,
                localCityDate,
                localCityWeekDay
            } = await getWeatherData(formattedCity);
            setWeatherData({
                data,
                mainTemperature,
                feelsTemperature,
                weatherDescription,
                weatherIcon,
                pressure,
                humidity,
                windSpeed,
                dayTemperature,
                nightTemperature,
                nightTemperatureAtMidnight,
                windDeg,
                valueUv,
                clouds,
                currentTime,
                currentTemp,
                currentIconCode,
                forecast3HoursTime,
                forecast3HoursTemp,
                forecast3HoursIconCode,
                forecast6HoursTime,
                forecast6HoursTemp,
                forecast6HoursIconCode,
                forecast9HoursTime,
                forecast9HoursTemp,
                forecast9HoursIconCode,
                forecast12HoursTime,
                forecast12HoursTemp,
                forecast12HoursIconCode,
                localCityTime,
                localCityDate,
                localCityWeekDay
            });
            setError(null);
            setCity(formattedCity);
            setSunRise(sunRise);
            setSunSet(sunSet);
        } catch (error) {
            setWeatherData(null);
            setError('Ошибка при получении данных о погоде');
        }
    };

    const handleRetry = () => {
        setError(null);
    };

    const handleGoToCitySelection = () => {
        setWeatherData(null);
        setError(null);
    };

    const handleRefreshWeather = async () => {
        if (isRefreshing) {
            alert('Действия временно ограничены из-за подозрительной активности');
            return;
        }

        setIsRefreshing(true);

        try {
            const formattedCity  = capitalizeFirstLetter (city);
            const {
                data,
                mainTemperature,
                feelsTemperature,
                weatherDescription,
                weatherIcon,
                sunRise,
                sunSet,
                pressure,
                humidity,
                windSpeed,
                dayTemperature,
                nightTemperature,
                nightTemperatureAtMidnight,
                windDeg,
                valueUv,
                clouds,
                currentTime,
                currentTemp,
                currentIconCode,
                forecast3HoursTime,
                forecast3HoursTemp,
                forecast3HoursIconCode,
                forecast6HoursTime,
                forecast6HoursTemp,
                forecast6HoursIconCode,
                forecast9HoursTime,
                forecast9HoursTemp,
                forecast9HoursIconCode,
                forecast12HoursTime,
                forecast12HoursTemp,
                forecast12HoursIconCode,
                localCityTime,
                localCityDate,
                localCityWeekDay
            } = await getWeatherData(formattedCity);
            setWeatherData({
                data,
                mainTemperature,
                feelsTemperature,
                weatherDescription,
                weatherIcon,
                pressure,
                humidity,
                windSpeed,
                dayTemperature,
                nightTemperature,
                nightTemperatureAtMidnight,
                windDeg,
                valueUv,
                clouds,
                currentTime,
                currentTemp,
                currentIconCode,
                forecast3HoursTime,
                forecast3HoursTemp,
                forecast3HoursIconCode,
                forecast6HoursTime,
                forecast6HoursTemp,
                forecast6HoursIconCode,
                forecast9HoursTime,
                forecast9HoursTemp,
                forecast9HoursIconCode,
                forecast12HoursTime,
                forecast12HoursTemp,
                forecast12HoursIconCode,
                localCityTime,
                localCityDate,
                localCityWeekDay
            });
            setSunRise(sunRise);
            setSunSet(sunSet);
            setError(null);
        } catch (error) {
            setWeatherData(null);
            setError('Ошибка при получении данных о погоде');
        }

        setIsRefreshing(false);
    };

    //Время

    const formatDate = (date) => {
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    };

    const formatTime = (date) => {
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
    };

    const formatDayOfWeek = (date) => {
        const options = { weekday: 'long' };
        const dayOfWeek = date.toLocaleDateString('ru-RU', options);
        const upperCaseStart = dayOfWeek.charAt(0).toUpperCase();
        const formattedDayOfWeek = upperCaseStart + dayOfWeek.substring(1);
        return formattedDayOfWeek;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const formattedDayOfWeek = formatDayOfWeek(currentDate);
        setDayOfWeek(formattedDayOfWeek);
    }, [currentDate]);

    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);

    return (
        <div className="App">
            {error ? (
                <ErrorWindow
                    error={error}
                    formattedDate={formattedDate}
                    formattedTime={formattedTime}
                    dayOfWeek={dayOfWeek}
                    onRetry={handleRetry}
                />
            ) : (
                <>
                    {!weatherData ? (
                        <CityInput
                            formattedDate={formattedDate}
                            formattedTime={formattedTime}
                            dayOfWeek={dayOfWeek}
                            onSubmit={handleCitySubmit}
                        />
                    ) : (
                        <WeatherInfo
                            city={city}
                            weatherData={weatherData}
                            formattedDate={formattedDate}
                            formattedTime={formattedTime}
                            dayOfWeek={dayOfWeek}
                            isRefreshing={isRefreshing}
                            sunRise={sunRise}
                            sunSet={sunSet}
                            handleGoToCitySelection={handleGoToCitySelection}
                            handleRefreshWeather={handleRefreshWeather}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default App;