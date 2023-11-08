import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import Home from "./pages/Home.js";
import View from "./pages/View.js";
//components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterRegion, setFilterRegion] = useState("");

	const onHandleChange = (e) => {
		setSearchTerm(e.target.value);
	};
	const onHandleSelect = (selected) => {
		setFilterRegion(selected);
	};

	return (
		<>
			<Router>
				<Navbar
					onHandleSelect={onHandleSelect}
					onHandleChange={onHandleChange}
					searchTerm={searchTerm}
				/>
				<Container>
					<Row>
						<Col>
							<Routes>
								<Route
									path="/"
									element={
										<Home searchTerm={searchTerm} filterRegion={filterRegion} />
									}
								/>
								<Route path="/country/:name" element={<View />} />
							</Routes>
						</Col>
					</Row>
				</Container>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
