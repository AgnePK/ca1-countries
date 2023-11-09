import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "../components/CountryCard.js";

const Home = (props) => {
	const [countriesList, setCountriesList] = useState([]);
	const [filteredList, setfilteredList] = useState([]);

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

	useEffect(() => {
		if (props.searchTerm <= 1) {
			setfilteredList(countriesList);
		} else {
			let filter = countriesList.filter((country) => {
				return country.name.common
					.toLowerCase()
					.includes(props.searchTerm.toLowerCase());
			});
			setfilteredList(filter);
		}
	}, [countriesList, props.searchTerm]);

	useEffect(() => {
		if (props.filterRegion <= 1) {
			setfilteredList(countriesList);
		} else {
			let filter = countriesList.filter((country) => {
				return country.region === props.filterRegion;
			});
			setfilteredList(filter);
		}
	}, [countriesList, props.filterRegion]);

	let countryCards = filteredList.map((country, i) => {
		return (
			<CountryCard
				key={i}
				flag={country.flags.png}
				name={country.name.common}
				capital={country.capital}
				borders={country.borders}
				pop={country.population}
				official={country.name.official}
				region={country.region}
			/>
		);
	});
	return (
		<>
			<h1 className="mb-3">
				<b>{props.filterRegion}</b>
			</h1>
			<Row className="g-4" md={4} xs={2}>
				{countryCards}
			</Row>
		</>
	);
};
export default Home;
