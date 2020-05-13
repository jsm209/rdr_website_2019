import React from 'react';

class VolunteerScreen extends React.Component {
	render() {

        let style = {
            padding: "8% 10%",
            //fontFamily: "Gaegu",
            color: "black",
            textAlign: "left"
        }

        let rectStyle = {
            backgroundColor: "#FFF04C",
            width: "60%",
            padding: "5%",
            paddingRight: "20%",
            height: "100%"
        }

        let h1Style = {
            fontWeight: "bold"
        }

        let pStyle = {
            fontSize: "18px"
        }

        let imageStyle = {
            width: '45%',
            height: 'auto',
            position: 'absolute',
            right: '10%',
            top: '33%'
        }

		return(
			<div style={style}>
                <img style={imageStyle} src='./images/event-bg1.png' className='hideOnMobile'/>
                <div className="offsetContentRectStyle">
                    <h1 style={h1Style}>Join Our Community!</h1>

                    <p style={pStyle}>Volunteer by filling out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdjBKW7zQ_vlslJLRvNziBuoUmPrNXu4M7TCr_mcdTL9-wew/viewform?usp=sf_link" target="_blank">application</a>.</p>

                    <h2>DJs, Bloggers, and More!</h2>
                    <p style={pStyle}>At the beginning of every quarter, we look to add more volunteers to our roster!
                    We're interested in students who have passion and diversity in music and want to find
                    other like minded individuals.
                    </p>
                    <h3>Volunteer DJ</h3>
                    <p style={pStyle}>Being a volunteer DJ means you're guarenteed at least hour a week to broadcast 
                    your show to the University of Washington campus! Show concepts can range from talk
                    shows, comedy, music niches, and much more. We mostly hire the majority of DJs in
                    the fall, however students come and go throughout the year so there are always openings.
                    </p>

                    <h3>Volunteer Blogger</h3>
                    <p style={pStyle}>As a blogger, you'll have the opportunity to practice journalism and writing about 
                    local music in Seattle through attending events and listening to music. Rainy Dawg Radio
                    ocasionally supplies bloggers with free tickets to local shows to fuel blogging content
                    and promote local acts.</p>

                    <h3>Music Specialist</h3>
                    <p style={pStyle}>As a music specialist you'll aid our director of music by being passionate about
                    the music genres you love! By keeping up to date in your specialty genre and making suggestions to
                    the music director, you can influence the music rotation at Rainy Dawg Radio.</p>

                    <p style={pStyle}>Find Rainy Dawg Radio on the first floor of the HUB in room 131N or by 
                    calling (206) 685-0890 !</p>
                </div>

			</div>
		)
	}
}

export default VolunteerScreen;