import { useEffect } from 'react';
import ContactForm from '../Contact-Form/Contact';
import '../Contact-Form/ContactForm.scss';

import './About.scss';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const aboutVideoUrl =
		'https://thechambercollective.s3.us-east-2.amazonaws.com/About/Videos/About+video+.mp4';

	return (
		<main className='about-container'>
			<article className='a1'>
				<video
					className='title-video'
					alt='Video of Aaron'
					autoPlay
					muted
					loop
					src={aboutVideoUrl}></video>

				<div className='a1-header' id='about-header'>
					<h1>About</h1>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='about-header'>
					<h1>The Mission</h1>
					<h2>
						To bring together high-performing individuals who will make a
						positive impact on the world through personal discovery and growth.{' '}
					</h2>
				</div>
			</article>
			<article className='a3'>
				<div className='a3-header' id='about-header'>
					<h2>
						We’re a collective of individuals, athletes, sons, daughters,
						hi-performers, entrepreneurs, moms, dads, musicians.{' '}
					</h2>
					<h2>
						Most of us wear multiple labels on any given day but regardless of
						our responsibilities, we’re driven to operate at a high-level EVERY
						. . . SINGLE . . . DAY .{' '}
					</h2>
					<h2>We will never accept good enough.</h2>
					<h2>
						We’re wired to push the boundaries of what’s possible and . . .
						impossible.{' '}
					</h2>
				</div>
			</article>
			<article className='a-contact'>
				<ContactForm />
			</article>
		</main>
	);
};

export default About;
