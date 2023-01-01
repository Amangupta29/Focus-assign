/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Data.css';
const Data = () => {
	const [item, setItem] = useState([]);

	useEffect(() => {
		axios
			.get('https://randomuser.me/api/?results=500')
			.then((res) => {
				setItem(res.data.results);
				console.log(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='data'>
			<div className='head'>
				<h3>Profile</h3>
				<h3>Names</h3>
				<h3>Gender</h3>
				<h3>Phone </h3>
				<h3>Email</h3>
				<h3>City</h3>
				<h3>Country</h3>
				<h3>Age</h3>
			</div>
			{item.map((x, index) => {
				return (
					<div
						key={index}
						className='lane'>
						<img
							src={x.picture.medium}
							alt='pic94 '
						/>

						<h5 className='name'>
							{x.name.title}.{x.name.first}
							{x.name.last}
							{/* {x.location.street} */}
						</h5>
						<h5>{x.gender}</h5>
						<h5>{x.phone}</h5>
						<h5>{x.email}</h5>
						<h5>{x.location.city}</h5>
						<h5>{x.location.country}</h5>
						<h5>{x.dob.age}</h5>
					</div>
				);
			})}
		</div>
	);
};

export default Data;
