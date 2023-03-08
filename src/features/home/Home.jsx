import Hero from './components/hero';
import Who from './components/who';
import What from './components/what';
// import Rates from './components/rates';
import About from './components/about';
import Contact from './components/contact';
import Footer from '../../components/footer';
import './home.scss';

const Home = () => {
	return (
		<div className='canvas'>
			<Hero />
			<Who />
			<What />
			{/* <Rates /> */}
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
