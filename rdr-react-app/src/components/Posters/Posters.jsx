import React, { setState } from 'react';
import './Posters.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const posterLocation = [
	"./images/poster/emeraldnoise.png",
	"./images/poster/spring2020episode1.png",
	"./images/poster/spring2020episode2.jpg",
	"./images/poster/spring2020episode5.png"
]

const width = [-10, -20, 0, 3];

export class Posters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            imageInfo: {
                src: "",
                alt: ""
            }
        };
    }

    popUp = (event) => {
        this.setState({
            modal: true,
            imageInfo: {
                src: event.target.src,
                alt: event.target.alt
            }
        });
    }

	render() {
        console.log(this.state.modal);
		const posters = posterLocation.map((source) => {
            const altText = source.split('/')[3];
            return <img onClick={this.popUp}
                className="poster" src={source} alt={altText} />
        });
        
		return <div>
            <PopUp isOpen={this.state.modal} image={this.state.imageInfo}
                toggle={() => { this.setState({modal: !this.state.modal}); }} />
            <div className="posters">
                {posters}
            </div>
        </div>;
	}
}

class PopUp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="poster-popup" size="lg">
            <ModalBody>
                <img src={this.props.image.src} />
            </ModalBody>
      </Modal>
    }
}