/** @format */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login.js';
import Data from './components/Data.js';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					element={<Data />}
					path='/data'
				/>
				<Route
					element={<Login />}
					path='/'
				/>
			</Routes>
		</div>
	);
}

export default App;
