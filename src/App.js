import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Footer from './Components/Footer/Footer';

import About from './Components/About/About';
import Media from './Components/Media/Media';
import Members from './Components/Members/Members';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

import MemberAaron from './Components/Members-Profiles/Aaron';
import MemberJohn from './Components/Members-Profiles/JohnJoseph';
import MemberNick from './Components/Members-Profiles/NickPags';

const fullPageKey = process.env.REACT_APP_FULLPAGE_KEY;

const App = () => {
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
					<Route exact path='/' component={Home} fullPageKey={fullPageKey} />
					<Route
						exact
						path='/about'
						component={About}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/media'
						component={Media}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/members'
						component={Members}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/contact'
						component={Contact}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/services'
						component={Services}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/members/aaron'
						component={MemberAaron}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/members/john'
						component={MemberJohn}
						fullPageKey={fullPageKey}
					/>
					<Route
						exact
						path='/members/nick'
						component={MemberNick}
						fullPageKey={fullPageKey}
					/>
				</Switch>
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
