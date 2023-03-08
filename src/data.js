import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Face3Icon from '@mui/icons-material/Face3';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const navItems = [
	{
		id: 1,
		label: 'Client',
		icon: <SentimentSatisfiedAltIcon />,
		location: '#clients',
	},
	{
		id: 2,
		label: 'Candidate',
		icon: <Face3Icon />,
		location: '#candidates',
	},
	{
		id: 3,
		label: 'Contact Us',
		icon: <AlternateEmailIcon />,
		location: '#contact',
	},
];
