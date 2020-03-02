import React from 'react';

import CreateBlogPosts from '../components/CreateBlogPosts';
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
			display: "flex"
		}
	
		return(
			<div>
				<h1 style={title}></h1>
				<div style={blogPostContainerStyle}>
					<div style={screenFlexboxStyle}>
						<div>
							<p style={blogPostContainerLable}>Most Recent Blog Posts</p>
							<CreateBlogPosts />
						</div>
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
					</div>


				</div>
				
			</div>
		)
	}
}

export default HomeScreen;