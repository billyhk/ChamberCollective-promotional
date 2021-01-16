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
										autoPlay
										muted
										loop>
										<source data-src={homeVideoUrl} />
									</video>
									<div className='a1-header' id='home-header'>
										<h1>The Community</h1>
										<h2>A partnership about growth and recovery</h2>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a2'>
									<div className='a2-header' id='home-header'>
										<Link to='/about' onClick={toTop}>
											<h1>About</h1>
											<h2>
												To bring together high-performing individuals who will
												make a positive impact on the world through personal
												discovery and growth.
											</h2>
										</Link>
									</div>
								</article>{' '}
							</div>
							<div className='section'>
								<article className='a3'>
									<div className='a3-header' id='home-header'>
										<Link to='/members' onClick={toTop}>
											<h1>Members</h1>
											<h2>
												We're a collective of individuals, athletes, sons,
												daughters, hi-performers, entrepreneurs, moms, dads,
												musicians.
											</h2>
										</Link>
									</div>
								</article>
							</div>
							<div className='section'>
								{' '}
								<article className='a4'>
									<div className='a4-header' id='home-header'>
										<Link to='/media' onClick={toTop}>
											<h1>The Cache</h1>
											<h2>
												The latest media on what our members have been up to.
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
