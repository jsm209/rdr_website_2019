import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button, CardHeader } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Given props with:
// data.name - name of DJ
// data.bio - bio of DJ
// data.email - email of DJ
// data.image - link to image of DJ
// data.id - ID of DJ
// data._links.shows.href

// Will return a ReactStrap card with the given information.
// props.data is assumed to be the individual JSON objects returned by
// requesting the endpoint "personas" from the Spinitron V2 API.

const DjCard = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const userLink = "https://spinitron.com/Rainy-Dawg/dj/" + props.data.id

  let cardstyle = {
    width: "150px",
    height: "auto",
    color: "black",
    margin: "5px",
    zIndex: "2"
  }

  let imgstyle = {
    height: "150px", 
    width: "150px", 
    display: "block",
    margin: "auto",
    filter: "brightness(75%)"
  }

  let imgstyleModal = {
    width: "200px",
    height: "auto"
  }

  let titleStyle = {
    width: "190px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: "-50%",
    fontWeight:"bold", 
    color: "white"
  };

  let buttonstyle = {
    backgroundColor: 'yellow', 
    color: 'black'
  }

  let headerstyle = {
    backgroundColor: 'yellow', 
    fontSize: '14px', 
    color: 'black',
    marginBottom: '20px'
  }

  return (
    <div style={cardstyle}>
      <img style={imgstyle} src={props.data.image} alt={props.data.name} onClick={toggle} className='djPreview'/>
      <div style={titleStyle}>
        <span>{props.data.name} </span>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.data.name}</ModalHeader>
        <ModalBody>
          <img style={imgstyleModal} src={props.data.image} alt={props.data.name}/>
          <p>{props.data.bio ? props.data.bio.replace("<p>", "").replace("</p>", "") : "This DJ didn't make a bio yet!"}</p>
          <p>{props.data.email}</p>
        </ModalBody>
        <ModalFooter>
          <a href={userLink} target="_blank"><Button color="primary" onClick={toggle}>Shows</Button>{' '}</a>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DjCard;






/*
    <div style={cardstyle}>
      <Card body inverse style={{ backgroundColor: 'black', borderColor: '#333' }}>
        <CardHeader tag="h3" style={headerstyle}>{props.data.name}</CardHeader>
        <CardImg style={imgstyle} src={props.data.image} alt={props.data.name} />
        <CardBody>

          <br></br>
          <a href={userLink}><Button style={buttonstyle}>More</Button></a>
        </CardBody>
      </Card>
    </div>
*/
