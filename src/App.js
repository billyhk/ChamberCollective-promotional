import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import $ from 'jquery';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Media from './Components/Media/Media';
import Members from './Components/Members/Members';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

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
				overflowScroll: true,
				updateHash: true,
				touchScroll: false,
				setHeights: true,
			});
		});
	}, []);

	return (
		<div className='app-container'>
			<Route
				path='*'
				render={() => {
					return <Header />;
				}}
			/>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/About' component={About} />
					<Route exact path='/Media' component={Media} />
					<Route exact path='/Members' component={Members} />
					<Route exact path='/Contact' component={Contact} />
					<Route exact path='/Services' component={Services} />
				</Switch>
				
			</main>
			<Route
				path='*'
				render={() => {
					return <Footer />;
				}}
			/>
		</div>
	);
};

export default App;
