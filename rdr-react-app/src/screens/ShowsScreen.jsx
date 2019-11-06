import React from 'react';

import CreateShowCards from '../components/CreateShowCards';

class ShowsScreen extends React.Component {
	render() {
		return(
			<div>
				<h1>Shows</h1>
                <CreateShowCards />
			</div>
		)
	}
}

export default ShowsScreen;