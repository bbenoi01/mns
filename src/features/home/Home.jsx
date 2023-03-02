import { Link } from 'react-router-dom';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
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
				<p className='headline header'>Placement/Services Include</p>
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
				<p className='headline closer'>
					Whether your child is flourishing, and you have no concerns, or
					struggling to hit some of their major milestones, we can help.
				</p>
			</section>
			<section id='rates'>
				<p>Rates</p>
				<Grid
					container
					spacing={5}
					justifyContent='center'
					alignItems='flex-end'
				>
					<Grid item xs={12} sm={6} md={4}>
						<Card className='price-card'>
							<CardHeader
								title='Full time/Part time Placement'
								titleTypographyProps={{
									align: 'center',
									color: '#fffffe',
									fontFamily: 'Josefin Slab serif',
								}}
								sx={{
									backgroundColor: '#001858',
								}}
							/>
							<CardContent>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'baseline',
										mb: 2,
									}}
								>
									<h3 className='fine-print'>$3,000.00</h3>
								</Box>
								<h6 className='fine-print'>
									$1,000.00 deposit and remainder ($2,000.00) to be paid in full
									within 48 hours of placement.
								</h6>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className='price-card'>
							<CardHeader
								title='Special Needs'
								titleTypographyProps={{
									align: 'center',
									color: '#fffffe',
									fontFamily: 'Josefin Slab serif',
								}}
								sx={{ backgroundColor: '#001858' }}
							/>
							<CardContent>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'baseline',
										mb: 2,
									}}
								>
									<h3 className='fine-print'>$4,000.00</h3>
								</Box>
								<h6 className='fine-print'>
									$1,000.00 deposit and remainder ($3,000.00) to be paid in full
									within 48 hours of placement.
								</h6>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</section>
			<section id='about'>
				<p>About Me</p>
				<Grid
					container
					spacing={5}
					justifyContent='center'
					alignItems='flex-end'
				>
					<Grid item xs={12}>
						<Card className='about-card'>
							<CardContent className='vitals'>
								<Avatar
									className='avatar'
									alt="CEO's Picture"
									src='kristin.jpg'
								/>

								<div>
									<p>Kristin Rogers</p>
									<p>619-540-9227</p>
									<a
										href='mailto:kristin@matchmakingnannyservices.com'
										className='link email-link sub-headline'
									>
										kristin@matchmakingnannyservices.com
									</a>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<div className='list'>
					<ul>
						<li>25 plus years in the field</li>
						<li>Two teaching credentials</li>
						<li>Masters degree (education specialist)</li>
					</ul>
				</div>
				<p className='tag'>
					I'm a mom and trusted friend, dedicated to making childhood sweet
					again!
				</p>
			</section>
			<section id='contact'>
				<p>Contact Us</p>

				<h3>Get In Touch</h3>

				<p>Do you have questions?</p>

				<p>
					I am always happy to give you more information about our services, or
					address any concerns
				</p>

				<div className='row'>
					<EmailIcon className='icon' />
					<Link
						className='link email-link sub-headline'
						to='mailto:kristin@matchmakingnannyservices.com'
					>
						kristen@matchmakingnannyservices.com
					</Link>
				</div>
				<div className='row'>
					<CallIcon className='icon' />
					<h4 className='sub-headline'>619-540-9227</h4>
				</div>
			</section>
			<footer>
				<p>Some footer shit</p>
			</footer>
		</div>
	);
};

export default Home;
