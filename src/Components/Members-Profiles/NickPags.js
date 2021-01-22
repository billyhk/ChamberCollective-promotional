import { useEffect } from 'react';
import './NickPags.scss';
import { videos } from '../../videoData';

import ReactFullpage from '@fullpage/react-fullpage';

const MemberNick = ({ fullPageKey }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<ReactFullpage
			scrollingSpeed={1000}
			licenseKey={fullPageKey}
			render={({ fullpageApi }) => {
				return (
					<main className='member-nick-container'>
						{' '}
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
										<source data-src={videos.nickNewIntro720} />
									</video>
									{/* <div className='a1-header' id='member-nick-header'>
										<h1>Nick Pags</h1>
										<h2>Coach, Speaker, Creator of Project Limitless</h2>
									</div> */}
								</article>
							</div>
							<div class='section'>
								<article className='a2'>
									{' '}
									<div className='a2-header' id='member-nick-header'>
										<p>
											Nick Pags is a motivational speaker and thought leader,
											mindset and emotional intelligence coach, consultant,
											Founding Theragun Master Trainer, and a lululemon
											Ambassador. While serving as a top contributor to the
											fitness industry, he is also laser focused on the
											community around him where he aims to inspire and educate.
										</p>
										<p>
											Nick has been working in the fitness industry for over 10
											years. As a certified Behavioral Change Specialist and
											Weight Management Specialist, Nick’s training is
											fundamentally wholistic.
										</p>
										<h2>
											He focuses on how behaviors generate habits, and habits
											form lives.
										</h2>
									</div>
								</article>
							</div>
							<div class='section'>
								<article className='a3'>
									{' '}
									<div className='a3-header' id='member-nick-header'>
										<p>
											Nick’s online mindset coaching business has serviced
											groups and individuals all over the world. He has coached
											hundreds of entrepreneurs in building successful
											businesses over the last 2 years. He created his podcast
											“LESSGOO” in March of 2019, with a mission of educating,
											motivating, and inspiring individuals to create dynamic
											change in their lives.
										</p>
										<p>
											Nick’s signature 8-week mindset coaching program, Project
											Limitless, kicks off another cohort in mid February. You
											can go to the link in his Instagram bio to apply.
										</p>
										<br />
										<a
											className='nick-anchor'
											href='https://nucalm.com/'
											target='blank'>
											<strong>Click here to learn more about NuCalm</strong>
										</a>{' '}
										<br />
										<a
											className='nick-anchor'
											href='https://www.shareasale.com/r.cfm?b=1598116&u=2693400&m=100346'
											target='blank'>
											<strong>Proceed to the NuCalm Shop</strong>
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

export default MemberNick;
