import React from 'react';
import './AboutScreen.css';

class AboutScreen extends React.Component {
	render() {
		return(
			<div className="about-pg">
                <img src='./images/staff-all.jpg' className='hideOnMobile'/>
                <div className="offsetContentRectStyle">
                    <h1>What is Rainy Dawg Radio?</h1>
                    <h2>A student-powered radio station at the University of Washington</h2>
                    <p>Rainy Dawg Radio is a non-profit radio station staffed and operated 
                    by students at the University of Washington. Though the station focuses
                    on providing quality and diverse programming for the University community,
                    its reach is global, and anyone, worldwide, can tune in to our live stream 
                    at www.rainydawg.org.</p>

                    <p>The station is an enterprise of the Associated Students of the 
                    University of Washington, and was founded in 2001 to create an educational
                    outlet for students at the UW interested in the broadcast and music industries,
                    as well as providing entertainment for UW students, staff, and faculty.</p>

                    <p>Since its inception, Rainy Dawg has stayed on the cutting edge of broadcast
                    technology, and worked hard to integrate itself into the UW and Seattle music
                    communities. The station has also sponsored a number of highly-successful on-campus
                    events—often in collaboration with other ASUW entities and enterprises—bringing
                    national and local talent to the campus for one-of-a-kind performances.</p>

                    <p>Find Rainy Dawg Radio on the first floor of the HUB in room 131N or by 
                    calling (206) 685-0890 !</p>
                </div>

			</div>
		)
	}
}

export default AboutScreen;