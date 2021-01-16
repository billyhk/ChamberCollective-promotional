import { useEffect } from 'react';

import './Media.scss'
import NYT_Logo from '../../Component-Images/NYT_Logo.png';
import FastCo_Logo from '../../Component-Images/FastCo_Logo.png';
import GMA_Logo from '../../Component-Images/GMA_Logo.png';
import Today_Show_Logo from '../../Component-Images/Today_Show_Logo.png';
import WS_Logo from '../../Component-Images/WS_Logo.png';

import ContactForm from '../Contact-Form/Contact';

import '../Contact-Form/ContactForm.scss';

const Media = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='media-container'>
			<article className='a1'>
				<div className='a1-header' id='media-header'>
					<h1>The Cache</h1>
					<h2>The latest media and insights from our team</h2>
				</div>
			</article>
			<article className='a2'>
				<div className='a2-header' id='media-header'>
					<h1>Be In The Know</h1>
					<ul className='logos-list'>
						<li className='logos-item'>
							<img
								className='logos-image'
								src={NYT_Logo}
								alt='New York Times logo'
							/>
						</li>
						<li className='logos-item'>
							<img
								className='logos-image'
								d
								src={WS_Logo}
								alt='Wall Street Journal logo'
							/>
						</li>
						<li className='logos-item'>
							<img
								className='logos-image'
								src={FastCo_Logo}
								alt='Fast Company logo'
							/>
						</li>
						<li className='logos-item'>
							<img
								className='logos-image'
								src={Today_Show_Logo}
								alt='Today Show logo'
							/>
						</li>
						<li className='logos-item'>
							<img className='logos-image' src={GMA_Logo} alt='GMA logo' />
						</li>
					</ul>

					<h2>
						Get your Red Carpet, VIP access into the beautiful minds of The
						Chamber Collective here.
					</h2>
					<h2>
						Podcasts, Blogs, Vlogs, and articles written by several members of
						The Chamber Collective will be shared here, and updated frequently.
					</h2>
				</div>
			</article>
			<article className='a-contact'>
				<ContactForm />
			</article>
			
		</main>
	);
};

export default Media;
