import './Services.scss';
import NYC_Skyline from '../../Images/NYC_Skyline.png';

const Services = () => {
	return (
		<main className='home-container'>
			<article className='a1' id="panel">
				<img src={NYC_Skyline}
					alt='#'
					className='a1-image' />
				<div className='a1-header'>
					<h1>Nu Solutions</h1>
					<h2>Personal and Enterprise Wellness Solutions</h2>
				</div>
			</article>
			<article className='a2'>
				<img src={NYC_Skyline}
					alt='#'
					className='a2-image' />
				<h2>The Nu Standard of Service</h2>
				<p>Historically, the world has always changed at a blinding pace.
                    2020 shifted the rate of change from blinding to explosive. 
                    When the world changes this quickly, the need to evolve strategies for success becomes paramount. 
                    NuCalm holds the world’s only patent for minimizing stress and improving sleep quality without pharmaceuticals. 
                    You can now change…..the game
                    For those you service.
                    (and that will change their world in the best way, like never before)
                </p>
			</article>
			<article className='a3'>
				<img src={NYC_Skyline}
					alt='#'
					className='a3-image' />
				<h1>The Nu Look of Wellness</h1>
				<p>Effectively minimizing stress and improving the sleep quality of employees should be the #1 priority for any company, group, or brand who want to provide the best, increase productivity, reduce the number of sick days, and improve the bottom line.
                    NuCalm holds the world’s only patent to do both without pharmaceuticals.
                    It also improves energy, focus, mood, cognition, and mental acuity.
                    There really isn’t much to think about from here…..
                    Other than how to get it to your team sooner than later.
                </p>
			</article>
			<article className='a4'>
				<h1>Contact</h1>
			</article>
		</main>
	);
};

export default Services;
