import './Media.scss';
import NYC_Skyline from '../../Images/NYC_Skyline.png';
import NYT_Logo from '../../Images/NYT_Logo.png';
import FastCo_Logo from '../../Images/FastCo_Logo.png';
import GMA_Logo from '../../Images/GMA_Logo.png';
import Today_Show_Logo from '../../Images/Today_Show_Logo.png';
import WS_Logo from '../../Images/WS_Logo.png';

const Media = () => {
	return (
		<main className='home-container'>
			<article className='a1' id="panel">
				<img src={NYC_Skyline}
					alt='#'
					className='a1-image' />
				<div className='a1-header'>
					<h1>The Cache</h1>
					<h2>The latest media and insights from our team</h2>
				</div>
			</article>
			<article className='a2'>
				<img src={NYC_Skyline}
					alt='#'
					className='a2-image' />
				<h1>Be In The Know</h1>
                <ul class="logos-list">
					<li class="logos-item">
						<img
							class="logos-image"
							src={NYT_Logo}
							alt="New York Times logo"
						/>
					</li>
					<li class="logos-item">
						<img
							class="logos-image"
							d
							src={WS_Logo}
							alt="Wall Street Journal logo"
						/>
					</li>
					<li class="logos-item">
						<img
							class="logos-image"
							src={FastCo_Logo}
							alt="Fast Company logo"
						/>
					</li>
					<li class="logos-item">
						<img
							class="logos-image"
							src={Today_Show_Logo}
							alt="Today Show logo"
						/>
					</li>
					<li class="logos-item">
						<img class="logos-image" src={GMA_Logo} alt="GMA logo" />
					</li>
				</ul>

				<p>Get your Red Carpet, VIP access into the beautiful minds of The Chamber Collective here.</p>
                <p>Podcasts, Blogs, Vlogs, and articles written by several members of The Chamber Collective 
                    will be shared here, and updated frequently.</p>
			</article>
			<article className='a3'>
				<h1>Contact</h1>

			</article>
		</main>
	);
};

export default Media;