import React from 'react';
import './Weather.css';

const Weather = ({ weather, temp, unit }) => {

    if(weather){
    let iconUrl = weather ? `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png` : '';

    return(
        <div className="wrapper">
            <img src= { iconUrl }  alt="weather-icon" className="icon"/>
            <p className="description">{ weather.weather.description }</p>
            <p className="degrees">{ temp } °{ unit } </p>
        </div>
    );
    } else {
        return <div><i className="fa fa-frown-o" aria-hidden="true"></i></div>;
    }
}

export default Weather;