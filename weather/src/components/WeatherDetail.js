import React from "react";

const WeatherDetail = props => <div className="text-center">
   
    <h3>
        City: {props.name}
    </h3>
    <h4>
        Weather: {props.weather.main}
    </h4>
    <h4>
        Temperture (F): {props.main.temp}
    </h4>
    <h4>
        Wind Speed: {props.wind.speed}
    </h4>
</div>;

export default WeatherDetail;
