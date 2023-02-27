import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.scss';

const navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' color='inherit' component='div'>
						Photos
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default navbar;
