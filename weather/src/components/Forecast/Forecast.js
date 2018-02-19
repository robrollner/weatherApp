import React from "react";
import "./Forecast.css";

const Forecast = props => 
    <div>
        <h3>This week's forecast:</h3>
        <div>{props.week}</div>
    </div>

export default Forecast;