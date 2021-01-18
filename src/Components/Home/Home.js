import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import ContactForm from '../Contact-Form/Contact';
import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

const toTop = () => {
	window.scrollTo(0, 0);
};
const homeVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Home/Videos/Home+video+.mp4';
const homeVideoUrl2 =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Home/Videos/Home+page+hero.mp4';
const aboutVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/About/Videos/About+video+.mp4';
const mediaVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/media+2X.mp4';
const mediaVideoUrl2 =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/media+XYZ.mp4';

const contactVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/contact+video.mp4';

const Home = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='home-container'>
						<ReactFullpage.Wrapper>
							<div className='section'>
								<article className='a1' id='opening-panel'>
									<video
										className='title-video'
										alt='Video of Aaron'
										controls
										autoPlay
										muted
										loop>
										<source data-src={homeVideoUrl2} />
									</video>
									{/* <div className='a1-header' id='home-header'>
										<h1>The Community</h1>
										<h2>A partnership about growth and recovery</h2>
									</div> */}
									{/* <p className='scroll-down-text'>
										&#x21e3; Scroll Down &#x21e3;
									</p> */}
								</article>
							</div>
							<div className='section'>
								<article className='a2'>
									{' '}
									<video
										className='title-video'
										alt='about nucalm'
										controls
										autoPlay
										muted
										loop>
										<source data-src={aboutVideoUrl} />
									</video>
									<div className='a2-header' id='home-header'>
										<Link to='/about' onClick={toTop}>
											<h1>About</h1>
											<h2>
												Aaron Drogoszewski, co-founder of RēCOVER and his
												network of high- performing friends, have come together
												to collectively make a positive impact on the world by
												sharing their gifts of knowledge, passion, and service
												to all who aspire to level up in life, work, and play.
											</h2>
										</Link>
									</div>
								</article>{' '}
							</div>
							<div className='section'>
								<article className='a3'>
									<div className='three-images-background'>
										<img
											data-src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/Aaron/Images/Aaron_Profile.png'
											alt='aaron'
										/>
										<img
											data-src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/JohnJoseph/John+Joseph+Profile.png'
											alt='john'
										/>
										<img
											data-src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/NickPags/Nick+Pags+Profile.png'
											alt='nick'
										/>
									</div>
									<div className='a3-header' id='home-header'>
										<Link to='/members' onClick={toTop}>
											<h1>Members</h1>
											<h2>
												We’re a collective of individuals who wear many hats in
												life, yet we all share one foundational truth.
											</h2>
											<h2>
												If “Home is where you hang your hat”…
												<br />{' '}
												<strong>
													Our “home” is the pursuit of excellence.
												</strong>
											</h2>
										</Link>
									</div>
								</article>
							</div>
							<div className='section'>
								{' '}
								<article className='a4'>
									<video
										className='title-video'
										alt='media video'
										controls
										autoPlay
										muted
										loop
										style={{ opacity: '0.6' }}>
										<source data-src={mediaVideoUrl2} />
									</video>

									<div className='a4-header' id='home-header'>
										<Link to='/media' onClick={toTop}>
											<h1>The Cache</h1>
											<h2>
												“I cannot teach anybody anything. I can only make them
												think.”
												<br />
												― Socrates
											</h2>
										</Link>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a5'>
									<div className='a5-header' id='home-header'>
										<Link to='/services' onClick={toTop}>
											<h1>The Nu Standard of Service</h1>
											<h2>
												Explore personal and business wellness solutions offered
												by The Chamber.
											</h2>
										</Link>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a-contact'>
									{' '}
									<video
										className='title-video'
										alt='contact video'
										controls
										autoPlay
										muted
										loop>
										<source data-src={contactVideoUrl} />
									</video>
									<ContactForm />
								</article>
							</div>
							<h1
								className='nav-to-top'
								onClick={() => fullpageApi.moveTo(1, 0)}>
								&uArr;
							</h1>
						</ReactFullpage.Wrapper>
					</main>
				);
			}}
		/>
	);
};
export default Home;
