import axios from "axios";
const BASEURLW = "api.openweathermap.org/data/2.5/forecast?zip=";
// const TYPEW = "&units=imperial&appid=";
const APIKEYW = "48ed5ad73c112d0faec5ccaa4dd61130";

export default {
    search : function (query) {
        return axios.get(BASEURLW + query +  APIKEYW);
    }
};

// TYPEW +