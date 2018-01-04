import axios from 'axios';

//get weather - not taking in any args
export const loadWeather = () => {
    return (dispatch) => {
        return axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/091b10e504d40b509cc0809dfdba898f/${lat},${long}`).then((response)=>{
            dispatch(changeWeather(res.data.minutely.summary))
        })
    }
}

export const changeWeather = (weather) => {
    return {
        type:"CHANGE_WEATHER",
        weather: weather
    }
}