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
            padding: "8% 10%"
        }

        let cardStyle = {
            margin: "10px"
        }

		return(
			<div style={style}>
				<h1>Contact</h1>
                <h2>Reach out to any of our staff below for related needs!</h2>
                <Row>
                    <Col className="col-6">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle>Max Bryla</CardTitle>
                                <CardSubtitle>General Manager</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                                <CardText>Email: </CardText>
                                <CardText>Phone: </CardText>
                            </CardBody>
                        </Card> 
                    </Col>
                    <Col className="col-6">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle>Max Bryla</CardTitle>
                                <CardSubtitle>General Manager</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                                <CardText>Email: </CardText>
                                <CardText>Phone: </CardText>
                            </CardBody>
                        </Card> 
                    </Col>
                </Row>
                <Row>
                    <Col className="col-4">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle>Max Bryla</CardTitle>
                                <CardSubtitle>General Manager</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                                <CardText>Email: </CardText>
                                <CardText>Phone: </CardText>
                            </CardBody>
                        </Card> 
                    </Col>
                    <Col className="col-4">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle>Max Bryla</CardTitle>
                                <CardSubtitle>General Manager</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                                <CardText>Email: </CardText>
                                <CardText>Phone: </CardText>
                            </CardBody>
                        </Card> 
                    </Col>
                    <Col className="col-4">
                        <Card style={cardStyle}>
                            <CardBody>
                                <CardTitle>Max Bryla</CardTitle>
                                <CardSubtitle>General Manager</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                            <CardBody>
                                <CardText>Our fearless leader. Can probably handle any issue you throw at him.</CardText>
                                <CardText>Email: </CardText>
                                <CardText>Phone: </CardText>
                            </CardBody>
                        </Card> 
                    </Col>
                </Row>
               

			</div>
		)
	}
}

export default ContactScreen;