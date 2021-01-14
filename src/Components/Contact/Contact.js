import './Contact.scss';
import { useEffect } from 'react';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
