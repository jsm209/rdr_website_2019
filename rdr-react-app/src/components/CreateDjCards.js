import React from 'react'
import DjCard from "./DjCard"

// KNOWN ISSUES:
// The amount of pages in the JSON response for the current amount of DJ
// profiles is hardcoded in with "12". In the future, should implement a way
// to automatically fetch the appropriate amount of pages.


// This component will get all the profile information for the current DJs
// and display them as DjCards.
class CreateDjCards extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  // Will call all the data for DJ profiles.
  componentDidMount() {
    for (let i = 1; i <= 12; i++) {
        this.getData("https://spinitron.com/api/personas?access-token=VIT_hdbWICcgF3nGwvcLJCf6", i)
    }
  }

  // Will make a call to the Spinitron v2 API for 1 page of JSON data about
  // DJ profiles.
  getData(url, pageNumber) {
    let proxyurl = "https://cors-anywhere.herokuapp.com/";
    return new Promise((resolve, reject) => fetch(proxyurl + url + "&page=" + pageNumber)
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
      margin: "auto",
      width: "90%",
      justifyContent: "space-evenly"
    }
    let cards = this.state.data.map( (item) => {
      return <DjCard data={item}/>
    })

    return(
      <div style={styles}>
        {cards}
      </div>
    )
  }
}

export default CreateDjCards
