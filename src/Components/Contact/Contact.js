import { useState, useEffect } from 'react';
import './Contact.scss';

import ContactForm from '../Contact-Form/Contact';
import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

const contactVideoUrl =
	'https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/contact+video.mp4';

const Contact = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='contact-container'>
						<ReactFullpage.Wrapper>
							<div class='section'>
								<article className='a1'>
									<video
										className='title-video'
										alt='contact video'
										// controls
										autoPlay
										muted
										loop>
										<source data-src={contactVideoUrl} />
									</video>
									<div className='a1-header' id='contact-header'>
										<h1>Connect with the Chamber</h1>
									</div>
								</article>
							</div>
							<div class='section'>
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
export default Contact;
