import React from "react";
import "./Input.css";

const Input = props =>
    <div className="from-row">
       <h3>Enter your zipcode:</h3>
       <input class="form-control form-control-lg col-lg-4" type="number" placeholder="80203"></input>
    </div> 
export default Input;