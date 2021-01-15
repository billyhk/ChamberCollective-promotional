import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import About from './Components/About/About';
import Media from './Components/Media/Media';
import Members from './Components/Members/Members';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

import ContactForm from './Components/Contact-Form/Contact';

import $ from 'jquery';
window.jQuery = $;
require('jquery-scrollify');

const App = () => {
	useEffect(() => {
		$(function () {
			$.scrollify({
				section: 'article',
				// easing: 'easeOutExpo',
				scrollSpeed: 850,
				offset: 0,
				overflowScroll: false,
				updateHash: true,
				touchScroll: true,
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
					<Route exact path='/about' component={About} />
					<Route exact path='/media' component={Media} />
					<Route exact path='/members' component={Members} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/services' component={Services} />
				</Switch>

				{/* <Route
					path='*'
					render={() => {
						return <ContactForm />;
					}}
				/> */}
			</main>
			{/* <Route
				path='*'
				render={() => {
					return <Footer />;
				}}
			/> */}
		</div>
	);
};

export default App;
