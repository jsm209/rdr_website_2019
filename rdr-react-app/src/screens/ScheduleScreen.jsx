import React from 'react';

import { Container, Row, Col } from 'reactstrap';

class ScheduleScreen extends React.Component {

	render() {
        // Each day will hold the names of the shows for that day.
        // Each day has 16 hours.
        // Each hour/index is one show slot.
        // After getting all the shows in each day, render it out into a grid.
        let days = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: []
        };

        let hoursPerDay = 16;

        // Rendering out the grid:
        // Loop 16 times, one row for each hour.
        // On each loop, loop thru all the properties in days
        // add a col-6 column 6 times, one for each ith index in each day.

        for (let i = 0; i < hoursPerDay; i++) {
            let row = <Row></Row>;
        }
    

		return(
			<div>
                {/* Each row is a time, each column is a day 
                    So Y-Axis is time and X-axis is day */}
				<Container>
                    {/* 8AM */}
                    <Row class="time 8am">

                    </Row>

                    {/* 9AM */}
                    <Row class="time 9am">

                    </Row>


                    {/* 10AM */}
                    <Row class="time 10am">

                    </Row>


                    {/* Thursday */}
                    <Row id="thursday">

                    </Row>

                    {/* Friday */}
                    <Row id="friday">

                    </Row>

                    {/* Saturday */}
                    <Row id="saturday">

                    </Row>
                    
                </Container>
			</div>
		)
	}
}

export default ScheduleScreen;