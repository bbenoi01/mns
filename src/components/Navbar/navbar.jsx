import React, { useState } from 'react';
import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	Toolbar,
	Typography,
	IconButton,
	Button,
} from '@mui/material';
import { navItems } from '../../data';
import MenuIcon from '@mui/icons-material/Menu';
import NavList from './components/navList';
import './navbar.scss';

const Navbar = ({ window }) => {
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
				<Toolbar variant='dense'>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2, display: { sm: 'none' } }}
						onClick={handleToggle}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
							textAlign: { xs: 'center', sm: 'left' },
						}}
					>
						MNS
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button key={item.id} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
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
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
					}}
				>
					<NavList onClick={handleToggle} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;
