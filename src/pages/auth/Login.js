import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form Elements/Input";

function Login() {
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
	const [error, setError] = useState(false);
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

	const onSubmitHandler = (e) => {};

	return (
		<React.Fragment>
			<div className='form-container'>
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
					<button className='btn' disabled type='button'>
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
