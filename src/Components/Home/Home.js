import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import ContactForm from '../Contact-Form/Contact';
import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

// VIDEOS
import { videos } from '../../videoData';
import homeHero from '../../resized-videos/home-hero-720.mov';
import aboutVideo from '../../resized-videos/About-video-720.mov';
import mediaVideo from '../../resized-videos/media-XYZ-720.mov';
import contactVideo from '../../resized-videos/contact-video-720.mov';

// IMAGES
import aaronProfile from '../../resized-images/Aaron_Profile.jpg';
import johnProfile from '../../resized-images/John Joseph Profile.jpg';
import nickProfile from '../../resized-images/Nick Pags Profile.jpg';

const toTop = () => {
	window.scrollTo(0, 0);
};

const Home = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	console.log(videos);
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
										// controls
										playsInline
										// autoPlay
										data-autoplay
										// data-keepplaying
										muted
										loop>
										{/* <source data-src={videos.homeVideoUrl2} /> */}
										<source data-src={homeHero} />
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
										// controls
										playsInline
										data-autoplay
										muted
										loop>
										{/* <source data-src={videos.aboutVideoUrl720} /> */}
										<source data-src={aboutVideo} />
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
										{/* <img
											data-src='https://d1amesytz4ny5q.cloudfront.net/fit-in/800x600/Members/Aaron/Images/Aaron_Profile.png'
											alt='aaron'
										/>
										<img
											data-src='https://d1amesytz4ny5q.cloudfront.net/fit-in/800x600/Members/JohnJoseph/John%20Joseph%20Profile.png'
											alt='john'
										/>
										<img
											data-src='https://d1amesytz4ny5q.cloudfront.net/fit-in/800x600/Members/NickPags/Nick%20Pags%20Profile.png'
											alt='nick'
										/> */}
										<img data-src={aaronProfile} alt='aaron' />
										<img data-src={johnProfile} alt='john' />
										<img data-src={nickProfile} alt='nick' />
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
										// controls
										playsInline
										data-autoplay
										muted
										loop
										style={{ opacity: '0.6' }}>
										{/* <source data-src={videos.mediaVideoUrl2720} /> */}
										<source data-src={mediaVideo} />
									</video>

									<div className='a4-header' id='home-header'>
										<Link to='/media' onClick={toTop}>
											<h1>The Cache</h1>
											<h2>
												“I cannot teach anybody anything. I can only make them
												think.”
											</h2>
											<h2>― Socrates</h2>
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
										// controls
										playsInline
										data-autoplay
										muted
										loop>
										{/* <source data-src={videos.contactVideoUrl720} /> */}{' '}
										<source data-src={contactVideo} />
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
