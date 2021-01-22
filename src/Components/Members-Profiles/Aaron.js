import { useEffect } from 'react';
import './Aaron.scss';

import ReactFullpage from '@fullpage/react-fullpage';

import { videos } from '../../videoData';


const MemberAaron = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='member-aaron-container'>
						<ReactFullpage.Wrapper>
							<div class='section'>
								<article className='a1'>
									<video
										className='title-video'
										alt='Video of Aaron'
										playsInline
										data-autoplay
										muted
										loop>
										<source data-src={videos.aaronNewIntro720} />
									</video>
									{/* <div className='a1-header' id='member-aaron-header'>
										<h1>Aaron Drogoszewski</h1>
									</div> */}
								</article>
							</div>
							<div class='section'>
								<article className='a2'>
									<div className='a2-header' id='member-aaron-header'>
										<h2>
											There’s only one technology on the planet with a patent to
											minimize stress without pharmaceuticals.
											<br />
											<br />
											That technology is the NuCalm system.
										</h2>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a3'>
									<div className='a3-header' id='member-aaron-header'>
										<p>
											Stress isn’t a feeling…it’s a cocktail of biochemicals
											released by our 40-million years evolved “Reptilian
											Brain”. Independent of “feeling” stressed, these hormones
											and neurotransmitters were beautifully designed to keep us
											safe in the face of danger by:
										</p>
										<br />
										<ul className='aaron-list'>
											<li>Heightening our senses</li>
											<li>Increasing heart and respiratory rate</li>
											<li>
												Shifting blood flow away from internal organs and
												towards our limbs
											</li>
											<li>
												Strongly influencing all non-vital processes
												(Consumption, urination, drive to procreate, etc.) to
												shut down, or at least take a back seat for a while
											</li>
										</ul>
										<p>
											Unfortunately, our Reptilian Brain has a 34-million-year
											head start over our 6 million years evolved “rational
											brain”, the Frontal and Prefrontal Cortex. While the
											“rational brain” has succeeded at making us human
											beings….it fails miserably at deciphering true
											life-threating danger from:
										</p>
										<ul className='aaron-list'>
											<li>Financial uncertainty</li>
											<li>Social unrest</li>
											<li>
												Interpersonal conflict with a spouse, co-worker, friend,
												or stranger
											</li>
											<li>Prolonged bursts of strenuous exercise and more</li>
										</ul>
										<p>
											The reptilian brain wastes no time stepping in for the
											shortcomings of our “rational” brain in these moments and
											does what it had been doing for 34 million years
											prior…fear, stress, and anxiety were once paramount to our
											survival when confronted with true danger.
										</p>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a4'>
									<div className='a4-header' id='member-aaron-header'>
										{' '}
										<p>
											Seeing as you “can’t teach an old dog new tricks”… the
											portion of our brains with “veteran status” proceeds to
											then signal the production of all the biochemicals once
											needed in acute scenarios for true safety…to cope with
											every issue raging from a marginal annoyance all the way
											through what it was originally intended for.
										</p>
										<p>
											Where trouble pokes it’s reptilian head into paradise, is
											when we consider how these hormones and neurotransmitters
											perfectly crafted to keep us alive in acute bursts,
											manifest in a much different response when they are
											chronically, and habitually called to “action”:
										</p>
										<ul>
											<li>Compromised sleep</li>
											<li>
												Decreased mental and physical performance outcomes
											</li>
											<li>Impaired healing (wound resolution or athletic)</li>
											<li>Affected decision making and personality</li>
											<li>Weakened immune function</li>
											<li>Proliferation of multiple diseases</li>
											<li>Premature death</li>
										</ul>
										<p>
											Feelings aren’t facts. The fact is that stress is the
											greatest disruptor of our performance and quality of life
											(whether you “feel it” or not). You cannot think or will
											your way out of a 40-million year physiological response,
											as it’s too deeply engrained in our history. The only way
											to quickly, predictably, and effectively disrupt the great
											disruptor with this much history is to utilize the
											technology of the future, built through 20-years of
											neuroscientific research.
										</p>
										<h2>
											Over 2,000 apps currently exist to help people relax.
											Unfortunately, relaxing and recovering are far from
											synonymous.
										</h2>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a5'>
									<div className='a5-header' id='member-aaron-header'>
										{' '}
										<h2>
											NuCalm is the world’s only patented system for minimizing
											stress without pharmaceuticals.
										</h2>
										<p>What NuCalm is NOT:</p>
										<ul className='aaron-list'>
											<li>A meditation app</li>
											<li>A Binaural beat app</li>
											<li>A new company / technology</li>
											<li>
												Created by former marketing or sales professionals
											</li>
											<li>Void of research</li>
											<li>Dependent on loose correlative research</li>
											<li>Effective for some but not others</li>
											<li>Less effective over time due to adaptation</li>
										</ul>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a6'>
									<div className='a6-header' id='member-aaron-header'>
										{' '}
										<p>What NuCalm IS:</p>
										<ul className='aaron-list'>
											<li>
												The creation of a 20-year neuroscience company, designed
												by neuroscientists, physicists, mathematicians, and
												naturopaths
											</li>
											<li>
												A comprehensive 3-part system addressing all variables
												in the stress response
											</li>
											<li>
												Owner of the world’s only patent to minimize stress and
												improve sleep quality without pharmaceuticals
											</li>
											<li>
												The world’s only “non-linear oscillating binaural beat"
											</li>
											<li>
												Researched by the world’s top scientists, including
												Harvard Medical School, and NASA
											</li>
											<li>
												The “secret weapon” of over 49 professional athletic
												teams, including the Golden State Warriors, Philadelphia
												Eagles, Chicago Blackhawks, Premiere League Soccer, over
												15 international Olympic teams, multiple UFC champions
												and more
											</li>
											<li>
												Successfully utilized by multiple branches of the United
												States military, and special Ops for both active combat
												applications, as well as the transition of veterans back
												into “civilian life”, as well as the FBI
											</li>
											<li>
												Predictably effective for all demographics and
												manifestations of the stress response from those
												suffering from PTSD, to athletic stress/recovery, to
												patents and business professionals seeking stress
												reduction, or improved sleep quality
											</li>
										</ul>
									</div>
								</article>{' '}
							</div>
							<div class='section'>
								<article className='a7'>
									<div className='a7-header' id='member-aaron-header'>
										{' '}
										<h2>There are thousands of options to help you relax.</h2>
										<p>
											But if you are looking to recover, minimize stress,
											improve sleep quality, and optimize performance:
										</p>
										<ul>
											<h2>There are no competitors...</h2>
											<h2>There’s only one choice...</h2>
											<h2>There’s only NuCalm.</h2>
										</ul>
										<br />
										<a
											className='aaron-anchor'
											href='https://nucalm.com/'
											target='blank'>
											Click here to learn more about NuCalm
										</a>{' '}
										<br />
										<a
											className='aaron-anchor'
											href='https://www.shareasale.com/r.cfm?b=1598116&u=2700721&m=100346&urllink=&afftrack='
											target='blank'>
											Proceed to the NuCalm Shop
										</a>
									</div>
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

export default MemberAaron;
