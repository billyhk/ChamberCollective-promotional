import { useEffect } from 'react';

import './Media.scss';
import NYT_Logo from '../../Component-Images/NYT_Logo.png';
import FastCo_Logo from '../../Component-Images/FastCo_Logo.png';
import GMA_Logo from '../../Component-Images/GMA_Logo.png';
import Today_Show_Logo from '../../Component-Images/Today_Show_Logo.png';
import WS_Logo from '../../Component-Images/WS_Logo.png';

import ContactForm from '../Contact-Form/Contact';

import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

const mediaVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/media+2X.mp4';
const mediaVideoUrl2 =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/media+XYZ.mp4';

const Media = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='media-container'>
						<ReactFullpage.Wrapper>
							<div className='section'>
								<article className='a1'>
									<video
										className='title-video'
										alt='media video'
										// controls
										autoPlay
										muted
										loop
										style={{ opacity: '0.6' }}>
										<source data-src={mediaVideoUrl2} />
									</video>
									<div className='a1-header' id='media-header'>
										<h1>The Cache</h1>
										<h2>The latest media and insights from our team</h2>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a2'>
									<div className='a2-header' id='media-header'>
										<h1>Be In The Know</h1>
										<ul className='logos-list'>
											<li className='logos-item'>
												<img
													className='logos-image'
													src={NYT_Logo}
													alt='New York Times logo'
												/>
											</li>
											<li className='logos-item'>
												<img
													className='logos-image'
													d
													src={WS_Logo}
													alt='Wall Street Journal logo'
												/>
											</li>
											<li className='logos-item'>
												<img
													className='logos-image'
													src={FastCo_Logo}
													alt='Fast Company logo'
												/>
											</li>
											<li className='logos-item'>
												<img
													className='logos-image'
													src={Today_Show_Logo}
													alt='Today Show logo'
												/>
											</li>
											<li className='logos-item'>
												<img
													className='logos-image'
													src={GMA_Logo}
													alt='GMA logo'
												/>
											</li>
										</ul>

										<h2>
											Get your Red Carpet, VIP access into the beautiful minds
											of The Chamber Collective here.
										</h2>
										<h2>
											Podcasts, Blogs, Vlogs, and articles written by several
											members of The Chamber Collective will be shared here, and
											updated frequently.
										</h2>
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

export default Media;
