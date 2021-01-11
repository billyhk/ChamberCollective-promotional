import React, { useEffect } from 'react';
import './App.scss';
import $ from 'jquery';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Footer from ''

window.jQuery = $;
require('jquery-scrollify');

const App = () => {
  
	useEffect(() => {
		$(function () {
			$.scrollify({
				section: 'article',
				easing: 'easeOutExpo',
				scrollSpeed: 1100,
				offset: 0,
				overflowScroll: false,
				updateHash: true,
				touchScroll: false,
				setHeights: true,
			});
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div className='App-Container'>
			<Header />
			<Home />
		</div>
	);
};

export default App;
