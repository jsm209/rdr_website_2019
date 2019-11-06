import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle, Button, CardHeader,
  CardTitle, CardFooter } from 'reactstrap';

// Given props with:
// data.title - title of show
// data.description - description of show
// data.url - website of show
// data.id - id of show
//    (use this URL for linking to appropriate website: https://spinitron.com/Rainy-Dawg/show/ID_HERE)
// data._links.shows.href

// Will return a ReactStrap card with the given information.
// props.data is assumed to be the individual JSON objects returned by
// requesting the endpoint "personas" from the Spinitron V2 API.
function ShowCard(props) {

  const userLink = "https://spinitron.com/Rainy-Dawg/show/" + props.data.id

  let cardstyle = {
    padding: "10px",
    width: "300px",
    height: "auto",
    color: "black"
  }

  let imgstyle = {
    height: "150px", 
    width: "150px", 
    display: "block",
    margin: "auto"
  }

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

  let textbox = {
    height: '120px',
    width: 'auto',
    overflow: 'auto',
    fontSize: '16px', 
    textAlign: 'left', 
    paddingTop: '10px'
  }

  // Small issue: some descriptions for shows have <p> </p> surrounding its
  // text. I can't tell if this was an error on spinitron's part, but if not,
  // then later implement a replace to get rid of the <p>'s.'

  return (
    <div style={cardstyle}>
      <Card body inverse style={{ backgroundColor: 'black', borderColor: '#333' }}>
        <CardHeader tag="h3" style={headerstyle}>{props.data.title}</CardHeader>
        <CardImg style={imgstyle} src={props.data.image} alt={props.data.name}/>
        <CardBody>
          <CardSubtitle style={{fontSize: 12}}>{props.data.url}</CardSubtitle>
          <CardSubtitle style={{fontSize: 12}}>{props.data.category == "unset" ? "Genre N/A" : props.data.category}</CardSubtitle>
          {/* The monstrosity of a line below checks if description is null and if so, says so. */}
          <CardText style={textbox}>{props.data.description ? props.data.description.replace('<p>', '').replace('</p>', '') : "This show doesn't have a description yet!"}</CardText>
          <a href={userLink}><Button style={buttonstyle}>More</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShowCard;
