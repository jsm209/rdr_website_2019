import React from 'react';

import CreateBlogPosts from '../components/CreateBlogPosts';

class HomeScreen extends React.Component {

	bannerContainerStyle = {
		width: "100%",
   		height: "auto"
	}


	render() {
		let blogPostContainerStyle = {
			float: "right"
		}

		let blogPostContainerLable = {
			fontSize: "22px"
		}
	
		return(
			<div>
				<h1 style={{paddingTop: '7%', paddingLeft: '4%'}}>Home</h1>
				<div style={blogPostContainerStyle}>
					<p style={blogPostContainerLable}>Most Recent Blog Posts</p>
					<CreateBlogPosts />
				</div>
				
			</div>
		)
	}
}

export default HomeScreen;