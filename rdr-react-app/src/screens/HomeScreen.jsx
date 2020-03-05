import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CreateBlogPosts from '../components/CreateBlogPosts';
import RecentSpinDisplay from '../components/RecentSpinDisplay';
import { Timeline } from 'react-twitter-widgets'

class HomeScreen extends React.Component {

	bannerContainerStyle = {
		width: "100%",
   		height: "auto"
	}


	render() {
		let title = {
			fontSize: "60px",
			fontFamily: "Gaegu",
			textAlign: "center",
			paddingTop: "7%"
		}

		let blogPostContainerStyle = {
			paddingTop: "30px"
		}

		let blogPostContainerLable = {
			fontSize: "26px",
			fontFamily: "Gaegu",
			textAlign: "left",
			paddingLeft: "5%"
		}

		let screenFlexboxStyle = {
			display: "flex",
			paddingLeft: "5%"
		}

		let newsContainer = {
			paddingLeft: "20px"
		}

		let imageStyle = {
			width: "150px",
			height: "auto"
		}
	
		return(
			<div>
				<h1 style={title}></h1>
				<div style={screenFlexboxStyle}>
					<div>
						<img style={imageStyle} src='./images/rdr-logo.png'/>
					</div>
					<div style={newsContainer}>
						<h2>News and Upcoming Events</h2>
						<ListGroup flush>
							<ListGroupItem>(3/6/2020) New website up!</ListGroupItem>
							<ListGroupItem>(3/5/2020) Rock The Vote Show</ListGroupItem>
						</ListGroup>
					</div>
					<div>
						<RecentSpinDisplay />
					</div>
				</div>
				<div style={blogPostContainerStyle}>
					<div>
						<div>
							<p style={blogPostContainerLable}>Most Recent Blog Posts</p>
							<CreateBlogPosts />
						</div>

					</div>
				</div>
				<div style={screenFlexboxStyle}>
					<div>
						<Timeline
							dataSource={{
							sourceType: 'profile',
							screenName: 'RainyDawgRadio'
							}}
							options={{
							username: 'RainyDawgRadio',
							height: '400',
							width: '200px'
							}}
							onLoad={() => console.log('Timeline is loaded!')}
						/>
					</div>
					<div>
						<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRainyDawgRadio%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeScreen;