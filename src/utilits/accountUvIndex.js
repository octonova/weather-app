const accountUvIndex = ( uvIndex ) => {
    if (uvIndex <= 2) {
        return 'Низкий';
    } else if (uvIndex <= 5) {
        return 'Средний';
    } else if (uvIndex <= 7) {
        return 'Высокий';
    } else if (uvIndex <= 10) {
        return 'Очень высокий';
    } else {
        return 'Экстремальный';
    }
};

export default accountUvIndex;
