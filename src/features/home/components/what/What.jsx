import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';
import './what.scss';

const What = () => {
	return (
		<section id='clients'>
			<h4 className='headline section-header'>Services</h4>
			<div className='divider' />
			<p className='headline header'>Placement Services Include:</p>
			<div className='list'>
				<ul>
					<li>In home consultation by the CEO</li>
					<li>
						A vast selection of candidates that suit your families’ specific
						needs{' '}
					</li>
					<li>Salary negotiations</li>
				</ul>
				<ul>
					<li>Options for payroll/W-2/contract agreements</li>
					<li>Reference checks</li>
					<li>Thorough background check on selected nanny</li>
					<li>Access to staff after hours and on weekends</li>
				</ul>
			</div>
			<p className='headline closer'>
				Whether your child is flourishing and you have no concerns, or
				struggling to hit some of their major milestones, we can help!
			</p>

			<Grid container spacing={5} justifyContent='center' alignItems='flex-end'>
				<Grid item xs={12} sm={6} md={4}>
					<Card className='card price-card'>
						<CardHeader
							title='Full time/Part time Placement'
							titleTypographyProps={{
								align: 'center',
								color: '#fffffe',
								fontFamily: 'Josefin Slab serif',
								fontSize: '19px',
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
					<Card className='card price-card'>
						<CardHeader
							title='Special Needs'
							titleTypographyProps={{
								align: 'center',
								color: '#fffffe',
								fontFamily: 'Josefin Slab serif',
								fontSize: '19px',
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

export default What;
