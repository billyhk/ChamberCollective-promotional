import './Home.scss';
import NYC_Skyline from '../../Images/NYC_Skyline.png';

const Home = () => {
	return (
		<main className='home-container'>
			<article className='a1' id="panel">
				<img src={NYC_Skyline}
					alt='#'
					className='a1-image' />
				<div className='a1-header'>
					<h1>The Community</h1>
					<h2>A partnership about growth and recovery</h2>
				</div>
			</article>
			<article className='a2'>
				<img src={NYC_Skyline}
					alt='#'
					className='a2-image' />
				<h1>About</h1>
				<p>To bring together high-performing individuals who will make a positive impact 
					on the world through personal discovery and growth.</p>
			</article>
			<article className='a3'>
				<img src={NYC_Skyline}
					alt='#'
					className='a3-image' />
				<h1>Members</h1>
				<p>We're a collective of individuals, athletes, sons, daughters, hi-performers,
					entrepreneurs, moms, dads, musicians.</p>
			</article>
			<article className='a4'>
				<img src={NYC_Skyline}
					alt='#'
					className='a4-image' />
				<h1>The Cache</h1>
				<p>The latest media on what our members have been up to.</p>
			</article>
			<article className='a5'>
				<img src={NYC_Skyline}
					alt='#'
					className='a5-image' />
				<h1>The Nu Standard of Service</h1>
				<p>Explore personal and business wellness solutions offered by The Chamber.</p>
			</article>
			<article className='a6'>article6</article>
		</main>
	);
};

export default Home;
