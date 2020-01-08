import React from 'react';

class StreamScreen extends React.Component {
	render() {

        let style = {
            textAlign: "left",
            padding: "8% 10%"
        }

        let sectionStyle = {
            paddingBottom: "10%"
        }

        let flexboxStyle = {
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            width: "90%",
            justifyContent: "space-evenly"
        }

//Rainy-Dawg
		return(
			<div style={style}>

                <section style={sectionStyle}>
                    <h1>Online Stream</h1>
                    <h2>Internet broadcasting since 2001</h2>
                    <p>You can stream our music by clicking the play button at the bottom left of the screen!</p>
                    <p>Find Rainy Dawg Radio on the first floor of the HUB in room 131N or by 
                    calling (206) 685-0890 !</p>
                </section>

                <div style={flexboxStyle}>
                    <div>
                        <h2>Current Show</h2>
                        <iframe src="//widgets.spinitron.com/widget/current-playlist?station=/Rainy-Dawg-Radio" allow="encrypted-media" frameborder="0" scrolling="yes" height="600px" margin="auto"></iframe>
                    </div>

                    <div>
                        <h2>Most Recent Spins</h2>
                        <iframe src="//widgets.spinitron.com/widget/now-playing-v2?station=/Rainy Dawg&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media" frameborder="0" scrolling="no" height="600px" margin="auto"></iframe>
                    </div>
                </div>


			</div>
		)
	}
}

export default StreamScreen;