import { useState, useEffect } from 'react';
import './Contact.scss';

import ContactForm from '../Contact-Form/Contact';
import '../Contact-Form/ContactForm.scss';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [showSuccess, setShowSuccess] = useState(false);
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccess(false);
		setTimeout(() => {
			setShowSuccess(true);
		}, 1500);
	};
	return (
		<main className='contact-container'>
			<article className='a1'>
				<video
					className='title-video'
					alt='Contact Video'
					autoPlay
					muted
					loop
					src='https://thechambercollective.s3.us-east-2.amazonaws.com/Cache%2BContact/Videos/contact+video.mp4'></video>
				<div className='a1-header' id='contact-header'>
				
					<h1>Connect with the Chamber</h1>
				</div>
			</article>
			<article className='a-contact'>
				<ContactForm />
			</article>
		</main>
	);
};

export default Contact;
