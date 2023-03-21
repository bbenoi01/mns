import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.scss';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='social'>
				<p className='content'>Social</p>
				<div className='divider' />
				<div className='row'>
					<Tooltip title='Instagram' placement='left-start'>
						<IconButton
							href='https://instagram.com/matchmakingnannyservices/'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							<InstagramIcon className='sub-headline-alt' />
						</IconButton>
					</Tooltip>
					<Tooltip title='LinkedIn' placement='top'>
						<IconButton
							href='https://www.linkedin.com/in/kristin-rogers-97358b21a/'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							<LinkedInIcon className='sub-headline-alt' />
						</IconButton>
					</Tooltip>
					<Tooltip title='FaceBook' placement='right-start'>
						<IconButton
							href='https://www.facebook.com/profile.php?id=100090630715504'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							<FacebookIcon className='sub-headline-alt' />
						</IconButton>
					</Tooltip>
				</div>
			</div>

			<div className='contact-info'>
				<p className='content'>Contact Us At</p>
				<div className='divider' />
				<div className='row contact-row'>
					<CallIcon className='icon' />
					<h4 className='sub-headline-alt'>619-540-9227</h4>
				</div>
				<div className='row contact-row'>
					<EmailIcon className='icon' />
					<Link
						className='link email-link sub-headline-alt'
						to='mailto:kristin@matchmakingnannyservices.com'
					>
						kristen@matchmakingnannyservices.com
					</Link>
				</div>
			</div>

			<div className='privacy'>
				<p className='content'>Information</p>
				<div className='divider' />
				<Link
					className='link email-link sub-headline-alt'
					to='https://www.privacypolicies.com/live/3bf9d52c-aab9-41ce-8e9d-d37093c5c8b0'
					target='_blank'
				>
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
			</div>
		</footer>
	);
};

export default Footer;
