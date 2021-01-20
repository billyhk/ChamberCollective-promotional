import { useEffect } from 'react';
import './JohnJoseph.scss';
import { videos } from '../../videoData';

import ReactFullpage from '@fullpage/react-fullpage';

const MemberJohn = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='member-john-container'>
						{' '}
						<ReactFullpage.Wrapper>
							<div class='section'>
								<article className='a1'>
									{/* <div className='a1-header' id='member-john-header'>
										<h1>John Joseph</h1>
									</div> */}
									<video
										className='title-video'
										alt='Video of Aaron'
										playsInline
										data-autoplay
										muted
										loop>
										<source data-src={videos.johnNewIntro720} />
									</video>
								</article>
							</div>
							<div class='section'>
								<article className='a2'>
									<div className='a2-header' id='member-john-header'>
										{' '}
										<p className='column-2'>
											When you’re born into a broken home, with a physically
											abusive, alcoholic father…
											<br />
											<br />
											“Saved” by spending 6 years living with equally abusive
											foster families…
											<br />
											<br />
										</p>
										<p className='column-2'>
											Homeless and running wild on the dangerous streets of
											1970’s NYC…
											<br />
											<br />
											Incarcerated, and addicted to drugs by the age of 14…
											<br />{' '}
										</p>
										<h1>It’s an uphill battle to be motivated…</h1>
										<p className='column-1'>
											...and outright impossible to stay motivated enough to
											course-correct
											<br /> like a battleship cutting a hard 90-degree angle
											turn, ending up:{' '}
										</p>
										<ul>
											<li>
												{' '}
												A guest, and frequently discussed name on the Joe Rogan
												Experience podcast
											</li>
											<li>
												{' '}
												Touring the world several times over as the front man in
												a band credited with influencing some of the biggest
												names in the music industry
											</li>
											<li>
												{' '}
												A successful, and celebrated author of more than 4
												books, and multiple screenplays
											</li>
											<li>
												{' '}
												Completing over 14 Ironman triathlon competitions
											</li>
											<li> Featured in Vice magazine numerous times</li>
											<li>
												{' '}
												Asked to speak to fortune-500 CEO’s, at-risk youth, and
												lifelong prison inmates alike on the methods of beating
												back the “enemy mind” with a stick.
											</li>
										</ul>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a3'>
									<div className='a3-header' id='member-john-header'>
										<h1>Nope, motivation won’t cut it.</h1>
										<p className='column-2'>
											&emsp;Fortunately, when you have discipline, you continue
											putting one foot in front of the other long after the
											motivation has moved on. John Joseph has proven beyond a
											shadow of a doubt that anything in your life is possible
											through discipline followed by purposeful practice,
											action, and a Positive Mental Attitude.
											<br />
											&emsp;Winston Churchill said, “If you’re going through
											hell... keep going.” John Joseph went through hell to
											become an internationally recognized musician, author, and
											athlete. <br />
											Not only did he survive... <b>he thrived.</b> <br />
											<br />
											&emsp;John has done a lot of things with his life, but
											he’s not a motivational speaker, or a coach, because
											motivation is crap. John came into this world, with
											nothing but himself. He fought the malfunction, and saw
											through the Maya. He opened his mind, because he knew he
											wasn’t afraid of what he was going to find.
											<br />
											<br />
											&emsp;John changed his perspective, and his world. He’s
											changed the world for countless people who were ready to
											put in the work, while simultaneously identifying those
											who were not. <br />
											<br />
											&emsp;People looking for “motivation” become “Askholes”,
											and he ain’t wasting a breath on them, or any of their
											kind. If you’re looking to <b>get yourself on track</b>,
											and <b>maximize your potential</b>, you first need
											discipline.
											<br />
											Then you need...{' '}
										</p>
										<h2>
											<a
												href='https://www.johnjosephdiscipline.com/'
												target='blank'
												className='john-anchor'>
												JohnJosephDiscipline.com
											</a>
										</h2>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a4'>
									<div className='a4-header' id='member-john-header'>
										<h1>NuCalm</h1>

										<p className='column-1'>
											John has been working with Aaron Drogoszewski as his
											trainer, corrective exercise specialist, and massage
											therapist for over 10 years. When Aaron, a 20+ year
											fitness professional, educator for the National Academy of
											Sports Medicine and LMT, opened RēCOVER in 2018; he did so
											with guys like John in mind.
											<br />
											<br />{' '}
										</p>

										<p className='column-1'>
											Becoming a high performer requires discipline, and hard
											work.
											<br /> <b>STAYING</b> a high performer requires balance.{' '}
										</p>
										<ul>
											<li>
												Muscles and joints don’t perform optimally when they’re
												banged up.
											</li>
											<li>
												Muscles, and tendons don’t repair properly with poor
												sleep
											</li>
											<li>
												Focus, creativity, reaction time, and decision-making
												fall apart with elevated stress
											</li>
											<li>
												Elevated stress compromises immune function over time,
												and sleep quality instantly
											</li>
										</ul>
										<p className='column-1'>
											RēCOVER offered a lot of cutting-edge technologies to
											create the balance John needed athletically, cognitively,
											creatively, and more. Independent of the multiple items
											defining John’s high performer approach to life there was
											only <b>one</b> that fit the profile...
										</p>
										<h2>100% of the time</h2>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a5'>
									<div className='a5-header' id='member-john-header'>
										<p className='column-1'>
											NuCalm Is the world’s only patented technology to{' '}
											<b>minimize stress</b> and <b>improve sleep quality</b>{' '}
											without drugs. It isn’t a supplement, or meditation app.
											It doesn’t put any foreign substances into your body, or
											utilize any animal products, or bi-products. What it does
											do, is create the systemic balance needed to burn your
											candle at both ends, without getting burned out. It keeps
											you up on your grind, without the fear of that grind
											eventually grinding you up with it.
										</p>
										<ul>
											<li>2-3 hours of restorative sleep in 30-minutes </li>
											<li>Accelerates athletic recovery </li>
											<li>Increases HRV for performance and immune strength</li>
											<li>Boosts ATP production for energy</li>
											<li>
												Improved neuronal coherence for cognition, mental
												acuity, and creativity
											</li>
											<li>
												Shuts down the “monkey mind” or “enemy mind” (minimizing
												the need to beat it back with a stick)
											</li>
										</ul>
										<p className='column-2'>
											The <i>“No Pain, No Gain”</i> approach might work for a
											few beginning their journey to high performance, but on a
											long enough timeline it works for no one who wants to stay
											on top of their game, career, or life.
											<br />
											&emsp;Stress isn’t a feeling, it’s a physiological
											response to strain, excessive exercise, poor sleep,
											negativity, and 2020 all have one thing in common: <br />
											They all increase the same hormones and neurotransmitters
											designed to keep us safe/alive in short bursts. Without
											systemic balance, the balloon <b>pops</b>... and the show
											is over.
										</p>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a6'>
									<div className='a6-header' id='member-john-header'>
										<h2>Used by:</h2>
										<ul>
											<li>Over 49 professional athletic teams</li>
											<li>
												The Golden State Warriors, Philadelphia Eagles, and
												Chicago Blackhawks
											</li>
											<li>
												Dozens of high level through champion, and “Champ/Champ”
												UFC fighters
											</li>
											<li>Premiere League Soccer</li>
											<li>United States Military Special Forces</li>
											<li>SOCOM</li>
											<li>FBI</li>
											<li>Tony Robbins</li>
											<li>Ben Greenfield</li>
											<li>*and many more</li>
										</ul>
										<p className='column-1'>
											NuCalm is the ONLY system in the world that can legally
											say it can create balance where it’s needed...
											<h2>no matter who you are, or what you do.</h2>
										</p>
										<a
											className='john-anchor'
											href='https://nucalm.com/'
											target='blank'>
											Click here to learn more about NuCalm
										</a>{' '}
										<br />
										<a
											className='john-anchor'
											href='http://shareasale.com/r.cfm?b=1598116&u=2693400&m=100346'
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

export default MemberJohn;
