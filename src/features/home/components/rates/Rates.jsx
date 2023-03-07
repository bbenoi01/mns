import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import './rates.scss';

const Rates = () => {
	return (
		<section id='rates'>
			<p>Rates</p>
			<Grid container spacing={5} justifyContent='center' alignItems='flex-end'>
				<Grid item xs={12} sm={6} md={4}>
					<Card className='card'>
						<CardHeader
							title='Full time/Part time Placement'
							titleTypographyProps={{
								align: 'center',
								color: '#fffffe',
								fontFamily: 'Josefin Slab serif',
							}}
							sx={{
								backgroundColor: '#001858',
							}}
						/>
						<CardContent>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'baseline',
									mb: 2,
								}}
							>
								<h3 className='fine-print'>$3,000.00</h3>
							</Box>
							<h6 className='fine-print'>
								$1,000.00 deposit and remainder ($2,000.00) to be paid in full
								within 48 hours of placement.
							</h6>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card className='card'>
						<CardHeader
							title='Special Needs'
							titleTypographyProps={{
								align: 'center',
								color: '#fffffe',
								fontFamily: 'Josefin Slab serif',
							}}
							sx={{ backgroundColor: '#001858' }}
						/>
						<CardContent>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'baseline',
									mb: 2,
								}}
							>
								<h3 className='fine-print'>$4,000.00</h3>
							</Box>
							<h6 className='fine-print'>
								$1,000.00 deposit and remainder ($3,000.00) to be paid in full
								within 48 hours of placement.
							</h6>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default Rates;
