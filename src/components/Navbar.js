import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	Navbar as Navi,
	Container,
	Form,
	Button,
	Nav,
	NavDropdown,
} from "react-bootstrap";
const Navbar = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	let navigate = useNavigate();

	const handleInputChange = (e) => {
		navigate("/");
		props.onHandleChange(e);
	};
	const handleSelectChange = (selected) => {
		navigate("/");
		props.onHandleSelect(selected);
	};
	return (
		<>
			<Navi expand="lg" className="navigation bg-light">
				<Container fluid>
					<Navi.Brand href="#">
						<Link to={`/`} className="nav-link">
							<span className="logo">Satellite</span>
						</Link>
					</Navi.Brand>
					<Navi.Toggle aria-controls="navbarScroll" />
					<Navi.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<NavDropdown
								title="Continents"
								onSelect={handleSelectChange}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item><Link to={`/`} className="nav-link">All</Link></NavDropdown.Item>
								<NavDropdown.Item eventKey="Europe">Europe</NavDropdown.Item>
								<NavDropdown.Item eventKey="Asia">Asia</NavDropdown.Item>
								<NavDropdown.Item eventKey="Africa">Africa</NavDropdown.Item>
								<NavDropdown.Item eventKey="Oceania">Oceania</NavDropdown.Item>
								<NavDropdown.Item eventKey="Americas">Americas</NavDropdown.Item>
								<NavDropdown.Item eventKey="Antarctica">Antarctica</NavDropdown.Item>
							</NavDropdown>
							<Link to={`/`} className="nav-link">
								Contact us
							</Link>
							<Link to={`/`} className="nav-link">
								About us
							</Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
								onChange={handleInputChange}
								value={props.searchTerm}
							/>
						</Form>
					</Navi.Collapse>
				</Container>
			</Navi>
		</>
	);
};
export default Navbar;
