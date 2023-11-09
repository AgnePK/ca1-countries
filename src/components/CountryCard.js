import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
const CountryCard = (props) => {
	return (
		<>
			<Col>
				<Link to={`/country/${props.name}`} className="cardTitle">
					<Card
						className="bg-light countryCard"
						style={{
							color: "#274C5B",
							borderRadius: "30px",
						}}
					>
						<Card.Img
							src={props.flag}
							varient="top cardImage"
							style={{ height: "11rem", borderRadius: "30px" }}
						/>
						<Card.Body>
							<Card.Title style={{ fontSize: "22px" }}>
								<b>{props.name}</b>
							</Card.Title>
							<Card.Text>
								<p>
									<b>Full Name: </b>
									{props.official}
								</p>
							</Card.Text>
							<Card.Text>
								<p>
									<b>Continent: </b>
									{props.region}
								</p>
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			</Col>
		</>
	);
};
export default CountryCard;
