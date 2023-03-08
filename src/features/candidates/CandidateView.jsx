import React from 'react';
import Hero from './components/hero';
import Requirements from './components/requirements';
import Footer from '../../components/footer';

const CandidateView = () => {
	return (
		<div className='canvas'>
			<Hero />
			<Requirements />
			<section>
				<p>
					For candidates/nannies: MNS requires all applicants to submit/agree to
					the following. Please email documents to: ________________(whatever my
					email will be) Resume 2-3 excellent references Willing to go through a
					background check Authorized to work in the US Command of the English
					language Possible cpr/first aid certification/or willingness to obtain
				</p>
			</section>
			<Footer />
		</div>
	);
};

export default CandidateView;
