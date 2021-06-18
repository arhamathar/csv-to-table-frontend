import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "./Navbar.css";

function Navbar() {
	const auth = useContext(AuthContext);

	return (
		<div className='main-header'>
			<Link to='/'>Home</Link>
			<ul className='navlinks'>
				{auth.isLoggedIn && (
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				)}
				{auth.isLoggedIn && (
					<li>
						<Link to='/new-csv'>Upload Csv</Link>
					</li>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Link to='/auth/login'>Login</Link>
					</li>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Link to='/auth/signup'>Signup</Link>
					</li>
				)}
				{auth.isLoggedIn && (
					<li>
						<button
							className='logout-btn'
							type='button'
							onClick={auth.logout}
						>
							Log Out
						</button>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Navbar;
