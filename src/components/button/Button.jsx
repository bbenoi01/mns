import React from 'react';
import './button.scss';

const Button = ({ label, onClick, loading }) => {
	return (
		<button className='btn' onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
