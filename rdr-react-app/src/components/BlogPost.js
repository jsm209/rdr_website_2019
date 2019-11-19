

import React, { useState } from 'react';
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
    width: "180px",
    height: "180px",
    margin: "10px",
    border: "1px solid white"
  };

  let titleStyle = {
    width: "120px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  };

  return (
    
    <div className='blogPreviewBox' style={boxStyle} onClick={toggle}>
      <p style={titleStyle}>{props.post.title}</p>

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
