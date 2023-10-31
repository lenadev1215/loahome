import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// 메인
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