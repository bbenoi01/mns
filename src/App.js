import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Topbar from './components/topbar';
import Home from './features/home';
import ClientView from './features/clients';
import CandidateView from './features/candidates';
import ContactView from './features/contact';
import './app.scss';

function App() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/clients' element={<ClientView />} />
				<Route path='/candidates' element={<CandidateView />} />
				<Route path='/contact-us' element={<ContactView />} />
			</Switch>
		</Router>
	);
}

export default App;
