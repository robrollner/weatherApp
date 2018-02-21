import React from "react";

const WeatherDetail = props => <div className="text-center">
   
    <h3>
        City: {props.City}
    </h3>
    <h4>
        Weather: {props.Weather}
    </h4>
    <h4>
        Temperture (F): {props.Temperture}
    </h4>
    <h4>
        Wind Speed: {props.WindSpeed}
    </h4>
</div>;

export default WeatherDetail;
