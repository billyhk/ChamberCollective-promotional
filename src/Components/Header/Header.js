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

	const toTop = () => {
		window.scrollTo({
			top: 100,
			left: 100,
			behavior: 'smooth',
		});
	};

	return (
		<header className='header-container'>
			<div className='header-left'>
				<p className='hamburger-icon' onClick={toggleSide}>
					&#9776;
				</p>
				<Link to='/'>
					<img src={logo} alt='nucalm-logo' className='header-logo'></img>
				</Link>
			</div>
			<nav
				className='side-nav'
				id={open ? 'open' : 'closed'}
				onClick={toggleSide}>
				<div className='sidebar-links'>
					<Link to='/about'>About</Link>
					<Link to='/members'>Members</Link>
					<Link to='/media'>The Cache</Link>
					<Link to='/services'>Services</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</nav>
			<div className='header-right'>
				<Link to='/about'>About</Link>
				<Link to='members'>Members</Link>
				<Link to='/media'>The Cache</Link>
				<Link to='/services'>Services</Link>
				<Link to='contact'>Contact</Link>
			</div>
			<h1 class='nav-to-top' onClick={toTop}>
				&uArr;
			</h1>
		</header>
	);
};

export default Header;
