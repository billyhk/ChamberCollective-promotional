import { useEffect } from 'react';

const MemberNick = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className='member-nick-container'>
			<article className='a1'>
				<div className='a1-header' id='member-nick-header'>
					<h1>Nick Pags</h1>
					<h2>Coach, Speaker, Creator of Project Limitless</h2>
				</div>
			</article>
			<article className='a2'>
				{' '}
				<div className='a2-header' id='member-nick-header'>
					<img src='' alt='nick-profile'></img>
					<p>
						Nick Pags is a motivational speaker and thought leader, mindset and
						emotional intelligence coach, consultant, Founding Theragun Master
						Trainer, and a lululemon Ambassador. While serving as a top
						contributor to the fitness industry, he is also laser focused on the
						community around him where he aims to inspire and educate. Nick has
						been working in the fitness industry for over 10 years. As a
						certified Behavioral Change Specialist and Weight Management
						Specialist, Nick’s training is fundamentally wholistic.
					</p>
					<h2>
						He focuses on how behaviors generate habits, and habits form lives.
					</h2>
				</div>
			</article>
			<article className='a3'>
				{' '}
				<div className='a3-header' id='member-nick-header'>
					<p>
						Nick’s online mindset coaching business has serviced groups and
						individuals all over the world. He has coached hundreds of
						entrepreneurs in building successful businesses over the last 2
						years. He created his podcast “LESSGOO” in March of 2019, with a
						mission of educating, motivating, and inspiring individuals to
						create dynamic change in their lives. Nick’s signature 8-week
						mindset coaching program, Project Limitless, kicks off another
						cohort in mid February. You can go to the link in his Instagram bio
						to apply.
					</p>
					<a href='https://nucalm.com/' target='blank'>
						Click here to learn more about NuCalm
					</a>
					<a href='https://nucalm.com/store/' target='blank'>
						Proceed to the NuCalm Shop
					</a>
				</div>
			</article>
		</main>
	);
};

export default MemberNick;
