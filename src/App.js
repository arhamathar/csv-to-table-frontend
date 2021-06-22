import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewCsv from "./pages/NewCsv";
import Preview from "./pages/Preview";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Ui/Navbar";
import AuthContext from "./context/authContext";
import "./App.css";

function App() {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState();

	const login = (uid, token) => {
		setToken(token);
		setUserId(uid);
		localStorage.setItem(
			"userData",
			JSON.stringify({ userId: uid, token: token })
		);
	};

	const logout = () => {
		setToken(null);
		setUserId(null);
		localStorage.removeItem("userData");
	};

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (storedData && storedData.token) {
			login(storedData.userId, storedData.token);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}
		>
			<Router>
				<Navbar />
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
					<Route path='/csv-table-preview' exact>
						<Preview />
					</Route>
					<Route path='/auth/login' exact>
						<Login />
					</Route>
					<Route path='/auth/signup' exact>
						<Signup />
					</Route>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
