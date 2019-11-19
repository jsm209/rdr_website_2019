import React from 'react';

import CreateBlogPosts from '../components/CreateBlogPosts';

class HomeScreen extends React.Component {
	render() {
		return(
			<div>
				<h1>Home</h1>
				<CreateBlogPosts />
			</div>
		)
	}
}

export default HomeScreen;