import React from 'react';
import './MoreWeather.css';

const MoreWeather = ({ weather, temp, unit }) => {

    if(weather){
    let iconUrl = weather ? `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png` : '';
    let time = weather.datetime.slice(-2);

    return(
        <div className="wrapper weather-list">
            <p className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> { time }:00</p>
            <div className="icon"><img src= { iconUrl }  alt="weather-icon"/></div>
            <p className="description">{ weather.weather.description }</p>
            <p className="degrees"> { temp } ° { unit }</p>
        </div>
    );
    } else {
        return <div><i className="fa fa-frown-o" aria-hidden="true"></i></div>;
    }
}

export default MoreWeather;