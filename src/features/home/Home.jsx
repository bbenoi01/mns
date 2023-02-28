import React from 'react';
import { Avatar, Card, CardContent } from '@mui/material';
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
			<section id='rates'>
				<p>Rates</p>
				<div className='row pricing-row'>
					<Card className='pricing'>
						<CardContent>
							<h6>Pricing</h6>
						</CardContent>
					</Card>
					<Card className='pricing'>
						<CardContent>
							<h6>Pricing</h6>
						</CardContent>
					</Card>
				</div>
				{/* <p>
					Rates: Full time/Part time placement: $3,000.00 ($1,000.00 deposit and
					remainder ($2,000.00) to be paid in full within 48 hours of placement.
					Special needs: $4,000.00. Same breakdown (1k/3k).{' '}
				</p> */}
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
						<p>Kristin Rogers</p>
						<p>619-540-9227</p>
						<p style={{ fontSize: '.75rem' }}>
							kristin@matchmakingnannyservices.com
						</p>
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
