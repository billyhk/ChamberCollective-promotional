import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './ContactForm.scss';

const Contact = () => {
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
		<article className='a-contact'>
			<div className='a-contact-header' id='contact-form-header'>
				<h1>Contact</h1>
				<h2>Community is the foundation of the Chamber Collective.</h2>
				<h2>Contact us, and let us know how we can help.</h2>
				<ContactForm handleSubmit={handleSubmit} />
				{!error && showSuccess && (
					<h2 className='success-msg'>
						Thank You! Your information has been received!
					</h2>
				)}
				{error && (
					<h2 className='error-msg'>
						We're Sorry! There was a problem. Please try again.
					</h2>
				)}
			</div>
		</article>
	);
};

export default Contact;
