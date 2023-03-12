import { CircularProgress } from '@mui/material';
import './button.scss';

const Button = ({ label, onClick, loading }) => {
	return (
		<button className='btn' onClick={onClick}>
			{loading ? <CircularProgress size={20} thickness={5} /> : <>{label}</>}
		</button>
	);
};

export default Button;
