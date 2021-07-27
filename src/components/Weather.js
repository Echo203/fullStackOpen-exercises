import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
	const [weatherInCapital, setWeatherInCapital] = useState(null)
	const [isFetching, setIsFetching] = useState(true)

	const fetchCurrentWeather = () => {
		const API_URL ="http://api.weatherstack.com/current"
		const API_KEY = process.env.REACT_APP_API_KEY
		axios
			.get(`${API_URL}?access_key=${API_KEY}&query=${city}`)
			.then(res => {
				console.log(res.data)
				console.log(`${API_URL}?access_key=${API_KEY}&query=${city}`)
				setWeatherInCapital(res.data)
				setIsFetching(false)
			})
			.catch(err => {console.log('err :>> ', err);})
	}
	useEffect(fetchCurrentWeather, [])

	console.log('weatherInCapital :>> ', weatherInCapital);

	if (isFetching) {
		return (
			<div>Hey, gimmie a sec!</div>
		)
	}
  return(
		<div>
			<p>Temperature: {weatherInCapital.current.temperature}</p>
			<img src={weatherInCapital.current.weather_icons[0]} alt="" />
			<p>Wind: {weatherInCapital.current.wind_speed} direction {weatherInCapital.current.wind_dir}</p>
		</div>
	);
};

export default Weather;
