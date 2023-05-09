const getWindDirection = (deg) => {
    if (deg >= 11.25 && deg < 33.75) {
        return "ССВ/СВ";
    } else if (deg >= 33.75 && deg < 56.25) {
        return "В/СВ";
    } else if (deg >= 56.25 && deg < 78.75) {
        return "В/ЮВ";
    } else if (deg >= 78.75 && deg < 101.25) {
        return "В/Ю";
    } else if (deg >= 101.25 && deg < 123.75) {
        return "ЮВ/В";
    } else if (deg >= 123.75 && deg < 146.25) {
        return "Ю/ЮВ";
    } else if (deg >= 146.25 && deg < 168.75) {
        return "Ю/ЮЗ";
    } else if (deg >= 168.75 && deg < 191.25) {
        return "Ю/З";
    } else if (deg >= 191.25 && deg < 213.75) {
        return "ЮЗ/З";
    } else if (deg >= 213.75 && deg < 236.25) {
        return "З/ЮЗ";
    } else if (deg >= 236.25 && deg < 258.75) {
        return "З/СЗ";
    } else if (deg >= 258.75 && deg < 281.25) {
        return "З/С";
    } else if (deg >= 281.25 && deg < 303.75) {
        return "СЗ/З";
    } else if (deg >= 303.75 && deg < 326.25) {
        return "С/СЗ";
    } else {
        return "С/СВ";
    }
};

export default getWindDirection;