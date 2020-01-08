import React from 'react';

// React Bootstrap Components
import { Navbar } from 'react-bootstrap';

class FooterAudioPlayer extends React.Component{

    constructor() {
        super()
        this.state = {
            data: {},
            isLoading: false
        }
    }

    stream = new Audio('http://166.62.119.4:8000/stream');
    

    NavbarStyle = {
        backgroundColor: "black",
        color: "white"
    };

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

    // Will make a call to the Spinitron v2 API for 1 page of JSON data about
    // DJ profiles.
    getData = (url) => {
        console.log(this.state.data);
        return new Promise((resolve, reject) => fetch(url)      
          .then(response => {
            response.json().then(data => {
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
                    <i className="fa fa-play-circle" style={{fontSize: '30px'}} onClick={this.onPlay}></i>
                    <p style={pStyle}>{this.state.isLoading ? "Now Playing" : "Click Play To Stream"}</p>
                    <p style={pStyle}>{this.state.isLoading ? this.state.data.artist + "-" + this.state.data.song : ""}</p>
                    <p style={pStyle}>{this.state.isLoading ? "(" + this.state.data.start + ")" : ""}</p>
                </Navbar>
            </div>
        )
    }
}
export default FooterAudioPlayer;