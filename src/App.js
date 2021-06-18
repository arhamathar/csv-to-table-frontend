import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewCsv from "./pages/NewCsv";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import "./App.css";

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
				<Route path='/auth/login' exact>
					<Login />
				</Route>
				<Route path='/auth/signup' exact>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
