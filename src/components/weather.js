import React from "react";

const Weather = props => (
    <div>
        {props.city &&
        <div className="infoWeath">
            <p>Location: {props.city},{props.country}</p>
            <p>Temperature: {props.temp}°C</p>
            <p>Pressure: {props.pressure}  Pa</p>
            <p>Sunset: {props.sunset}</p>
            
        </div>
        
        }
        <p className="error">{props.error}</p>
        
        </div>
    )


export default Weather;