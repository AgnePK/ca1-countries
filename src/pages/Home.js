import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "../components/CountryCard.js";

const Home = () => {
	const [countriesList, setCountriesList] = useState([]);
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((response) => {
				console.log(response.data);

				setCountriesList(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	let countryCards = countriesList.map((country, i) => {
		return (
			<CountryCard
				key={i}
				flag={country.flags.png}
				name={country.name.common}
				official={country.name.official}
				region={country.region}
			/>
		);
	});

	return (
		<>
			<h1>All countries</h1>
			{/* <Container> */}
				<Row className="g-4" md={4} xs={2}>
					{countryCards}
				</Row>
			{/* </Container> */}
		</>
	);
};
export default Home;
