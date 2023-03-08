import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.scss';

const Footer = () => {
	return (
		<footer id='footer'>
			<div
				className='row'
				style={{ justifyContent: 'center', alignItems: 'center' }}
			>
				<CopyrightIcon className='icon' />
				<p className='sub-headline-alt'>
					2023 digitalkatana.dev All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
