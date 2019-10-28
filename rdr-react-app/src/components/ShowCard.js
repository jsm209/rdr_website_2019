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

  let styles = {
    padding: "10px",
    width: "350px",
    height: "auto",
    color: "black"
  }


  // Small issue: some descriptions for shows have <p> </p> surrounding its
  // text. I can't tell if this was an error on spinitron's part, but if not,
  // then later implement a replace to get rid of the <p>'s.'
  return (
    <div style={styles}>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardHeader tag="h3">{props.data.title}</CardHeader>
        <CardImg style={{height: "auto", width: "300px"}} src={props.data.image} alt={props.data.name}/>
        <CardBody>
          <CardSubtitle style={{fontSize: 12}}>{props.data.url}</CardSubtitle>
          <CardText style={{fontSize: 16, textAlign: "left", paddingTop: "10px"}}>{props.data.description ? props.data.description : "This show doesn't have a description yet!"}</CardText>
          <a href={userLink}><Button>More</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShowCard;
