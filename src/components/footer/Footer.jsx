import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.scss';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='row social'>
				<Tooltip title='Instagram' placement='right-start'>
					<IconButton
						href='https://instagram.com/matchmakingnannyservices/'
						target='_blank'
						referrerPolicy='no-referrer'
					>
						<InstagramIcon className='social-icon' />
					</IconButton>
				</Tooltip>
			</div>
			<div className='contact-info'>
				<p>Contact Us At</p>
				<div className='row contact-row'>
					<CallIcon className='icon' />
					<h4 className='sub-headline'>619-540-9227</h4>
				</div>
				<div className='row contact-row'>
					<EmailIcon className='icon' />
					<Link
						className='link email-link sub-headline'
						to='mailto:kristin@matchmakingnannyservices.com'
					>
						kristen@matchmakingnannyservices.com
					</Link>
				</div>
			</div>
			<Link className='link privacy' to='/privacy'>
				Privacy Policy
			</Link>
			<div className='row copyright'>
				<CopyrightIcon className='icon' />
				<p className='sub-headline-alt'>
					2023{' '}
					<Link
						className='link email-link sub-headline-alt'
						to='mailto:digitalkatana.dev'
					>
						digitalkatana.dev
					</Link>{' '}
					All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
