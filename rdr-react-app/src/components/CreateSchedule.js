import React from 'react'

import ScheduleCarousel from './ScheduleCarousel';
import shows from '../data/showtimes';
// This component will get all the profile information for the current shows
// and display them as ShowCards.
class CreateSchedule extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {

    let styles = {
      display: "flex",
      flexWrap: "wrap",
      margin: "auto"
    }

    return(
      <div style={styles}>
        <ScheduleCarousel day='Monday'/>
        <ScheduleCarousel day='Tuesday'/>
        <ScheduleCarousel day='Wednesday'/>
        <ScheduleCarousel day='Thursday'/>
        <ScheduleCarousel day='Friday'/>
        <ScheduleCarousel day='Saturday'/>
      </div>
    );
  }
}

export default CreateSchedule
