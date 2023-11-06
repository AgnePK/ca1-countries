import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import CountryCard from "../components/CountryCard";
const View = () => {
	let { name } = useParams();

	const [country, setCountry] = useState(null);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((response) => {
				console.log(response.data[0]);
				setCountry(response.data[0]);

				// console.log(Object.values(response.data[0].currencies))
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
					<Col className="fs-5 mt-4 banana" >
						<p>
							<b>Capital:</b>   {country.capital}
						</p>
						<p>
							<b>Population:</b>   {country.population}
						</p>
						<p>
							<b>Official name:</b>   {country.name.official}
						</p>
						<p>
							<b>Currency:</b>   {Object.values(country.currencies)[0].name}
						</p>
						<p>
							<b>Official language(s):</b>   {Object.values(country.languages)[0]}{" "}
							{Object.values(country.languages)[1]}
						</p>
					</Col>
				</Row>
			</Row>
            <Row>
            </Row>
		</>
	);
};
export default View;
