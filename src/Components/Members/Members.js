import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Members.scss';

// import Aaron_Profile from '../../Component-Images/Aaron_Profile.png';

import ContactForm from '../Contact-Form/Contact';

import '../Contact-Form/ContactForm.scss';

const topTop = () => {
	window.scrollTo(0, 0);
};

const Members = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className='members-container'>
			<article className='a1'>
				<div className='a1-header' id='members-header'>
					<h1>The Members</h1>
					<h2>A partnership about growth and recovery</h2>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='members-header'>
					<h2>
						The RēCOVER mission is to “Revolutionize the way you Live. Work.
						Play. Train”.
					</h2>
					<div className='members-image-container'>
						<ul>
							<li>
								<Link to='/members/aaron' onClick={topTop}>
									<img
										src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/Aaron/Images/Aaron_Profile.png'
										alt='aaron-profile'
										className='profile-img'
									/>
									<p className='members-text-overlay'>
										Aaron
										<br /> Drogoszewski
									</p>
								</Link>
							</li>
							<li>
								<Link to='/members/john' onClick={topTop}>
									<img
										src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/JohnJoseph/John+Joseph+Profile.png'
										alt='john-profile'
										className='profile-img'
									/>
									<p className='members-text-overlay'>
										John
										<br />
										Joseph
									</p>
								</Link>
							</li>
							<li>
								<Link to='/members/nick' onClick={topTop}>
									<img
										src='https://thechambercollective.s3.us-east-2.amazonaws.com/Members/NickPags/Nick+Pags+Profile.png'
										alt='nick-profile'
										className='profile-img'
									/>
									<p className='members-text-overlay'>
										Nick <br />
										Pags
									</p>
								</Link>
							</li>
						</ul>
					</div>
					<h2>
						This is ultimately saying:
						<br /> “to help others live their best lives possible.”
					</h2>
				</div>
			</article>
			<article className='a3'>
				<div className='a3-header' id='members-header'>
					<p>
						I have been known to say: <br />
						<br />
						“Fully comprehensive recovery is more than just technology”.
						<br />
						<br /> The longer I’m in the game, the more I realize how crucial it
						is to expand and deliver on that statement. I don’t want to only
						help people live their best life; I want to change the world. The
						way I can do so requires the subscription to two concepts:
					</p>
					<p>
						&emsp;1. The understanding that <i>“changing the world”</i> must be
						done one person at a time.{' '}
					</p>
					<h2>
						{' '}
						<i>
							“The world exists as you perceive it. It is not what you see...
							but how you see it. It is not what you hear... but how you hear
							it. It is not what you feel... but how you feel about it”
							<br /> -Rumi
						</i>
					</h2>
					<p>
						{' '}
						&emsp;*If we have the power to help one person out of the
						7,830,458,560 people on this planet today…it’s not only a start, but
						our responsibility
					</p>
					<p>
						&emsp;2. The belief that one person’s efforts to do so will never
						have the potential for success that a syndicate of passionate human
						beings working together can accomplish.
					</p>
				</div>
			</article>
			<article className='a4'>
				<div className='a4-header' id='members-header'>
					<p className='column-2'>
						The Chamber is a hub for information, inspiration, community, and
						networking. The Chamber Syndicate is a collection of hand-picked
						professionals I have asked to help me utilize everything inside the
						Chamber to make the world outside of it one that I’d feel proud to
						live in.
						<br />
						<br />
						Stress, poor sleep, worry, anxiety, uncertainty, and the feelings of
						disconnection from a positive source of energy, or connection to a
						community will all negatively impact the world as it was beautifully
						articulated by Rumi. The word “salvation” is often associated with
						religious gestures…however, if the dictionary defines it as:
						“Preservation or deliverance from harm, ruin, or loss”
						<br />
						<br />
						Isn’t that what the Chamber Syndicate will be doing by helping
						ourselves, and those around us avoid everything listed above? <br />
						<br />
						Stress, poor sleep, worry, anxiety and everything else already
						written will undoubtedly ruin opportunities in the moment, at the
						very least….If not an entire day. When a moment, or a day are
						ruined…the opportunity to live the best life is lost. That’s only a
						single grain of sand lost…but how many grains of sand are in the
						hourglass of life?
						<br />
						<br />
						Life is too short to gamble on that answer, as if it was a mason jar
						filled with Jellybeans, offering a prize to the best guess. Everyone
						invited to be part of the Chamber Syndicate is a high-performer:
						High performers maximize opportunities in life, they don’t waste
						them. Sometimes all somebody needs is the right boost, information,
						inspiration, and guidance to follow the path of the high-performers
						in their life.
						<br />
						<br />
						That is why RēCOVER was created. That is what the Chamber provides.
						That is what the Chamber Syndicate delivers.
					</p>
					<h2>-Aaron Drogoszewski</h2>
				</div>
			</article>
			<article className='a-contact'>
				<ContactForm />
			</article>
		</main>
	);
};

export default Members;
