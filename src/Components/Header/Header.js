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
		window.scrollTo(0, 0);
	};

	const toTopSmooth = () => {
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
				<Link to='/' onClick={toTop}>
					<img
						src='https://thechambercollective.s3.us-east-2.amazonaws.com/Logos/The+Chamber+Logo+01152021.png'
						alt='nucalm-logo'
						className='header-logo'></img>
				</Link>
			</div>
			<nav
				className='side-nav'
				id={open ? 'open' : 'closed'}
				onClick={toggleSide}>
				<div className='sidebar-links'>
					<Link to='/' onClick={toTop}>
						Home
					</Link>
					<Link to='/about' onClick={toTop}>
						<span
							id={/about/.test(window.location.href) ? 'active' : 'not-active'}>
							About
						</span>
					</Link>
					<Link to='/members' onClick={toTop}>
						<span
							id={
								/members/.test(window.location.href) ? 'active' : 'not-active'
							}>
							Members
						</span>
					</Link>
					<Link to='/media' onClick={toTop}>
						<span
							id={/media/.test(window.location.href) ? 'active' : 'not-active'}>
							The Cache
						</span>
					</Link>
					<Link to='/services' onClick={toTop}>
						<span
							id={
								/services/.test(window.location.href) ? 'active' : 'not-active'
							}>
							Services
						</span>
					</Link>
					<Link to='/contact' onClick={toTop}>
						<span
							id={
								/contact/.test(window.location.href) ? 'active' : 'not-active'
							}>
							Contact
						</span>
					</Link>
				</div>
			</nav>
			<div className='header-right' onClick={toTop}>
				<Link to='/about'>
					<span
						id={/about/.test(window.location.href) ? 'active' : 'not-active'}>
						About
					</span>
				</Link>
				<Link to='/members' onClick={toTop}>
					<span
						id={/members/.test(window.location.href) ? 'active' : 'not-active'}>
						Members
					</span>
				</Link>
				<Link to='/media' onClick={toTop}>
					<span
						id={/media/.test(window.location.href) ? 'active' : 'not-active'}>
						The Cache
					</span>
				</Link>
				<Link to='/services' onClick={toTop}>
					<span
						id={
							/services/.test(window.location.href) ? 'active' : 'not-active'
						}>
						Services
					</span>
				</Link>
				<Link to='/contact' onClick={toTop}>
					<span
						id={/contact/.test(window.location.href) ? 'active' : 'not-active'}>
						Contact
					</span>
				</Link>
			</div>
			{/* <h1 className='nav-to-top' onClick={toTopSmooth}>
				&uArr;
			</h1> */}
		</header>
	);
};

export default Header;
