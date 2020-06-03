import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
	render() {
		return <footer className="offset">
			<p>© 2020 University of Washington | Seattle, WA</p>	
			<p>Follow us on our Socials!</p>	
			<ul>
				<li><a href="https://twitter.com/RainyDawgRadio" target="_blank"><img className="social-icon" src='./images/icon-twitter.png' /></a></li>
				<li><a href="https://www.facebook.com/RainyDawgRadio/" target="_blank"><img className="social-icon" src='./images/icon-facebook.png' /></a></li>
				<li><a href="https://www.instagram.com/rainydawgradio/" target="_blank"><img className="social-icon" src='./images/icon-instagram.png' /></a></li>
				<li><a href="https://open.spotify.com/user/duw2cz3q0rhhodijwwd5r5mc1" target="_blank"><img className="social-icon" src='./images/icon-spotify.png' /></a></li>
			</ul>
		</footer>;
	}
}