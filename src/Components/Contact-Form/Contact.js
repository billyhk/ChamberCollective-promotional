import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './ContactForm.scss';

const Contact = () => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [error, setError] = useState(false);
	/*
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [checked, setChecked] = useState(false);

	// format the date for user submission
	const dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const today = new Date().toLocaleDateString('en-US', dateOptions);

	const legalConsentOptions = {
		consent: {
			consentToProcess: true,
		},
	};

	const initialContactState = {
		submittedAt: today,
		fields: [],
		legalConsentOptions,
	};
	const [formData, setFormData] = useState(initialContactState);
	const handleChange = (e) => {
		e.persist();

		setFormData({
			...formData,
			fields: [
				{
					name: 'name',
					value: name,
				},
				{ name: 'email', value: email },
				{ name: 'newsletter', value: checked },
			],
			legalConsentOptions,
		});
	};
	 */
	const handleSubmit = (e) => {
		e.preventDefault();
		/*
		 */
		// console.log(formData);
		setShowSuccess(false);
		setTimeout(() => {
			setShowSuccess(true);
		}, 1500);
		/*
	const url =
		'https://api.hsforms.com/submissions/v3/integration/submit/9106681/63a46aea-85e2-444b-9da6-a9608c6ab835';
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify(formData),
	})
		.then((res) => {
			if (res) {
				res.json();
				setShowSuccess(true);
			} else {
				setError(true);
			}
		})
		.catch(console.error);
	*/
	};

	return (
		<div className='contact-form' id='contact-form'>
			<h1>Contact</h1>
			<h2>Community is the foundation of the Chamber Collective.</h2>
			<h2>Contact us, and let us know how we can help.</h2>
			<div>
				<ContactForm
					handleSubmit={handleSubmit}
					/*
			handleChange={handleChange}
			name={name}
			setName={setName}
			setEmail={setEmail}
			setChecked={setChecked}
			*/
				/>
			</div>
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
	);
};

export default Contact;
