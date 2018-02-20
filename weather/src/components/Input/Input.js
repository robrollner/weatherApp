import React from "react";
import "./Input.css";

const Input = props =>
    <div className="from-row">
       <h3>Enter your zipcode:</h3>
       <input id="zipBox" className="form-control form-control-lg col-lg-6" type="number" placeholder="90210"></input>
       <input id="zipBtn" className="btn btn-lg btn-outline-dark" type="submit" value="Submit"></input>
    </div> 
export default Input;