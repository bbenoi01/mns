import { Link } from 'react-router-dom';
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { navItems } from '../../../../data';

const NavList = ({ onClick }) => {
	return (
		<Box sx={{ textAlign: 'center' }} onClick={onClick}>
			<Link className='link' id='brand-link' to='/'>
				<Typography variant='h6' sx={{ my: 2 }}>
					MNS
				</Typography>
			</Link>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default NavList;
