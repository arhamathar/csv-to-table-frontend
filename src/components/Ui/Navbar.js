import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div className='main-header'>
			<Link to='/'>Home</Link>
			<ul className='navlinks'>
				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li>
					<Link to='/new-csv'>Upload Csv</Link>
				</li>
				<li>
					<Link to='/auth/login'>Login</Link>
				</li>
				<li>
					<Link to='/auth/signup'>Signup</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
