import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { navItems } from '../../../../data';
import './navlist.scss';

const Navlist = ({ onClick }) => {
	return (
		<Box sx={{ textAlign: 'center' }} onClick={onClick}>
			<Link className='link' id='brand-link' to='/'>
				<Typography
					variant='h6'
					sx={{ my: 1, color: '#001858', fontWeight: 'bold' }}
				>
					Matchmaking Nanny Services
				</Typography>
			</Link>
			<Divider />
			<List>
				{navItems.map((item) => (
					<a className='link drawer-link' key={item.id} href={item.location}>
						<ListItem>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText
								primary={item.label}
								primaryTypographyProps={{ fontWeight: 'bold' }}
							/>
						</ListItem>
					</a>
				))}
			</List>
		</Box>
	);
};

export default Navlist;
