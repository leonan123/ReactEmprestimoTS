import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import LendingSimulator from './pages/LendingSimulator/LendingSimulator.jsx';
import Login from './pages/Login/Login.jsx';

const Router = () => {
	return (
		<AnimatePresence>
			<BrowserRouter> 
				<Routes>
					<Route path="/lending-simulator" element={<LendingSimulator/>} />
					<Route path="/" element={<Login/>} />
				</Routes>
			</BrowserRouter>
		</AnimatePresence>
	);
};

export default Router;
