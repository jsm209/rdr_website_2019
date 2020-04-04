import React from 'react';

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  import { Container, Row, Col } from 'reactstrap';

class ContactScreen extends React.Component {
	render() {

        let style = {
            textAlign: "left",
            //fontFamily: "Gaegu",
            padding: "8% 10%"
        }

        let cardStyle = {
            margin: "10px",
            width: "300px",
            color: "black"
        }

        let flexboxStyle = {
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            justifyContent: "space-evenly"
        }

        let rectStyle = {
            position: "absolute",
            zIndex: "-5",
            backgroundColor: "#FFF04C",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            height: "80%",
            top: "55%"
        }

		return(
			<div style={style}>
				<h1 style={{paddingTop: '6%'}}>Contact</h1>
                <h2>Need something? Reach out to any of our staff below!</h2>

                <div style={flexboxStyle}>
                    <div style={rectStyle}>
                    </div>
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle>Max Bryla</CardTitle>
                            <CardSubtitle>General Manager</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="./images/staff-gm.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                            <CardText>Contact for general inquiries.</CardText>
                            <CardText>Email: asuwrdgm@uw.edu</CardText>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle>Jules Travis</CardTitle>
                            <CardSubtitle>Assistant Manager</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="./images/staff-am.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardText>Our fearless leader. Can probably handle any issue you throw at her.</CardText>
                            <CardText>Contact for community outreach and volunteering inquiries.</CardText>
                            <CardText>Email: asuwrdam@uw.edu</CardText>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle>Elliott Hansen</CardTitle>
                            <CardSubtitle>Music Director</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="./images/staff-md.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardText>The preTencious music guy with the opinions. Books shows and curates our rotation!</CardText>
                            <CardText>Contact for bookings, music submissions, and music library inquiries.</CardText>
                            <CardText>Email: asuwrdmd@uw.edu</CardText>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle>Devon Pimentelli</CardTitle>
                            <CardSubtitle>Promotions Coordinator</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="./images/staff-pc.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardText>Our fearless leader. Can probably handle any issue you throw at her.</CardText>
                            <CardText>Contact for social media, marketing, and promotion inquiries.</CardText>
                            <CardText>Email: asuwrdpc@uw.edu</CardText>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardBody>
                            <CardTitle>Josh Maza</CardTitle>
                            <CardSubtitle>Technology Manager</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="./images/staff-tm.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardText>*beep boop*</CardText>
                            <CardText>Contact for studio, website, or general technology inquiries.</CardText>
                            <CardText>Email: asuwrdtm@uw.edu</CardText>
                        </CardBody>
                    </Card>                      
                </div>
			</div>
		)
	}
}

export default ContactScreen;