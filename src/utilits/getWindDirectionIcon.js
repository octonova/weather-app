import React from 'react';
import {
    WiDirectionDownLeft,
    WiDirectionDownRight,
    WiDirectionDown,
    WiDirectionLeft,
    WiDirectionRight,
    WiDirectionUpLeft,
    WiDirectionUpRight,
    WiDirectionUp
} from 'weather-icons-react';

const WindDirectionIcon = ({ deg }) => {
    const getWindDirectionIcon = (deg) => {
        if (deg >= 11.25 && deg < 33.75) {
            return <WiDirectionUpRight size={50} color='white'/>;
        } else if (deg >= 33.75 && deg < 56.25) {
            return <WiDirectionRight size={50} color='white'/>;
        } else if (deg >= 56.25 && deg < 78.75) {
            return <WiDirectionDownRight size={50} color='white'/>;
        } else if (deg >= 78.75 && deg < 101.25) {
            return <WiDirectionDown size={50} color='white'/>;
        } else if (deg >= 101.25 && deg < 123.75) {
            return <WiDirectionDownLeft size={50} color='white'/>;
        } else if (deg >= 123.75 && deg < 146.25) {
            return <WiDirectionLeft size={50} color='white'/>;
        } else if (deg >= 146.25 && deg < 168.75) {
            return <WiDirectionUpLeft size={50} color='white'/>;
        } else if (deg >= 168.75 && deg < 191.25) {
            return <WiDirectionUp size={50} color='white'/>;
        } else if (deg >= 191.25 && deg < 213.75) {
            return <WiDirectionUpRight size={50} color='white'/>;
        } else if (deg >= 213.75 && deg < 236.25) {
            return <WiDirectionRight size={50} color='white'/>;
        } else if (deg >= 236.25 && deg < 258.75) {
            return <WiDirectionDownRight size={50} color='white'/>;
        } else if (deg >= 258.75 && deg < 281.25) {
            return <WiDirectionDown size={50} color='white'/>;
        } else if (deg >= 281.25 && deg < 303.75) {
            return <WiDirectionDownLeft size={50} color='white'/>;
        } else if (deg >= 303.75 && deg < 326.25) {
            return <WiDirectionLeft size={50} color='white'/>;
        } else {
            return <WiDirectionUpLeft size={50} color='white'/>;
        }
    };

    const icon = getWindDirectionIcon(deg);

    return icon;

}

export default WindDirectionIcon;
