import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className='home'>
			<h1>Welcome to CSV Converter</h1>
			<p>
				To convet new CSV file
				<Link to='/new-csv'>Click Here</Link>
			</p>
			<p>
				To go to Dashboard
				<Link to='/dashboard'>Click Here</Link>
			</p>
		</div>
	);
}

export default Home;
