import { Link } from 'react-router-dom';
import './candidates.scss';

const Candidates = () => {
	return (
		<section id='candidates'>
			<h4 className='headline section-header'>Candidates/Nannies</h4>
			<div className='divider' />
			<p className='headline header'>
				Matchmaking Nanny Services requires all applicants to submit/agree to
				the following:
			</p>
			<div className='list'>
				<ul>
					<li>Resume with 2-3 excellent references</li>
					<li>Willing to go through a background check</li>
					<li>Authorized to work in the US</li>
					<li>Command of the English language</li>
					<li>
						Possible cpr/first aid certification (or willingness to obtain)
					</li>
				</ul>
			</div>
			<p className='sub-headline closer'>
				Please email documents to:{' '}
				<Link
					className='link email-link sub-headline'
					to='mailto:kristin@matchmakingnannyservices.com'
				>
					kristin@matchmakingnannyservices.com
				</Link>
			</p>
		</section>
	);
};

export default Candidates;
