import React from 'react';

import CreateDjCards from '../components/CreateDjCards';

class MembersScreen extends React.Component {
	render() {
        let style = {
            textAlign: "left",
            fontFamily: "Gaegu",
            padding: "8% 10%"
        }

		return(
			<div style={style}>
				<h1>Members</h1>
                <CreateDjCards />
			</div>
		)
	}
}

export default MembersScreen;