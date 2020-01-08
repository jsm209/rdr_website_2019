import React from 'react'

import data from '../data/showData.json';

import ScheduleCarousel from './ScheduleCarousel';
import shows from '../data/showtimes';
import ScheduleRow from './ScheduleRow';

import ScheduleShowSlot from './ScheduleShowSlot';

// This component will get all the profile information for the current shows
// and display them as ShowCards.
class CreateSchedule extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }

  componentDidMount() {
    console.log(data);
  }

  /* Given an object with the following properties, create a 
  show slot component to be used in a schedule/table&row display:
    "showName":"The Cloutlet",
    "showGenre": "Hip-Hop",
    "djName": "Evan Maun",
    "showImageURL": "https://spinitron.com/images/Show/10/73/107367-img_show.225x225.jpg?v=1569905321",
    "showPageURL": "https://spinitron.com/Rainy-Dawg/show/107367/The-Cloutlet" 
  */

  // Returns an array of arrays, represented like [day of the week][show component],
  // where the days of the week correspond from 0 = monday, 1 = tuesday, etc. until saturday,
  // and where each day contains an array of show slot components. 
  createShowSlotComponents() {
    let showSlots = [];
    for (var day in this.state.data) {
      let curDay = [];
      curDay.push(this.createLabelSlot(day));
      for (let i = 0; i < this.state.data[day].length; i++) {
        curDay.push(<ScheduleShowSlot {...this.state.data[day][i]}/>)
      }
      showSlots.push(curDay);
    }
    return showSlots;
  }

  // Creates a component identical to the ScheduleShotSlot component, but
  // instead takes in some text and displays it.
  createLabelSlot(text) {
    let labelSlotStyle = {
      width: "100px",
      height: "100px"
    }

    let titleStyle = {
      width: "70px",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "14px"
    };

    return(
      <div style={labelSlotStyle}>
        <p style={titleStyle}>{text}</p>
      </div>
    )
  }

  // Will create a column of times appropriate for 
  // the rainy dawg schedule grid
  createTimeLabelColumnArray() {

    let timeColumn = [];

    // We push an empty box first to account for the top left corner.
    timeColumn.push(this.createLabelSlot(""));

    // Shows start at 8AM and on the latest days, shows end at 11PM.
    // hence i = 8 until i <= 23
    for (let i = 8; i <= 23; i++) { 
      let label = "";
      if (i < 11) { // Before 11AM
        label = i + "AM-" + (i + 1) + "AM";
      } else if (i == 11) { // At 11AM
        label = i + "AM-" + (i + 1) + "PM";
      } else if (i == 12) { // At Noon
        label = i + "PM-" + (i + 1 - 12) + "PM";
      } else { // Any time after noon
        label = (i - 12) + "PM-" + (i + 1 - 12) + "PM";
      }
      timeColumn.push(this.createLabelSlot(label));
    }
    
    return timeColumn;
  }

  render() {

    let d = new Date();

    // subtracting 1 because by default, getDay() references sunday as 0th index.
    // I used monday as a 0th index.
    let dayOfWeek = d.getDay() - 1; 
    console.log(dayOfWeek);

    // Gets current screen width.
    // We're going to assume < 500 is mobile.
    let screenWidth = document.documentElement.clientWidth;


    // General idea for getting only one column to display:
    // assign class names to each column
    // going to assign two types, normalcolumn and todaycolumn.
    // a column will get todaycolumn class if its index matches today's day of the week.
    // then write a media query to only show todaycolumn and hide normalcolumn if we're on mobile (screen width less than 500 or something)

    // Vertical flexbox style (for each column)
    let columnStyle = {
      flexDiection: "column"
    }

    // Horizontal flexbox style (for all the columns)
    let scheduleStyle = {
      display: "flex",
      flexDiection: "row",
      flexWrap: "nowrap",
      justifyContent: "start",
      alignItems: "flex-start",    
      margin: "auto",
      width: "70%"
    }

    // An array of arrays where the first index is the day of the week (Mon-Sat)
    // and the second index is the schedule show slot component for that hour.
    let schedule = this.createShowSlotComponents();

    let allColumns = [];
    for (let i = 0; i < schedule.length; i++) {
      let className = "";
      i == dayOfWeek ? className = "scheduleColumnToday" : className = "scheduleColumnOther";
      console.log(className);
      allColumns.push(<div style={columnStyle} className={className}>{schedule[i]}</div>);
    }    

    return(
      <div style={scheduleStyle}>
        <div style={columnStyle}>
          {this.createTimeLabelColumnArray()}
        </div>
        {allColumns}
      </div>

    );
  }
}

export default CreateSchedule
