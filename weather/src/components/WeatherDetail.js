import React from "react";

const WeatherDetail = props => <div className="text-center">
   
    <h3>
        City: {props.name}
    </h3>
    <h4>
        Weather: 
    </h4>
    <h4>
        Temperture (F): {props.main}
    </h4>
    <h4>
        Wind Speed: {props.wind}
    </h4>
</div>;

export default WeatherDetail;
