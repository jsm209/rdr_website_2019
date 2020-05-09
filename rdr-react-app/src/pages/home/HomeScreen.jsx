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
						<ListGroupItem>(4/2/2020) Regular programming cancelled :(</ListGroupItem>
						<ListGroupItem>(3/15/2020) New website up!</ListGroupItem>
						<ListGroupItem>(3/5/2020) Rock The Vote Show</ListGroupItem>
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