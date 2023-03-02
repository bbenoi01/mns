import React from 'react';
import './button.scss';

const Button = ({ label, onClick }) => {
	return (
		<button className='btn' onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
