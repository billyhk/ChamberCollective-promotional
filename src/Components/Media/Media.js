import { useEffect } from 'react';

import './Media.scss';

import NYT_Logo from '../../Component-Images/logos-white/NYT_Logo.png';
import FastCo_Logo from '../../Component-Images/logos-white/FastCo_Logo.png.png';
import GMA_Logo from '../../Component-Images/logos-white/GMA_Logo.png.png';
import Today_Show_Logo from '../../Component-Images/logos-white/Today_Show_Logo.png';
import WSJ_Logo from '../../Component-Images/logos-white/WS_Logo.png';

import ContactForm from '../Contact-Form/Contact';

import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

import { videos } from '../../videoData';
import mediaVideo from '../../resized-videos/media-XYZ-720.mov';

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
										playsInline
										data-autoplay
										muted
										loop
										style={{ opacity: '0.6' }}>
										{/* <source data-src={videos.mediaVideoUrl2720} /> */}
										<source data-src={mediaVideo} />
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
											<a
												// href='https://thechambercollective.s3.us-east-2.amazonaws.com/PDFs/NYT+-+How+to+Recover+Like+an+Elite+Athlete+-+The+New+York+Times.pdf'
												href='https://drive.google.com/file/d/1zcN4BGvGTG4MC9H_MFUTqXjSBHlebRQ7/view?usp=sharing'
												target='blank'>
												<li className='logos-item'>
													<img
														className='logos-image'
														src={NYT_Logo}
														alt='New York Times logo'
													/>
												</li>
											</a>
											<a
												// href='https://thechambercollective.s3.us-east-2.amazonaws.com/PDFs/WSJ+-+ReCOVER_WSJ_8.9.18.pdf'
												href='https://drive.google.com/file/d/1oJCuKXlp8W1v0kTV35Oey4IxMens3lKo/view?usp=sharing'
												target='blank'>
												<li className='logos-item'>
													<img
														className='logos-image'
														d
														src={WSJ_Logo}
														alt='Wall Street Journal logo'
													/>
												</li>
											</a>
											<a
												// href='https://thechambercollective.s3.us-east-2.amazonaws.com/PDFs/Fast+Co+-+Can+this+biohacking+relaxation+center+make+you+more+productive_.pdf'
												href='https://drive.google.com/file/d/1SYtmy3XdvzKZxx4IphC7746_ApfB-0-8/view?usp=sharing'
												target='blank'>
												<li className='logos-item'>
													<img
														className='logos-image'
														src={FastCo_Logo}
														alt='Fast Company logo'
													/>
												</li>
											</a>
											<a
												href='https://www.today.com/video/spring-reboot-craig-melvin-tries-therapies-for-relaxation-1486236739560'
												target='blank'>
												<li className='logos-item'>
													<img
														className='logos-image'
														src={Today_Show_Logo}
														alt='Today Show logo'
													/>
												</li>
											</a>
											<a
												// href='https://thechambercollective.s3.us-east-2.amazonaws.com/PDFs/GMA+-+Is+recovery+the+new+cardio_+How+taking+time+for+yourself+is+taking+over+fitness+_+GMA.pdf'
												href='https://drive.google.com/file/d/1aoSZAp5ypGHg__ZrunHddW3svu8fyggn/view?usp=sharing'
												target='blank'>
												<li className='logos-item'>
													<img
														className='logos-image'
														src={GMA_Logo}
														alt='GMA logo'
													/>
												</li>
											</a>
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
