import { useEffect } from 'react';
import './Services.scss';
import ContactForm from '../Contact-Form/Contact';

import '../Contact-Form/ContactForm.scss';

import ReactFullpage from '@fullpage/react-fullpage';

const Services = (fullPageKey) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='services-container'>
						<ReactFullpage.Wrapper>
							<div className='section'>
								<article className='a1'>
									<div className='a1-header' id='services-header'>
										<h1>Nu Solutions</h1>
										<h2>Personal and Enterprise Wellness Solutions</h2>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a2'>
									<div className='a2-header' id='services-header'>
										<h1>The Nu Standard of Service</h1>
										<h2>
											Historically, the world has always changed at a blinding
											pace.
											<br /> 2020 shifted the rate of change from blinding to
											explosive.
											<br />
											When the world changes this quickly, the need to evolve
											strategies for success becomes paramount. <br />
											NuCalm holds the world’s only patent for minimizing stress
											and improving sleep quality without pharmaceuticals.{' '}
											<br />
											You can now change... the game
											<br /> For those you service. <br />
											(and that will change their world in the best way, like
											never before)
										</h2>{' '}
										<a
											className='nick-anchor'
											href='shareasale.com/r.cfm?b=1598116&u=2693400&m=100346'
											target='blank'>
											Proceed to the NuCalm Shop
										</a>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a3'>
									<div className='a3-header' id='services-header'>
										<h1>The Nu Look of Wellness</h1>
										<h2>
											Effectively minimizing stress and improving the sleep
											quality of employees should be the #1 priority for any
											company, group, or brand who want to provide the best,
											increase productivity, reduce the number of sick days, and
											improve the bottom line.
											<br /> NuCalm holds the world’s only patent to do both
											without pharmaceuticals.
											<br /> It also improves energy, focus, mood, cognition,
											and mental acuity. <br />
											There really isn’t much to think about from here…..
											<br /> Other than how to get it to your team sooner than
											later.
										</h2>
									</div>
								</article>
							</div>
							<div className='section'>
								<article className='a-contact'>
									<ContactForm />
								</article>
							</div>
							<h1
								className='nav-to-top'
								onClick={() => fullpageApi.moveTo(1, 0)}>
								&uArr;
							</h1>
						</ReactFullpage.Wrapper>
					</main>
				);
			}}
		/>
	);
};
export default Services;
