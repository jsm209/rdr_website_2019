import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button, CardHeader } from 'reactstrap';

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
function DjCard(props) {

  const userLink = "https://spinitron.com/Rainy-Dawg/dj/" + props.data.id

  let styles = {
    padding: "10px",
    width: "300px",
    height: "auto",
    color: "black"
  }

  return (
    <div style={styles}>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg style={{height: "150px", width: "150px", display: "block", margin: "auto"}} src={props.data.image} alt={props.data.name} />
        <CardBody>
          <CardHeader style={{ backgroundColor: "#444", fontSize: '14px' }}tag="h2">{props.data.name}</CardHeader>
          {/*<CardSubtitle style={{fontSize: '12px'}}>{props.data.email}</CardSubtitle>*/}
          {/*<CardText style={{fontSize: 14, textAlign: "left", paddingTop: "10px"}}>{props.data.bio ? props.data.bio : "This DJ didn't make a bio yet!"}</CardText> */}
          <br></br>
          <a href={userLink}><Button>More</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default DjCard;
