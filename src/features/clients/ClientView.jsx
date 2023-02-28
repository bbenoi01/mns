import React from 'react';
import Hero from './components/hero';

const clientView = () => {
	return (
		<div className='canvas'>
			<Hero />
			<section>
				<p>
					For clients/families: MNS (spelled out) offers top-notch candidates to
					families in the local San Diego area. We provide a personalized, in
					home approach, to better assist in the matchmaking process. Whether
					your child is flourishing, and you have no concerns, or struggling to
					hit some of their major milestones, we can help. Placement/services
					include: In home consultation by the CEO A vast selection of
					candidates that suit your families’ specific needs Salary negotiations
					Options for payroll/W-2/contract agreements Reference checks Thorough
					background check on selected nanny Access to staff after hours and on
					the weekends Rates: Full time/Part time placement: $3,000.00
					($1,000.00 deposit and remainder ($2,000.00) to be paid in full within
					48 hours of placement. Special needs: $4,000.00. Same breakdown
					(1k/3k).
				</p>
			</section>
		</div>
	);
};

export default clientView;
