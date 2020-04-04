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

		let pStyle = {
			fontSize: "20px"
		}

		let fontStyle = {
			fontFamily: "Gaegu"
		}

		let blogPostContainerStyle = {
			paddingTop: "30px",
			paddingBottom: "200px"
		}

		let blogPostContainerLable = {
			fontSize: "30px",
			textAlign: "left",
			paddingLeft: "5%"
		}

		let headerFlexboxStyle = {
			display: "flex",
			paddingLeft: "5%",
			justifyContent: "flex-start",
			flexWrap: "wrap"
		}

		let headerItem = {
			paddingRight: "20px",
			zIndex: 1
		}

		let black = {
			color: "black"
		}
 
		// for the twitter and facebook feed displays at the bottom
		let footerFlexboxStyle = {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			flexWrap: "wrap",
			paddingTop: "5%",
			width: "600px",
			margin: "auto"
		}

		let imageStyle = {
			width: "150px",
			height: "auto"
		}

		let cuteIconImageStyle = {
            width: "20%",
			height: "auto",
			display: "block",
			position: "absolute",
			float: "right",
			right: "60px",
			top: "25%",
			zIndex: 0
        }
	
		return(
			<div>
				<h1 style={title}></h1>
				<div style={headerFlexboxStyle}>
					<div style={headerItem}>
						<img style={imageStyle} src='./images/rdr-logo.jpg'/>
					</div>
					<div style={headerItem}>
						<h2>News and Upcoming Events</h2>
						<ListGroup flush>
							<ListGroupItem style={black}>(4/2/2020) Regular programming cancelled :(</ListGroupItem>
							<ListGroupItem style={black}>(3/15/2020) New website up!</ListGroupItem>
							<ListGroupItem style={black}>(3/5/2020) Rock The Vote Show</ListGroupItem>
						</ListGroup>
					</div>
					<div style={headerItem}>
						{/*<RecentSpinDisplay />*/}
					</div>

				</div>
				<div style={blogPostContainerStyle}>
					<div>
						<div>
							<p style={blogPostContainerLable}>Most Recent Blog Posts</p>
							<img style={cuteIconImageStyle} src='./images/icon-hotdog.PNG'/>
							<CreateBlogPosts />
						</div>

					</div>
				</div>
				{/*
				<div style={footerFlexboxStyle}>
					<div>
						<p style={pStyle}>RDR Twitter @RainyDawgRadio</p>
						<Timeline
							dataSource={{
							sourceType: 'profile',
							screenName: 'RainyDawgRadio'
							}}
							options={{
							username: 'RainyDawgRadio',
							height: '275',
							width: '275'
							}}
							onLoad={() => console.log('Timeline is loaded!')}
						/>
					</div>
					<div>
						<p style={pStyle}>RDR Facebook @RainyDawgRadio</p>
						<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRainyDawgRadio%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="275" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
					</div>
				</div>
				*/}
			</div>
		)
	}
}

export default HomeScreen;