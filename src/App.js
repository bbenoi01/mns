import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Topbar from './components/topbar';
import Home from './features/home';
import './app.scss';

function App() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path='/' element={<Home />} />
			</Switch>
		</Router>
	);
}

export default App;
