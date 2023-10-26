import { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
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
		return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}  />;
	});

	return (
		<>
			<Row className="" md={4} xs={2}>
				{countryCards}
			</Row>
		</>
	);
};
export default Home;
