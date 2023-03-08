import React from 'react';
import Hero from './components/hero';
import Who from './components/who';
import What from './components/what';
import Rates from './components/rates';
import Footer from '../../components/footer';

const clientView = () => {
	return (
		<div className='canvas'>
			<Hero />
			<Who />
			<What />
			<Rates />
			<Footer />
		</div>
	);
};

export default clientView;
