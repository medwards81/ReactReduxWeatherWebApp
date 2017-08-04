import axios from 'axios';

const API_KEY = '4b59adc6b6eec43d91897100fe3ab05b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// api docs can be found here: http://openweathermap.org/forecast5
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, code = 'us') {
	const url = `${ROOT_URL}&q=${city},${code}`;
	const request = axios.get(url); // returns a promise
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
