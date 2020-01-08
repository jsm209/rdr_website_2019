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
    "https://api.tumblr.com/v2/blog/rainydawgradioblog.tumblr.com/info?api_key=AQaA9wiPTVjkSM5dBfvRwsM0rsY8pkIfuKmOEnhrH6Ip3oyPNQ"
    let baseURL = "https://api.tumblr.com/v2/blog/";
    let identifier = "rainydawgradioblog.tumblr.com/";
    let method = "posts";
    let api_key = "AQaA9wiPTVjkSM5dBfvRwsM0rsY8pkIfuKmOEnhrH6Ip3oyPNQ"; // hella unsafe but idfc
    this.getData(baseURL + identifier + method + "?api_key=" + api_key);
  }

  // Will make a call to the Spinitron v2 API for 1 page of JSON data about
  // show profiles.
  getData(url) {
    console.log(url);
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
      margin: "auto",
      width: "90%",
      justifyContent: "space-evenly"
    }

    return(
      <div style={styles}>
        {posts}
      </div>
    );
  }
}

export default CreateBlogPosts
