import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import CountryCard from "../components/CountryCard";
const View = () => {
	let { name } = useParams();

	const [city, setCity] = useState();
	const [country, setCountry] = useState(null);
	const [weather, setWeather] = useState([]);
	console.log(weather);
	

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((response) => {
				// console.log(response.data[0]);
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
			// url: 'https://api.api-ninjas.com/v1/weather?city='+city,
			url: 'https://api.api-ninjas.com/v1/weather?city=Dublin',
			method: 'get',
			headers: {
				'X-Api-Key': 'Y5t+50/DAWKI2rny1IS7ig==Oera9lC0J9GVlXrA'
			}
		})
			.then((response) => {
				setWeather(response.data)
				console.log(response);

			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// let allWeather = weather.map ((w)=>{
	// 	return(w.temp)
	// })
	// console.log(allWeather);

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
					<Col className="fs-5 mt-4 banana">
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
							<b>Official language(s):</b> {Object.values(country.languages)[0]}{" "}
							{Object.values(country.languages)[1]}
						</p>
					</Col>
				</Row>
			</Row>
			<Row><p>{weather}</p></Row>
		</>
	);
};
export default View;
