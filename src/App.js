import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Home } from './Home';
import { Users } from './Users';
import { About } from './About';

function App() {
	return (
		<>
			<Router>
				<NaviBar />
				<Routes>
					<Route exect path="/" element={<Home />} />
					<Route exect path="/users" element={<Users />} />
					<Route exect path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
