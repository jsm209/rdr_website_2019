import React from 'react'

import BlogPost from './BlogPost';

// This component will get all the profile information for the current shows
// and display them as ShowCards.
class CreateBlogPosts extends React.Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	// Will call all the data for DJ profiles.
	componentDidMount() {
		let baseURL = "http://rdr-backend.herokuapp.com/getTumblrInfo";
		this.getData(baseURL);
	}

	// Will make a call to the Spinitron v2 API for 1 page of JSON data about
	// show profiles.
	getData(url) {
		console.log(url); // we might not need this hehe console lowkey cluttered
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ data: data.response.posts }, () => {
				console.log(this.state)
			}))
			.catch(console.log)
	}

	render() {
		let posts = this.state.data.map((blog) => {
			return <BlogPost post={blog}/>
		});

		let styles = {
			display: "flex",
			flexWrap: "wrap",
			width: "350px",
			justifyContent: "space-evenly"
		}

		return(
			<div style={styles}>
			{posts.slice(0, 4)}
			</div>
		);
	}
}

export default CreateBlogPosts
