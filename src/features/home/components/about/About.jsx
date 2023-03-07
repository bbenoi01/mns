import { Avatar, Card, CardContent, Grid } from '@mui/material';
import './about.scss';

const About = () => {
	return (
		<section id='about'>
			<p>About Me</p>
			<Grid container spacing={5} justifyContent='center' alignItems='flex-end'>
				<Grid item xs={12} sm={8} md={6}>
					<Card className='card about-card'>
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
				I'm a mom and trusted friend, dedicated to making childhood sweet again!
			</p>
		</section>
	);
};

export default About;
