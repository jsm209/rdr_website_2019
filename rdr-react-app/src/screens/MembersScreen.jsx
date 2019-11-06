import React from 'react';

import CreateDjCards from '../components/CreateDjCards';

class MembersScreen extends React.Component {
	render() {
		return(
			<div>
				<h1>Members</h1>
                <CreateDjCards />
			</div>
		)
	}
}

export default MembersScreen;