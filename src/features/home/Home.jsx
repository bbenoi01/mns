import Hero from './components/hero';
import Who from './components/who';
import What from './components/what';
import About from './components/about';
import Candidates from './components/candidates';
import Contact from './components/contact';
import Footer from '../../components/footer';
import './home.scss';

const Home = () => {
	return (
		<div className='canvas'>
			<Hero />
			<Who />
			<What />
			<About />
			<Candidates />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
