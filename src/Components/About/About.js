import './About.scss';
import NYC_Skyline from '../../Images/NYC_Skyline.png';

const About = () => {
	return (
		<main className='home-container'>
			<article className='a1'>
				<img src={NYC_Skyline}
					alt='#'
					className='a1-img' />
				<h1>About</h1>
			</article>
			<article className='a2'>
				<img src={NYC_Skyline}
					alt='#'
					className='a2-img' />
				<h1>The Mission</h1>
				<p>To bring together high-performing individuals who will make a positive impact
				on the world through personal discovery and growth. </p>
			</article>
			<article className='a3'>
				<img src={NYC_Skyline}
					alt='#'
					className='a3-img' />
				<p>We’re a collective of individuals, athletes, sons, daughters, hi-performers, 
					entrepreneurs, moms, dads, musicians. </p>
				<p>Most of us wear multiple labels on any given day but regardless of our responsibilities,
					 we’re driven to operate at a high-level EVERY . . . SINGLE . . . DAY . </p>
				<p>We will never accept good enough.</p>
				<p>We’re wired to push the boundaries of what’s possible and . . . impossible. </p>
			</article>
			<article className='a4'>
				<h1>Contact</h1>
			</article>
		</main>
	);
};

export default About;
