import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	Toolbar,
	Typography,
	IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data';
import MenuIcon from '@mui/icons-material/Menu';
import Navlist from './components/navlist';
import './topbar.scss';

const Topbar = ({ window }) => {
	const [open, setOpen] = useState(false);
	const container =
		window !== undefined ? () => window().document.body : undefined;

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component='nav'>
				<Toolbar className='topbar' variant='dense'>
					<IconButton
						edge='start'
						aria-label='menu'
						sx={{ mr: 2, display: { sm: 'none' }, color: '#fef6e4' }}
						onClick={handleToggle}
					>
						<MenuIcon />
					</IconButton>
					<Link className='link home-link' to='/'>
						<Typography
							variant='h6'
							component='div'
							sx={{
								display: { xs: 'none', sm: 'block' },
								textAlign: { xs: 'center', sm: 'left' },
							}}
						>
							Matchmaking Nanny Services
						</Typography>
					</Link>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<a className='link nav-link' key={item.id} href={item.location}>
								{item.label}
							</a>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={open}
					onClose={handleToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },

						'& .MuiDrawer-paper': {
							backgroundColor: '#fef6e4',
							boxSizing: 'border-box',
							width: 240,
						},
					}}
				>
					<Navlist onClick={handleToggle} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default Topbar;
