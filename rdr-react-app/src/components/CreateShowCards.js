import React from 'react'
import ShowCard from "./ShowCard"

// KNOWN ISSUES:
// The amount of pages in the JSON response for the current amount of DJ
// profiles is hardcoded in with "5". In the future, should implement a way
// to automatically fetch the appropriate amount of pages.


// This component will get all the profile information for the current shows
// and display them as ShowCards.
class CreateShowCards extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  // Will call all the data for DJ profiles.
  componentDidMount() {
    for (let i = 1; i <= 5; i++) {
        this.getData("https://spinitron.com/api/shows?access-token=VIT_hdbWICcgF3nGwvcLJCf6", i)
    }
  }

  // Will make a call to the Spinitron v2 API for 1 page of JSON data about
  // show profiles.
  getData(url, pageNumber) {
    return new Promise((resolve, reject) => fetch(url + "&page=" + pageNumber)
      .then(response => {
        response.json().then(data => {
          this.setState((prevState) => {
            return {
              data: prevState.data.concat(data.items)
            }
          })
          if(data.next) {
            this.getData(url).then(resolve).catch(reject)
          } else {
            resolve(this.state.data)
          }
        }).catch(reject)
      }).catch(reject)
    )
  }

  // Will construct the DJ cards using the stored profile data.
  render() {
    let styles = {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "200px"
    }
    let cards = this.state.data.map( (item) => {
      return <ShowCard data={item}/>
    })

    return(
      <div style={styles}>
        {cards}
      </div>
    )
  }
}

export default CreateShowCards
