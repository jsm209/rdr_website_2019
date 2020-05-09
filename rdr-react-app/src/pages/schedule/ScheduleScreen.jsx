import React from 'react';

import data from '../../data/showData.json';

import { Container, Row, Col } from 'reactstrap';
import ScheduleCarousel from '../../components/ScheduleCarousel';
import CreateSchedule from '../../components/CreateSchedule';

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
        // Each hour/index is one show slot.
        // After getting all the shows in each day, render it out into a grid.

        

        // Rendering out the grid:
        // Loop 16 times, one row for each hour. (15 hours M-TH, 16 hours on F and SA)
        // On each loop, loop thru all the properties in days
        // add a col-6 column 6 times, one for each ith index in each day.
        /*
        let schedule = []; // array of arrays for every row.
        for (let i = 0; i < hoursPerDay + 1; i++) {
            schedule.push(this.createRow(days, i));
        }
        */


        let iframeStyle = {
            width: "100%", 
            height: "3000px", 
            width: "100%",
            frameborder: "0",
            scrolling: "auto",
            backgroundColor: "white"
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
                {/*<CreateSchedule />*/}
                {/* holy shit i just made an entire system only to replace it with this iframe wtfffff*/}
                <iframe loading="lazy" className="lazyloaded" src="https://spinitron.com/Rainy-Dawg/calendar/?bodyclass=simple" style={iframeStyle} onload="scro11me(this)" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://spinitron.com/Rainy-Dawg/calendar/?bodyclass=simple" data-was-processed="true"></iframe>

			</div>
		)
	}
}

export default ScheduleScreen;