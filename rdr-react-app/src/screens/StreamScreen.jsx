import React from 'react';

class StreamScreen extends React.Component {
	render() {

        let style = {
            textAlign: "left",
            //fontFamily: "Gaegu",
            padding: "4% 1%",
            color: "black"
        }

        let h1Style = {
            fontWeight: "bold"
        }

        let pStyle = {
            fontSize: "18px"
        }

        let headerSectionStyle = {
            backgroundColor: "#FFF04C",
            margin: "auto",
            width: "80%",
            padding: "5%",
            height: "100%",
            marginBottom: "20px"
        }

        let sectionStyle = {
            backgroundColor: "#FFF04C",
            margin: "auto",
            width: "320px",
            padding: "5%",
            height: "100%",
            paddingBottom: "10%"
        }

        let flexboxStyle = {
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            width: "90%",
            justifyContent: "space-evenly"
        }

        let spinitronIframeStyle = {
            backgroundColor: "#FFF04C",
            width: "320px",
            margin: "auto",
            paddingLeft: "1%",
            paddingRight: "1%",
            marginBottom: "20px"
        }

        let imageStyle = {
            width: "20%",
            height: "auto",
            float: "right"
        }

//Rainy-Dawg
		return(
			<div style={style}>
                    <section style={headerSectionStyle}>
                        <h1 style={h1Style}>Online Stream</h1>
                        <h2>Internet broadcasting since 2001</h2>
                        <img style={imageStyle} src='./images/icon-magnet.PNG'/>
                        <p style={pStyle}>You can stream our music by clicking the play button at the bottom left of the screen!</p>
                        <p style={pStyle}>Find Rainy Dawg Radio on the first floor of the HUB in room 131N or by 
                        calling (206) 685-0890 !</p>
                        <p style={pStyle}> If you have any questions about the studio and its equipment, or there are problems with the online stream,
                        send an email to our technology manager at <a href = "mailto: asuwrdtm@uw.edu">asuwrdtm@uw.edu</a>.</p>
                    </section>
                <div style={flexboxStyle}>        
                    <div style={spinitronIframeStyle}>
                        <h2>Current Show</h2>
                        <iframe src="https://spinitron.com/widget/current-playlist?station=rainy%20dawg" allow="encrypted-media" frameborder="0" scrolling="yes" height="600px" margin="auto"></iframe>
                    </div>

                    <div style={spinitronIframeStyle}>
                        <h2>Most Recent Spins</h2>
                        <iframe src="//widgets.spinitron.com/widget/now-playing-v2?station=rainy%20dawg&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media" frameborder="0" scrolling="no" height="600px" margin="auto"></iframe>
                    </div>
                    
                </div>
			</div>
		)
	}
}

export default StreamScreen;