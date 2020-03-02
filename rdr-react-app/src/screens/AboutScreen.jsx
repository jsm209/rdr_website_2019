import React from 'react';

class AboutScreen extends React.Component {
	render() {

        let style = {
            padding: "8% 10%",
            fontFamily: "Gaegu",
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
                <img style={imageStyle} src='./images/staff-all.jpg'/>
                <div style={rectStyle}>
                    <h1 style={h1Style}>What is Rainy Dawg Radio?</h1>
                    <h2>A student-powered radio station at the University of Washington</h2>
                    <p style={pStyle}>Rainy Dawg Radio is a non-profit radio station staffed and operated 
                    by students at the University of Washington. Though the station focuses
                    on providing quality and diverse programming for the University community,
                    its reach is global, and anyone, worldwide, can tune in to our live stream 
                    at www.rainydawg.org.</p>

                    <p style={pStyle}>The station is an enterprise of the Associated Students of the 
                    University of Washington, and was founded in 2001 to create an educational
                    outlet for students at the UW interested in the broadcast and music industries,
                    as well as providing entertainment for UW students, staff, and faculty.</p>

                    <p style={pStyle}>Since its inception, Rainy Dawg has stayed on the cutting edge of broadcast
                    technology, and worked hard to integrate itself into the UW and Seattle music
                    communities. The station has also sponsored a number of highly-successful on-campus
                    events—often in collaboration with other ASUW entities and enterprises—bringing
                    national and local talent to the campus for one-of-a-kind performances.</p>

                    <p style={pStyle}>Find Rainy Dawg Radio on the first floor of the HUB in room 131N or by 
                    calling (206) 685-0890 !</p>
                </div>

			</div>
		)
	}
}

export default AboutScreen;