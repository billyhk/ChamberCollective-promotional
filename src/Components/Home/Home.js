import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import $ from 'jquery';
window.jQuery = $;
require('jquery-scrollify');

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		// $(function () {
		// 	$.scrollify({
		// 		section: 'article',
		// 		easing: 'easeOutExpo',
		// 		scrollSpeed: 1100,
		// 		// offset: 0,
		// 		overflowScroll: true,
		// 		updateHash: true,
		// 		touchScroll: false,
		// 		setHeights: true,
		// 	});
		// });
	}, []);

	const toTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			// behavior: 'smooth',
		});
	};

	return (
		<main className='home-container'>
			<article className='a1' id='opening-panel'>
				<div className='a1-header' id='home-header'>
					<h1>The Community</h1>
					<h2>A partnership about growth and recovery</h2>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='home-header'>
					<Link to='/about' onClick={toTop}>
						<h1>About</h1>
						<h2>
							To bring together high-performing individuals who will make a
							positive impact on the world through personal discovery and
							growth.
						</h2>
					</Link>
				</div>
			</article>
			<article className='a3'>
				<div className='a3-header' id='home-header'>
					<Link to='/members' onClick={toTop}>
						<h1>Members</h1>
						<h2>
							We're a collective of individuals, athletes, sons, daughters,
							hi-performers, entrepreneurs, moms, dads, musicians.
						</h2>
					</Link>
				</div>
			</article>
			<article className='a4'>
				<div className='a4-header' id='home-header'>
					<Link to='/media' onClick={toTop}>
						<h1>The Cache</h1>
						<h2>The latest media on what our members have been up to.</h2>
					</Link>
				</div>
			</article>
			<article className='a5'>
				<div className='a5-header' id='home-header'>
					<Link to='/services' onClick={toTop}>
						<h1>The Nu Standard of Service</h1>
						<h2>
							Explore personal and business wellness solutions offered by The
							Chamber.
						</h2>
					</Link>
				</div>
			</article>
		</main>
	);
};

export default Home;
