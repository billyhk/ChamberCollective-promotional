import './Contact.scss';
import NYC_Skyline from '../../Images/NYC_Skyline.png';

const Contact= () => {
	return (
		<main className='home-container'>
			<article className='a1' id="panel">
				<img src={NYC_Skyline}
					alt='#'
					className='a1-image' />
				<div className='a1-header'>
					<h1>Connect with the Chamber</h1>
				</div>
			</article>
			<article className='a2'>
                <h1>Contact</h1>
			</article>
		</main>
	);
};

export default Contact;