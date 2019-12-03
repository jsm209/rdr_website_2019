import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import ScheduleCarousel from '../components/ScheduleCarousel';
import CreateSchedule from '../components/CreateSchedule';

class ScheduleScreen extends React.Component {

    createBlock(showName) {

        let style = {
            width: "100px",
            height: "100px",
            backgroundColor: "yellow",
            borderStyle: "solid",
            borderWidth: "5px",
            margin: "5px"
        };

        return (<Col className="col-2"><div style={style}>{showName}</div></Col>);
    }

    createRow(days, hour) {
        let rowContent = [];
        for (let i = 0; i < days.length; i++) {
            rowContent.push(this.createBlock(days[i][hour]));
        }
    return (<Row>{rowContent}</Row>);
    }

	render() {
        // Each day will hold the names of the shows for that day.
        // Each day has 16 hours.
        // Each hour/index is one show slot.
        // After getting all the shows in each day, render it out into a grid.

        let days = [
            /* Monday */ ["Monday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            /* Tuesday */ ["Tuesday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            /* Wednesday */ ["Wednesday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            /* Thursday */ ["Thursday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            /* Friday */ ["Friday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
            /* Saturday */ ["Saturday", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
        ];

        let hoursPerDay = 16;

        // Rendering out the grid:
        // Loop 16 times, one row for each hour.
        // On each loop, loop thru all the properties in days
        // add a col-6 column 6 times, one for each ith index in each day.
        let schedule = []; // array of arrays for every row.
        for (let i = 0; i < hoursPerDay + 1; i++) {
            schedule.push(this.createRow(days, i));
        }
    

		return(
			<div>
                {/* Each row is a time, each column is a day 
                    So Y-Axis is time and X-axis is day */}
                {/*
                <h1 style={{paddingTop: '6%'}}>Schedule</h1>
				<Container>
                    {schedule}
                </Container>
                */}
                <CreateSchedule />

			</div>
		)
	}
}

export default ScheduleScreen;