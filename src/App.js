import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './features/home';
import ClientView from './features/clients';
import CandidateView from './features/candidates';
import './app.scss';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/clients' element={<ClientView />} />
				<Route path='/candidates' element={<CandidateView />} />
			</Switch>
		</Router>
	);
}

export default App;
