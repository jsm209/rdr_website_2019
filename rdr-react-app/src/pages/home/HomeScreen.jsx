import React from 'react';
import './HomeScreen.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CreateBlogPosts from '../../components/CreateBlogPosts';
import RecentSpinDisplay from '../../components/RecentSpinDisplay';
import { Posters } from './../../components/Posters/Posters';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

class HomeScreen extends React.Component {

	render() {
		return(
			<div className="home-pg">
				<div className="header-img">&nbsp;</div>
				<div className="news-events">
					<h1>News and Upcoming Events</h1>
					<ListGroup flush>
						<ListGroupItem>(5/16/2020) EMERALD NOISE Online Charity Music Event</ListGroupItem>
						<ListGroupItem>(5/8/2020) Episode 5 RDR x WAC W Virtual Show!</ListGroupItem>
						<ListGroupItem>(4/10/2020) Episode 2 RDR Virtual Show!</ListGroupItem>
						<ListGroupItem>(4/10/2020) Episode 1 RDR Virtual Show!</ListGroupItem>
						<ListGroupItem>(4/5/2020) Rainy Dawg Radio Twitch Stream Online</ListGroupItem>
						<ListGroupItem>(3/15/2020) New website up!</ListGroupItem>
					</ListGroup>
				</div>
				<p className="tag">(scroll to view more)</p>
				<div className="twitch-poster">
					<div>
						<h1>Start Listening In!</h1>
						<div>
							<TwitchEmbed
								id="twitch-content"
								channel="rainydawgradio"
								width="inherit"
								theme="dark"
								muted
								onVideoPause={() => console.log(':(')}
							/>
						</div>
					</div>
					<div>
						<Posters />
					</div>
				</div>
				<div className="blog-container">
					<div>
						<div>
							<h1>Most Recent Blog Posts</h1>
							<CreateBlogPosts />
						</div>
					</div>
					<a href="https://rainydawgradioblog.tumblr.com/">Want to read more? Click here!</a>
				</div>
			</div>
		)
	}
}

export default HomeScreen;