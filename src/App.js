import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { BrowserRouter, Router, Route, Routes, NavLink } from 'react-router-dom';
import Footerr from './Components/Footerr';


import { Home } from './Home';
import { Users } from './Users';
import { About } from './About';

function App() {
	return (
		<>
			<BrowserRouter>
				<NaviBar />
				<Routes>
					<Route exect path="/" element={<Home />} />
					<Route exect path="/users" element={<Users />} />
					<Route exect path="/about" element={<About />} />
				</Routes>
				<Footerr />
			</BrowserRouter>
		</>
	);
}

export default App;
