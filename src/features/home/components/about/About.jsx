import { Avatar } from '@mui/material';
import './about.scss';

const About = () => {
	return (
		<section id='about'>
			<h4 className='headline section-header'>About Me</h4>
			<div className='divider' />
			<div className='vitals'>
				<Avatar className='avatar' alt="CEO's Picture" src='kristin.png' />
				<h3 className='headline name'>Kristin Rogers</h3>
			</div>
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
