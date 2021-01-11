import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer-container'>
			{/* <hr className='footer-border-top' /> */}
			<footer className='bottom-footer'>
				<Link to='#'>About</Link>
				<Link to='#'>Members</Link>
				<Link to='#'>The Cache</Link>
				<Link to='#'>Services</Link>
				<Link to='#'>Contact</Link>
			</footer>
		</div>
	);
};

export default Footer;
