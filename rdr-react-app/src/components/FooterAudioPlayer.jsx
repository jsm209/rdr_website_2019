import React from 'react';

// React Bootstrap Components
import { Navbar } from 'react-bootstrap';

class FooterAudioPlayer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoading: false
        }
    }

    stream = new Audio('http://166.62.119.4:8000/stream');

    NavbarStyle = {
        backgroundColor: "#333333",
        color: "white"
    };

    // Will create a repeating call that refreshes the currently playing song every interval.
    componentDidMount() {
        let waitTime = 10000; // the time in ms to wait before getting the most recent song again.

        // Calls it initially, then sets an interval for it.

        // former spinitron url: https://spinitron.com/api/spins?access-token=VIT_hdbWICcgF3nGwvcLJCf6
        // andrew's backend url: http://rdr-backend.herokuapp.com/getSpinitronSpins

        this.getData("http://rdr-backend.herokuapp.com/getSpinitronSpins");
        this.interval = setInterval(() => this.getData("http://rdr-backend.herokuapp.com/getSpinitronSpins"), waitTime);
        
    }

    // Removes repeating call after component is unmounted.
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Will make a call to the Spinitron v2 API
    getData = (url) => {
        return new Promise((resolve, reject) => fetch(url)      
          .then(response => {
            response.json().then(data => {
              console.log(data);
              this.setState((prevState) => {
                return {
                  data: data.items[0] //Only going to store the most recent song
                }
              })
            }).catch(reject)
          }).catch(reject)
        )
    }

    onPlay = () => {
        this.setState({ isLoading: true });
        this.stream.play();
    }

    render() {

        let pStyle = {
            paddingLeft: '20px', 
            paddingTop: '10px', 
            fontSize: '15px'
        }

        return(
          <div className="fixed-bottom">  
            <Navbar style={this.NavbarStyle}>
                <p style={pStyle}>{this.state.isLoading ? "Now Playing" : "Radio stream is temporarily disabled :( tune in instead to our livestreams and blog articles!"}</p>
            </Navbar>
          </div>
          /*
            <div className="fixed-bottom">  
                <Navbar style={this.NavbarStyle}>
                    <i className="fa fa-play-circle" style={{fontSize: '30px'}} onClick={this.onPlay}></i>
                    <p style={pStyle}>{this.state.isLoading ? "Now Playing" : "Click Play To Stream"}</p>
                    <p style={pStyle}>{this.state.isLoading ? this.state.data.artist + "-" + this.state.data.song : ""}</p>
                    <p style={pStyle}>{this.state.isLoading ? "(" + this.tConvert(this.state.data.start.substring(11, 16)) + ")" : ""}</p>
                </Navbar>
            </div>
          */
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
export default FooterAudioPlayer;