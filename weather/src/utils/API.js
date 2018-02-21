import axios from "axios";
const BASEURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const TYPE = "&units=imperial&appid=";
const APIKEY = "6b7af06c3e4b7dd26dcfc187311f8ea4";


export default {
    search : function (query) {
        return axios.get(BASEURL + query + TYPE + APIKEY);
    }
};