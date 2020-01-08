import React from 'react';
import ScheduleRowBox from './ScheduleRowBox';

let containerStyle = {
    width: '80%',
    margin: 'auto'
}

let rowStyle = {
    backgroundColor: '#333',
    width: 'auto',
    overflow: 'auto',
    whiteSpace: 'nowrap'
};

let titleStyle = {
    margin: 'auto',
    textAlign: 'center'
}

function ScheduleRow(props) {

    // 14 show slots per day...

    let showBoxes = [];
    for(let i = 0; i < 14; i++) {
        showBoxes.push(<ScheduleRowBox />);
    }

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>{props.title}</h2>
            <div style={rowStyle}>
                {showBoxes}
            </div>
        </div>

    );
};

export default ScheduleRow;