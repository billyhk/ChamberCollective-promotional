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
		</main>
	);
};

export default Contact;
