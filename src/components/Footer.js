import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="page-footer blue pt-4">
			<div className="container-fluid text-center">
				<div className="row">
					<div className="col-md-3 mb-md-0 mb-3">
						<h5 className="fs-3 pt-2 text-end">Contact us</h5>
						<ul className="list-unstyled text-end">
							<li>
								<Link className="nav-link fw-semibold">Email</Link>
								<p>email@example.com</p>
							</li>
							<li>
								<Link className="nav-link fw-semibold">Phone</Link>
								<p>01 123 4567</p>
							</li>
							<li>
								<Link className="nav-link fw-semibold">Address</Link>
								<p>Dublin, Ireland</p>
							</li>
							<li>
								<Link className="nav-link fw-semibold"></Link>
							</li>
						</ul>
					</div>
					<div className="col-md-6 mt-md-0 mt-3">
						<Link to={`/`} className="nav-link fw-semibold">
							<span className="logo">Satellite</span>
						</Link>{" "}
						<p>
							This is a countries app using APIs in a React js app.
						</p>
					</div>
					<div className="col-md-3 mb-md-0 mb-3">
						<h5  className="fs-3 pt-2 text-start">Utilities Page</h5>
						<ul className="list-unstyled text-start">
							<li>
								<Link className="nav-link">Style Guild</Link><br/>
							</li>
							<li>
								<Link className="nav-link">404 not found</Link><br/>
							</li>
							<li>
								<Link className="nav-link">Licences</Link><br/>
							</li>
							<li>
								<Link className="nav-link">Changelog</Link><br/>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer-copyright text-center py-3">
				© 2020 Copyright:
				<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
			</div>
		</footer>
	);
};
export default Footer;
