import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Spinner, Image, ListGroup } from "react-bootstrap";
const View = () => {
	let { name } = useParams();

	const [country, setCountry] = useState(null);
	const [city, setCity] = useState();
	const [weather, setWeather] = useState({});
	console.log(city);
	
	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((response) => {
				console.log(response.data[0]);
				setCountry(response.data[0]);
				setCity(response.data[0].capital[0]);

				// console.log(city);
				// console.log(Object.values(response.data[0].currencies))
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	//Weather API

	useEffect(() => {
		axios({
			// url: `https://api.api-ninjas.com/v1/weather?city=${city}`,
			url: "https://api.api-ninjas.com/v1/weather?city=Dublin",
			method: "get",
			headers: {
				"X-Api-Key": "Y5t+50/DAWKI2rny1IS7ig==Oera9lC0J9GVlXrA",
			},
		})
			.then((response) => {
				setWeather(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log(weather);

	if (!country) {
		return <Spinner animation="grow" />;
	}
	return (
		<>
			<Row>
				<Col className="mb-4">
					<h2>{country.name.common}</h2>
				</Col>
				<Row>
					<Col>
						<Image className="shadow rounded-5" src={country.flags.svg} fluid />
					</Col>
					<Col className="fs-5 mt-4">
						<p>
							<b>Capital:</b> {country.capital}
						</p>
						<p>
							<b>Population:</b> {country.population}
						</p>
						<p>
							<b>Official name:</b> {country.name.official}
						</p>
						<p>
							<b>Currency:</b> {Object.values(country.currencies)[0].name}
						</p>
						<p>
							<b>Bordering countries:</b> {Object.values(country.borders)}
						</p>
						<p>
							<b>Official language(s):</b> {Object.values(country.languages)[0]}{" "}
							{Object.values(country.languages)[1]}
						</p>
					</Col>
				</Row>
			</Row>
			<Row className="weatherBox mt-5">
				<Col>
					<div>
						<span className="fs-3 fw-semibold">View Google Maps</span>
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4886343.911670409!2d-13.380392752750925!3d53.27323017676157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1699438370010!5m2!1sen!2sie"
						className="mt-4"
						width="500"
						height="300"
						style={{ border: 0 }}
						allowfullscreen="false"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</Col>
				<Col>
					<div>
						<span className="fs-3 fw-semibold">
							Current weather in {country.capital}
						</span>
					</div>
					<div className="weatherContent mt-4">
						<li>Temperature: {weather.temp} °C</li>
						<li>Max temperature: {weather.max_temp} °C</li>
						<li>Min temperature: {weather.min_temp} °C</li>
						<li>Humidity: {weather.humidity}%</li>
						<li>Wind speed: {weather.wind_speed} km/h</li>
					</div>
				</Col>
			</Row>
		</>
	);
};
export default View;
