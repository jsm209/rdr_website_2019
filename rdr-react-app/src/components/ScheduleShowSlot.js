

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


/* Given an object with the following properties, create a 
show slot component to be used in a schedule/table&row display:
  "showName":"The Cloutlet",
  "showGenre": "Hip-Hop",
  "djName": "Evan Maun",
  "showImageURL": "https://spinitron.com/images/Show/10/73/107367-img_show.225x225.jpg?v=1569905321",
  "showPageURL": "https://spinitron.com/Rainy-Dawg/show/107367/The-Cloutlet" 
*/
function ScheduleShowSlot(props) {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Border color to genre object
  let genreColors = {
    "Alternative/Experimental": "orange",
    "Classical": "Brown",
    "Country": "Yellow",
    "Electronic": "Aqua",
    "Hip-Hop": "HotPink",
    "Indie": "SandyBrown",
    "Jazz": "Blue",
    "Metal": "Red",
    "Other/Specialty": "BlueViolet",
    "Pop": "Chatreuse",
    "R&B": "Crimson",
    "Rock": "SlateGrey",
    "Talk": "SpringGreen",
    "Unset": "Black",
    "Variety": "Fuchsia",
    "World": "YellowGreen"
  }

  // Styles  
  let boxStyle = {
    width: "100px",
    height: "100px",
    border: "5px solid " + genreColors[props.showGenre],
    backgroundImage: "url(" + props.showImageURL + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  let titleStyle = {
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "10px"
  };

  let iframeStyle = {
    margin: "0px",
    width: "100%",
    height: "100%",
    border: "none"
  }


  return (
    
    <div className='showPreviewBox' style={boxStyle} onClick={toggle}>
      <p style={titleStyle}>
        <span style={{backgroundColor:"black"}}>
          {props.showName}
        </span>
        
        <br />

        <span style={{fontStyle:"italic", backgroundColor: "black"}}>({props.showGenre} with {props.djName})</span>
      </p>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{props.showName}</ModalHeader>
        <ModalBody style={{height: "450px"}}>
          <iframe src={props.showPageURL} style={iframeStyle}></iframe>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" href={props.showPageURL}>Check it out on Spinitron</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ScheduleShowSlot;
