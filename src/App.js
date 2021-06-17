import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import NewCsv from "./pages/NewCsv";

function App() {
	return (
		<Router>
			{/* {Navbar} */}
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/dashboard' exact>
					<Dashboard />
				</Route>
				<Route path='/new-csv' exact>
					<NewCsv />
				</Route>
				<Route path='/login' exact>
					<Login />
				</Route>
				<Route path='/signup' exact>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
