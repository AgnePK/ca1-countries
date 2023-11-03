import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Spinner, Image} from "react-bootstrap"
const View = () => {
	let { name } = useParams();

	const [country, setCountry] = useState(null);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then(response => {
                console.log(response.data[0])
                setCountry(response.data[0])

                // console.log(Object.values(response.data[0].currencies))
            })
			.catch((error) => {
				console.log(error);
			});
	}, []);

    if(!country){
        return(
            <Spinner animation="grow"/>
        )
    }
	return(
        <>
            <Row>
                <Col><Image className="shadow" src={country.flags.svg} fluid/></Col>
                <Col>
                    <p>Common name = {country.name.common}</p>
                    <p>Official name = {country.name.official}</p>
                    <p>Currency = {Object.values(country.currencies)[0].name}</p>
                    <p>Official name = {Object.values(country.languages)[0]}</p>
                </Col>
            </Row>
        </>
    ) 
};
export default View;
