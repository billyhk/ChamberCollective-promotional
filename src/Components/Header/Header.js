import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../Component-Images/NuCalm_Logo.png';

const Header = () => {
	/*
	STICKY HEADER w/ Responsive Animation
	https://codepen.io/rikschennink/pen/yZYbwQ?editors=0010
	 */

	const debounce = (fn) => {
		let frame;
		return (...params) => {
			if (frame) {
				cancelAnimationFrame(frame);
			}
			frame = requestAnimationFrame(() => {
				fn(...params);
			});
		};
	};
	const storeScroll = () => {
		document.documentElement.dataset.scroll = window.scrollY;
	};
	document.addEventListener('scroll', debounce(storeScroll), { passive: true });
	storeScroll();

	const [open, setOpen] = useState(false);

	const toggleSide = () => {
		setOpen(!open);
	};

	return (
		<header className='header-container'>
			<div className='header-left'>
				<p className='hamburger-icon' onClick={toggleSide}>
					&#9776;
				</p>
				<img src={logo} alt='nucalm-logo' className='header-logo'></img>
			</div>
			<nav
				className='side-nav'
				id={open ? 'open' : 'closed'}
				onClick={toggleSide}>
				<div class='sidebar-links'>
					<Link to='#'>About</Link>
					<Link to='#'>Members</Link>
					<Link to='#'>The Cache</Link>
					<Link to='#'>Services</Link>
					<Link to='#'>Contact</Link>
				</div>
			</nav>
			<div className='header-right'>
				<Link to='#'>About</Link>
				<Link to='#'>Members</Link>
				<Link to='#'>The Cache</Link>
				<Link to='#'>Services</Link>
				<Link to='#'>Contact</Link>
			</div>
		</header>
	);
};

export default Header;
