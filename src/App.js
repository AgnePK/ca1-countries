import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./assets/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from "./pages/Home.js";
import View from "./pages/View.js";
//components
import Navbar from "./components/Navbar.js";
function App() {
	return (
		<>
			<Router>
				{/* <h1>Hello from app</h1> */}
				<Navbar />
				<Container>
					<Row>
						<Col>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/country/:name" element={<View />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</Router>
		</>
	);
}

export default App;
