import React from 'react';
import { Avatar } from '@mui/material';
import Hero from './components/hero';
import './home.scss';

const Home = () => {
	return (
		<div className='canvas'>
			<Hero />
			<section id='who'>
				<p>
					Matchmaking Nanny Services offers top-notch candidates to families in
					the local San Diego area. We provide a personalized, in home approach,
					to better assist in the matchmaking process.
				</p>
			</section>
			<section id='what'>
				<p>Placement/Services Include</p>
				<div className='list'>
					<ul>
						<li>In home consultation by the CEO</li>
						<li>
							A vast selection of candidates that suit your families’ specific
							needs{' '}
						</li>
						<li>Salary negotiations</li>
					</ul>
					<ul>
						<li>Options for payroll/W-2/contract agreements</li>
						<li>Reference checks</li>
						<li>And More...</li>
					</ul>
				</div>
				<p>
					Whether your child is flourishing, and you have no concerns, or
					struggling to hit some of their major milestones, we can help.
				</p>
			</section>
			<section id='about'>
				<p>About Me</p>
				<div className='row vitals'>
					<Avatar
						alt="CEO's Picture"
						src='hp7.jpg'
						sx={{ width: 80, height: 80 }}
					/>
					<div>
						<p>Kristen Lopez</p>
						<p>858-227-8969</p>
						<p>kl@someshit.com</p>
					</div>
				</div>
				<div className='list'>
					<ul>
						<li>25 plus years in the field</li>
						<li>two teaching credentials</li>
						<li>masters degree (education specialist)</li>
					</ul>
				</div>
				<p className='tag'>
					I'm a mom and trusted friend, dedicated to making childhood sweet
					again!
				</p>
			</section>
			<section id='contact'>
				<p>Contact Us</p>
			</section>
			<footer>
				<p>Some footer shit</p>
			</footer>
		</div>
	);
};

export default Home;
