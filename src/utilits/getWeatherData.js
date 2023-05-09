import { BASE_URL, WEATHER_PATH, API_KEY, FORECAST_PATH } from "./constants";

export const getWeatherData = async (city) => {
    try {

        const response = await fetch(`${BASE_URL}${WEATHER_PATH}?q=${city}&units=metric&lang=ru&appid=${API_KEY}`);
        const data = await response.json();
        if (response.ok) {

            const dataTimeZone = data.timezone;
            const formattedTimeZoneName = zoneNames[dataTimeZone] || '';
            const {currentCityTime, currentDateCity, currentWeekDayCity} = getLocalCityTime(formattedTimeZoneName);

            const localCityTime = currentCityTime;
            const localCityDate = currentDateCity;
            const localCityWeekDay = currentWeekDayCity;

            const mainTemperature = Math.round(data.main.temp);
            const formattedMainTemperature = formatTemperature(mainTemperature); //Основная температура
            const feelsTemperature = Math.round(data.main.feels_like);
            const formattedFeelsTemperature = formatTemperature(feelsTemperature); //Ощущаемая температура
            const weatherDescription = formatWeatherDescription(data.weather[0].description); //Описание погоды
            const weatherIcon = data.weather[0].icon; //Код иконки

            const sunRise = formatSunTime(data.sys.sunrise, formattedTimeZoneName); //Восход
            const sunSet = formatSunTime(data.sys.sunset, formattedTimeZoneName); //Закат

            const pressure = Math.round(((data.main.pressure * 100000) / 133322)); // Давление
            const humidity = data.main.humidity; // Влажность
            const windSpeed = Math.round(data.wind.speed); // Скорость ветра
            const windDeg = data.wind.deg; // Направление ветра

            const clouds = data.clouds.all; // Облачность

            const latCity = data.coord.lat;
            const lonCity = data.coord.lon;

            const responseUv = await fetch(`${BASE_URL}/uvi?lat=${latCity}&lon=${lonCity}&appid=${API_KEY}`);
            const dataUv = await responseUv.json();
            const valueUv = Math.round(dataUv.value);

            // Получение прогноза на текущий день
            const forecastData = await fetchForecastData(data.name);
            const dayTemperature = getDayTemperature(forecastData);

            // Получение прогноза на ночь
            const nightForecastData = await fetchNightForecastData(data.name);
            const nightTemperature = getNightTemperature(nightForecastData);
            const nightTemperatureAtMidnight = getNightTemperature(forecastData, 0);

            // Получение данных (сейчас, через 3, 6, 9, 12)
            const currentTime = formatSunTime(forecastData.list[0].dt, formattedTimeZoneName);
            const currentTemp = formatTemperature(Math.round(forecastData.list[0].main.temp));
            const currentIconCode = forecastData.list[0].weather[0].icon;

            const forecast3HoursTime = formatSunTime(forecastData.list[1].dt, formattedTimeZoneName);
            const forecast3HoursTemp = formatTemperature(Math.round(forecastData.list[1].main.temp))
            const forecast3HoursIconCode = forecastData.list[1].weather[0].icon;

            const forecast6HoursTime = formatSunTime(forecastData.list[2].dt, formattedTimeZoneName);
            const forecast6HoursTemp = formatTemperature(Math.round(forecastData.list[2].main.temp))
            const forecast6HoursIconCode = forecastData.list[2].weather[0].icon;

            const forecast9HoursTime = formatSunTime(forecastData.list[3].dt, formattedTimeZoneName);
            const forecast9HoursTemp = formatTemperature(Math.round(forecastData.list[3].main.temp))
            const forecast9HoursIconCode = forecastData.list[3].weather[0].icon;

            const forecast12HoursTime = formatSunTime(forecastData.list[4].dt, formattedTimeZoneName);
            const forecast12HoursTemp = formatTemperature(Math.round(forecastData.list[4].main.temp))
            const forecast12HoursIconCode = forecastData.list[4].weather[0].icon;

            return {
                data,
                mainTemperature: formattedMainTemperature,
                feelsTemperature: formattedFeelsTemperature,
                weatherDescription: weatherDescription,
                weatherIcon: weatherIcon,
                sunRise: sunRise,
                sunSet: sunSet,
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
            };

        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error('Ошибка при получении данных о погоде');
    }
};


const formatTemperature = (temperature) => {
    const numericTemperature = parseFloat(temperature);
    return numericTemperature > 0 ? `+${numericTemperature}` : `${numericTemperature}`;
};

const formatWeatherDescription = (description) => {
    const formattedDescription = description.charAt(0).toUpperCase() + description.substring(1);
    return formattedDescription;
};

// Определение часового пояса (в формате ('Europe/Moscow'))

const zoneNames = {
    '-43200': 'Pacific/Midway',
    '-39600': 'Pacific/Honolulu',
    '-36000': 'America/Anchorage',
    '-32400': 'America/Los_Angeles',
    '-28800': 'America/Denver',
    '-25200': 'America/Chicago',
    '-21600': 'America/New_York',
    '-18000': 'America/Halifax',
    '-14400': 'America/Puerto_Rico',
    '-10800': 'America/Argentina/Buenos_Aires',
    '-7200': 'Atlantic/South_Georgia',
    '-3600': 'Atlantic/Cape_Verde',
    '0': 'Europe/London',
    '3600': 'Europe/Paris',
    '7200': 'Europe/Athens',
    '10800': 'Europe/Moscow',
    '14400': 'Asia/Dubai',
    '18000': 'Asia/Karachi',
    '19800': 'Asia/Calcutta',
    '21600': 'Asia/Dhaka',
    '25200': 'Asia/Bangkok',
    '28800': 'Asia/Shanghai',
    '32400': 'Asia/Tokyo',
    '34200': 'Australia/Darwin',
    '36000': 'Australia/Brisbane',
    '39600': 'Australia/Sydney',
    '43200': 'Pacific/Guam'
};

const formatSunTime = (sunTime, timeZone) => {
    const date = new Date(sunTime * 1000); // Умножаем на 1000, чтобы преобразовать в миллисекунды
    const formattedSunTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone });
    return formattedSunTime;
};

const getLocalCityTime = (timeZone) => {
    const date = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone
    };
    const currentCityTime = date.toLocaleTimeString('en-US', options);
    const optionsDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZone
    };
    const currentDateCity = date.toLocaleDateString('ru-RU', optionsDate);
    const optionsWeekDay = {
        weekday: 'long',
        timeZone
    }
    const currentWeekDay = date.toLocaleDateString('ru-RU', optionsWeekDay);
    const currentWeekDayCity = currentWeekDay[0].toUpperCase() + currentWeekDay.slice(1);
    return {currentCityTime, currentDateCity, currentWeekDayCity};
};


const fetchForecastData = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}${FORECAST_PATH}?q=${city}&units=metric&appid=${API_KEY}&lang=ru`);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error('Ошибка при получении прогноза погоды');
    }
};

const fetchNightForecastData = async (city) => {
    try {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const nightStartHour = 17; // Начало ночи
        const nightEndHour = 6; // Конец ночи
        const forecastHour = currentHour >= nightStartHour || currentHour < nightEndHour ? nightStartHour : currentHour;
        const forecastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), forecastHour);

        const response = await fetch(`${BASE_URL}${FORECAST_PATH}?q=${city}&units=metric&appid=${API_KEY}&dt=${Math.floor(forecastDate.getTime() / 1000)}&lang=ru`);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error('Ошибка при получении прогноза погоды');
    }
};

const getDayTemperature = (forecastData) => {
    if (forecastData && forecastData.list) {
        const currentHour = new Date().getHours();
        const dayTemperature = [];

        for (let i = currentHour; i < currentHour + 8; i++) {
            const hour = i % 24;
            const item = forecastData.list.find((data) => {
                const dataHour = new Date(data.dt * 1000).getHours();
                return dataHour === hour;
            });

            if (item) {
                dayTemperature.push(item.main.temp);
            }
        }
        const averageDayTemperature = calculateAverageTemperature(dayTemperature);
        return formatTemperature(Math.round(averageDayTemperature));
    }

    return null;
};

const getNightTemperature = (forecastData, targetTime) => {
    if (forecastData && forecastData.list) {
        const currentHour = new Date().getHours();
        const nightStartHour = 17; // Начало ночи
        const nightEndHour = 6; // Конец ночи
        const nightTemperature = [];

        const targetData = forecastData.list.find((data) => {
            const dataTime = new Date(data.dt_txt).getHours();
            return dataTime === targetTime;
        });

        if (targetData) {
            nightTemperature.push(targetData.main.temp);
        }

        for (let i = currentHour; i < currentHour + 8; i++) {
            const hour = i % 24;
            if (hour >= nightStartHour || hour < nightEndHour) {
                const item = forecastData.list.find((data) => {
                    const dataHour = new Date(data.dt * 1000).getHours();
                    return dataHour === hour;
                });

                if (item) {
                    nightTemperature.push(item.main.temp);
                }
            }
        }

        const averageNightTemperature = calculateAverageTemperature(nightTemperature);
        return formatTemperature(Math.round(averageNightTemperature));
    }

    return null;
};

const calculateAverageTemperature = (temperatures) => {
    const sum = temperatures.reduce((total, temperature) => total + temperature, 0);
    return sum / temperatures.length;
};

