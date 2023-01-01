/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

function Login() {
	const [email, setemail] = useState(null);

	const [password, setpassword] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'email') {
			setemail(value);
		}

		if (id === 'password') {
			setpassword(value);
		}
	};

	const handleSubmit = () => {
		console.log(email, password);
		navigate('/data');
	};
	const navigate = useNavigate();

	return (
		<div className='form'>
			<div className='form-body'>
				<h1 className='header-1'>Focus Academy</h1>
				<h1 className='header-1'> Login </h1>
				<div className='email'>
					<label className='form__label'>Enter Your Email ID</label>
					<br></br>
					<input
						className='form__input'
						type='text'
						onChange={(e) => handleInputChange(e)}
						id='email'
						placeholder='Your email'
					/>
				</div>

				<div className='password'>
					<label className='form__label'>Password </label>
					<br></br>
					<input
						type='password'
						id='password'
						className='form__input'
						onChange={(e) => handleInputChange(e)}
						placeholder='password'
					/>
				</div>

				<button
					className='button-2'
					onClick={() => handleSubmit()}
					type='submit'>
					Login
				</button>
			</div>
		</div>
	);
}
export default Login;
