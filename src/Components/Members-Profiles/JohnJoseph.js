import { useEffect } from 'react';
import './MembersProfiles.scss';

const MemberJohn = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='member-john-container'>
			<article className='a1'>
				<div className='a1-header' id='member-john-header'>
					<h1>John Joseph</h1>
					<p>
						When you’re born into a broken home, with a physically abusive,
						alcoholic father…{' '}
					</p>
					<p>
						“Saved” by spending 6 years living with equally abusive foster
						families…
					</p>

					<p>
						Homeless and running wild on the dangerous streets of 1970’s NYC…
						Incarcerated, and addicted to drugs by the age of 14…
					</p>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='member-john-header'>
					{' '}
					<h1>It’s an uphill battle to be motivated… </h1>
					<h2>
						and outright impossible to stay motivated enough to course-correct
						like a battleship cutting a hard 90-degree angle turn, ending up:
					</h2>
					<ul>
						<li>
							A guest, and frequently discussed name on the Joe Rogan Experience
							podcast{' '}
						</li>
						<li>
							Touring the world several times over as the front man in a band
							credited with influencing some of the biggest names in the music
							industry{' '}
						</li>
						<li>
							A successful, and celebrated author of more than 4 books, and
							multiple screenplays{' '}
						</li>
						<li>Completing over 14 Ironman triathlon competitions </li>
						<li>Featured in Vice magazine numerous times</li>
						<li>
							Asked to speak to fortune-500 CEO’s, at-risk youth, and lifelong
							prison inmates alike on the methods of beating back the “enemy
							mind” with a stick.{' '}
						</li>
					</ul>
				</div>
			</article>
			<article className='a3'>
				<div className='a3-header' id='member-john-header'>
					<h1>Nope, motivation won’t cut it.</h1>
					<h2>
						Fortunately, when you have discipline, you continue putting one foot
						in front of the other…(Long after the motivation has moved on).
					</h2>
					<h2>
						John Joseph has proven beyond a shadow of a doubt that anything in
						your life is possible through discipline…followed by purposeful
						practice, action, and a Positive Mental Attitude.{' '}
					</h2>
					<h1>
						Winston Churchill said, “If you’re going through hell….keep going”{' '}
					</h1>
					<br />
					<h2>
						John Joseph went through hell to become an internationally
						recognized musician, author, and athlete.
					</h2>
					<h2>Not only did he survive….he thrived.</h2>
					<h2>
						<br />
						John has done a lot of things with his life, but he’s not a
						motivational speaker, or coach.
					</h2>{' '}
					<h2>...because motivation is crap.</h2>
				</div>
			</article>
			<article className='a4'>
				<div className='a4-header' id='member-john-header'></div>
			</article>
			<article className='a5'>
				<div className='a5-header' id='member-john-header'>
					<h2>
						John came into this world, with nothing but himself.{' '}
						<br className='break-hidden' />
						He fought the malfunction, and saw through the Maya.{' '}
						<br className='break-hidden' />
						He opened his mind, because he knew he wasn’t afraid of what he was
						going to find.
					</h2>
					<h2>
						John changed his perspective, and his world.
						<br /> He’s changed the world for countless people who were ready to
						put the work in, while simultaneously identifying those who were
						not.
					</h2>
				</div>
			</article>
			<article className='a6'>
				<div className='a6-header' id='member-john-header'>
					<h2>
						People looking for “motivation” become “Askholes”, and he ain’t
						wasting a breath on them, or any of their kind.
					</h2>
					<h2>
						If you’re looking to get yourself on track, and maximize your
						potential, your first need discipline… Then you need{' '}
					</h2>
					<a
						href='Johnjosephdiscipline.com'
						target='blank'
						className='john-anchor'>
						<h1>Johnjosephdiscipline.com</h1>
					</a>
				</div>
			</article>
		</main>
	);
};

export default MemberJohn;
