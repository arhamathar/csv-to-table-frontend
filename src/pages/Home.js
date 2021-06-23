import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

function Home() {
	const auth = useContext(AuthContext);

	return (
		<div className='home'>
			<h1>Welcome to CSV Converter</h1>
			{auth.isLoggedIn && (
				<p>
					To convret new CSV file
					<Link to='/new-csv'>Click Here</Link>
				</p>
			)}
			{auth.isLoggedIn && (
				<p>
					To go to Dashboard
					<Link to='/dashboard'>Click Here</Link>
				</p>
			)}
		</div>
	);
}

export default Home;
