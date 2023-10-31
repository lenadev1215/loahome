import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/sass/style.scss';
import Main from './pages/Main';

const App = () => {
  return (
		<div>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	);
};

export default App;