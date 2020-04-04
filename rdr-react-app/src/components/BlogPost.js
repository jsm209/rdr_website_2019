

import React, { useState } from 'react';
import he from 'he';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Given props with:
// data.title - title of post
// data.body - body of post. in html form. may contain image.
// data.date - string with date and time.
// data.post_url - link to full post.

// Will return a ReactStrap card with the given information.
// props.data is assumed to be the individual JSON objects returned by
// requesting the endpoint "personas" from the Spinitron V2 API.
function BlogPost(props) {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // Styles  
  let boxStyle = {
    width: "300px",
    height: "180px",
    margin: "10px",
    border: "1px solid white",
    zIndex: 2
  };

  let titleStyle = {
    width: "250px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  };

  let strippedBody = props.post.body.replace(/<[^>]+>/g, '');
  strippedBody = strippedBody.slice(0,100);
  strippedBody = he.decode(strippedBody);
  strippedBody = strippedBody + "... (see more)"

  // Converting dates like 2020-03-04 to March 4 2020
  let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = allMonths[Number(props.post.date.slice(5, 7)) - 1];
  let totalDate = Number(props.post.date.slice(8, 10)) + " " + month + " " + props.post.date.slice(0, 4);

  return (
    <div className='blogPreviewBox' style={boxStyle} onClick={toggle}>
      <div style={titleStyle}>
        <p style={{fontWeight:"bold"}}>{props.post.title} </p>
        {strippedBody}
        <br />
        <span style={{fontWeight:"bold"}}>({totalDate})</span>
      </div>
      {console.log(props.post)}
      {console.log(props)}

      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>{props.post.title}</ModalHeader>
        <ModalBody>
          <div dangerouslySetInnerHTML={{ __html: props.post.body }} />}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" href={props.post.post_url}>Check it out on Tumblr</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BlogPost;
