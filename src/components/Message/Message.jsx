import React, { useState, useEffect } from 'react';

import './Message.scss';
import axios from 'axios';

/**
 * notification for open or closed store information
 */
const Message = () => {
    const [isHarvestOpen, setIsHarvestOpen] = useState(false);
    const [weatherReport, setWeatherReport] = useState({});

    const position = {lat: 48.5771821, lon: 7.7488522};
    const apiKey = '879e4eae86145d7fae32a2765b8e33a0';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}`;

    useEffect(() => {
        const currentTime = new Date();
        (currentTime.getHours() >= 9 && currentTime.getHours() < 18) && setIsHarvestOpen(true);

        axios.get(url)
            .then((response) => {
                setWeatherReport(response.data.weather[0]);
                console.log(weatherReport);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={isHarvestOpen ? 'message --open' : 'message --close'}>
            <img style={{height: 100}} src={`https://openweathermap.org/img/wn/${weatherReport.icon}@2x.png`} alt={`${weatherReport.description}`} />
            <p className={ isHarvestOpen ? 'message__content --open' : 'message__content --close'}>{isHarvestOpen ? 'La cueillette est actuellement OUVERTE !' : 'La cueillette est actuellement FERMÉ !'} </p>
        </div>
    );
};

export default Message;
