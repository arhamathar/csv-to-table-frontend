import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Form Elements/Input";
import AuthContext from "../../context/authContext";

function Login() {
	const history = useHistory();
	const auth = useContext(AuthContext);

	const [email, setEmail] = useState({
		value: "",
		isValid: false,
		isTouch: false,
	});
	const [password, setPassword] = useState({
		value: "",
		isValid: false,
		isTouch: false,
	});
	const [isLoading, setIsLoading] = useState(false);
	const [formValidity, setFormValidity] = useState(false);

	const inputChangeHandler = (e) => {
		if (e.target.name === "email") {
			setEmail((prevEmail) => {
				return {
					...prevEmail,
					value: e.target.value,
					isTouch: true,
					isValid: /^\S+@\S+\.\S+$/.test(e.target.value),
				};
			});
		} else if (e.target.name === "password") {
			setPassword((prevPassword) => {
				return {
					...prevPassword,
					value: e.target.value,
					isTouch: true,
					isValid: e.target.value.trim().length >= 6,
				};
			});
		}
	};

	useEffect(() => {
		if (email.isValid && password.isValid) {
			setFormValidity(true);
		} else {
			setFormValidity(false);
		}
	}, [email.isValid, password.isValid]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/user/login`,
				{
					method: "POST",
					body: JSON.stringify({
						email: email.value,
						password: password.value,
					}),
					headers: { "Content-Type": "application/json" },
				}
			);
			const responseData = await response.json();
			if (!response.ok) {
				throw new Error(responseData.message);
			}
			console.log(responseData);
			auth.login(responseData.userId, responseData.token);
			setIsLoading(false);
			history.push("/");
		} catch (err) {
			setIsLoading(false);
			console.log(err);
		}
	};

	return (
		<React.Fragment>
			<div className='form-container'>
				{isLoading && <h1>Loading...</h1>}
				{!isLoading && <h2 style={{ color: "#404040" }}>LOG IN</h2>}
				<form onSubmit={onSubmitHandler}>
					<Input
						id='email'
						type='email'
						label='Email'
						name='email'
						placeholder='xyz@gmail.com'
						onChange={inputChangeHandler}
						autoFocus
						value={email.value}
						valid={email.isValid}
						touch={email.isTouch}
					/>
					<Input
						id='password'
						type='password'
						label='Password'
						name='password'
						placeholder='Password'
						onChange={inputChangeHandler}
						value={password.value}
						valid={password.isValid}
						touch={password.isTouch}
					/>
					{/* disabled={!formValidity} */}
					<button className='btn' type='submit'>
						Log In
					</button>
					<p>
						Don't have an account ?&nbsp;
						<Link
							style={{
								textDecoration: "none",
								color: "var(--purple)",
							}}
							to='/auth/signup'
						>
							Sign Up{" "}
						</Link>
					</p>
				</form>
			</div>
		</React.Fragment>
	);
}

export default Login;
