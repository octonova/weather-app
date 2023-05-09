const getCloudsDescription = (clouds) => {
    if (clouds >= 90) {
        return "Сильная";
    } else if (clouds >= 75) {
        return "Значительная";
    } else if (clouds >= 50) {
        return "Умеренная";
    } else if (clouds >= 25) {
        return "Малая";
    } else if (clouds > 0) {
        return "Небольшая";
    } else {
        return "Ясное небо";
    }
};

export default getCloudsDescription;