import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

const Hero = () => {
	return (
		<>
			<div id='home-hero'></div>
			<div className='hero-text'>
				<h3>Inspiring new love connections.</h3>
				<h5>~ I am a ~</h5>
				<div>
					<Link className='link visitor-type' to='/clients'>
						Client
					</Link>
					<Link className='link visitor-type' to='/candidates'>
						Candidate
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
