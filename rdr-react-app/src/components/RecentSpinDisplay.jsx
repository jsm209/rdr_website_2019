import React from 'react';

// React Bootstrap Components
import { Navbar } from 'react-bootstrap';

class RecentSpinDisplay extends React.Component{

    constructor() {
        super()
        this.state = {
            data: {},
            isLoading: false
        }
    }

    // Will create a repeating call that refreshes the currently playing song every interval.
    componentDidMount() {
        let waitTime = 10000; // the time in ms to wait before getting the most recent song again.

        // Calls it initially, then sets an interval for it.
        this.getData("https://spinitron.com/api/spins?access-token=VIT_hdbWICcgF3nGwvcLJCf6");
        this.interval = setInterval(() => this.getData("https://spinitron.com/api/spins?access-token=VIT_hdbWICcgF3nGwvcLJCf6"), waitTime);
        
    }

    // Removes repeating call after component is unmounted.
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Will make a call to the Spinitron v2 API
    getData = (url) => {
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        return new Promise((resolve, reject) => fetch(proxyurl + url)      
          .then(response => {
            response.json().then(data => {
              console.log(data);
              this.setState((prevState) => {
                return {
                  data: data.items[0], //Only going to store the most recent song
                  isLoading: true
                }
              })
            }).catch(reject)
          }).catch(reject)
        )
    }

    render() {

        let pStyle = {
            paddingLeft: '20px', 
            paddingTop: '10px', 
            fontSize: '15px'
        }

        return(
          <div>
            <h2>On Air:</h2>
            <p style={pStyle}>Show Name - With Show Host A and B</p>
            <p style={pStyle}>Show Description</p>
          </div>
        )
    }

    tConvert(time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }
}
export default RecentSpinDisplay;