import './Contact.scss';
import { useState, useEffect } from 'react';

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
				<div className='a1-header' id='contact-header'>
					<h1>Connect with the Chamber</h1>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='contact-header'>
					<h1>Contact</h1>
					<h2>Community is the foundation of the Chamber Collective.</h2>
					<h2>Contact us, and let us know how we can help.</h2>
					<form className='contact-form-form' onSubmit={handleSubmit}>
						<div className='contact-form-input-container'>
							<input
								id='name'
								name='name'
								type='text'
								placeholder='Name'
								required
							/>
							<input
								id='email'
								name='email'
								type='email'
								placeholder='Email'
								required
							/>
						</div>
						<div className='checkbox-container'>
							<label htmlFor='newsletter'>
								Check this box to opt-in for our latest news and events.
							</label>
							<input id='newsletter' type='checkbox' name='newsletter' />
						</div>
						<div className='button-container'>
							<input
								type='submit'
								className='submit-button'
								value='Learn More'
							/>
						</div>
					</form>
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
		</main>
	);
};

export default Contact;
