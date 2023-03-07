import React from 'react';
import './what.scss';

const What = () => {
	return (
		<section id='what'>
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
					<li>And More...</li>
				</ul>
			</div>
			<p className='headline closer'>
				Whether your child is flourishing, and you have no concerns, or
				struggling to hit some of their major milestones, we can help!
			</p>
		</section>
	);
};

export default What;
