import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
const CountryCard = (props) => {
	return (
		<>
			<Col>
				<Link
					to={`/country/${props.name}`}
					style={{
						textDecoration: "none",
						color: "#274C5B",
					}}
				>
					<Card
						style={{
							width: "20rem",
							border: "none",
							boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)",
							color: "#274C5B",
							borderRadius: "30px",
						}}
						className="bg-light"
					>
						<Card.Img
							src={props.flag}
							varient="top"
							style={{ height: "11rem", borderRadius: "30px" }}
						/>
						<Card.Body>
						
							<Card.Title style={{fontSize: "22px"}}><b>{props.name}</b></Card.Title>
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
