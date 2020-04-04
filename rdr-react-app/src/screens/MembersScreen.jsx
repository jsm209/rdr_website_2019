import React from 'react';

import CreateDjCards from '../components/CreateDjCards';

class MembersScreen extends React.Component {
	render() {
        let style = {
            textAlign: "left",
            //fontFamily: "Gaegu",
            padding: "8% 10%"
        }

        let imageStyle = {
            width: "20%",
			height: "auto",
			display: "block",
			position: "absolute",
			float: "right",
			right: "40px",
			top: "40px",
			zIndex: 0
        }

		return(
			<div style={style}>
				<h1>Current DJs</h1>
				<img style={imageStyle} src='./images/icon-penguin.png'/>
                <CreateDjCards />
			</div>
		)
	}
}

export default MembersScreen;