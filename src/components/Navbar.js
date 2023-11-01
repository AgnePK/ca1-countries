import { Link } from "react-router-dom";
import { Navbar as Navi, Button, Nav } from "react-bootstrap";
const Navbar = () => {
	return (
		<>
			<Navi className="navigation">
				<Nav>
					<div>
						<span className="logo">Satellite</span>
					</div>
					<div>
						<Link to={`/`}>
							<Button>Home</Button>
						</Link>
						<Link to={`/`}>Region</Link>
						<Link to={`/`}>continents</Link>
						<Link to={`/`}>About us</Link>
						<Link to={`/`}>Contact us</Link>
					</div>
					<div className="search">
						<input
							type="text"
							// value={term}
							// onChange={handleChange}
							// onKeyUp={handleKeyUp}
						/>
					</div>
				</Nav>
			</Navi>
		</>
	);
};
export default Navbar;
