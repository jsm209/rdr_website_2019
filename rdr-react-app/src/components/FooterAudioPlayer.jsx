import React from 'react';

// React Bootstrap Components
import { Navbar } from 'react-bootstrap';

class FooterAudioPlayer extends React.Component{

    NavbarStyle = {
        backgroundColor: "black",
        color: "white"
    };

    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar style={this.NavbarStyle}>
                    <i className="fa fa-play-circle" style={{fontSize: '30px'}}></i>
                    <p style={{paddingLeft: '20px', paddingTop: '10px', fontSize: '15px'}}>Now Playing</p>
                </Navbar>
            </div>
        )
    }
}
export default FooterAudioPlayer;