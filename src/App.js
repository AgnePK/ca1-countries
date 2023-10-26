import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//pages
import Home from "./pages/Home.js";

//components
import Navbar from "./components/Navbar.js";
function App() {
	return (
		<>
			<h1>Hello from app</h1>
			<Router>
				<Container>
					<Row>
						<Col>
							<Navbar />

							<Routes>
								<Route path="/" element={<Home />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</Router>
		</>
	);
}

export default App;
