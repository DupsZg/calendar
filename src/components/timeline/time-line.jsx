import React, { useState, useEffect } from 'react'

import TimelineRow from './timeline-row/timeline-row';

import './time-line.css';

const WORKING_HORUS = {
    start: 8,
    end: 19
};

const Timeline = (props) => {
    const[selectedDate, setSelectedDate] = useState(props.selectedDate);
    const[workingDates, setWorkingDates] = useState([]);

    let morningShift = true,
        workingDay = false,
        isBreak = false;

    function startWorkingHours() {
        let dayOfWeek = props.selectedDate.getDay(),
            dateOfDay = props.selectedDate.getDate();

        if (dayOfWeek === 6) {
			if (evenDay(dateOfDay)) {
				workingDay = true;
			}
		} else if (dayOfWeek !== 0) {
			if (evenDay(dateOfDay)) {
				workingDay = true;
			} else {
                workingDay = true;
				morningShift = false;
			}
		}
    }

    function evenDay(dayOfWeek) {
        if (dayOfWeek % 2 === 1) {
            return false;
        } else {
            return true;
        }
    }

    function getRandomInt(max) {
		  return Math.floor(Math.random() * Math.floor(max));
	}

    useEffect(() => {
        const dates = [];

        for (let i = WORKING_HORUS.start; i <= WORKING_HORUS.end; i ++) {
            startWorkingHours();

            dates.push({
                date: new Date(selectedDate.setHours(i, 0, 0)),
                isWorkingDay: workingDay,
                isMorningShift:  ((morningShift && i < 14) || (!morningShift && i > 12) ) ? true : false,
                isBreak: (i=== 11 || i === 16) ? true : isBreak,
                isOccupied: ((i!== 11 && i !== 16) && getRandomInt(2)) ? true : false
            });

            if (i < WORKING_HORUS.end) {
                dates.push({
                    date: new Date(selectedDate.setHours(i, 30, 0)),
                    isWorkingDay: workingDay,
                    isMorningShift: ((morningShift && i < 14) || (!morningShift && i > 12) ) ? true : false,
                    isBreak: isBreak,
                    isOccupied: ((i!== 11 && i !== 16 ) && getRandomInt(2)) ? true : false
                });
            }
        }

        setSelectedDate(props.selectedDate);
        setWorkingDates(dates);
    }, [props.selectedDate]);

    return (
        <ul className="time-line-list">
            {workingDates.map((entry, index) => <TimelineRow key={index} isWorkingDay={entry.isWorkingDay} isMorningShift={entry.isMorningShift}
            isBreak={entry.isBreak} isOccupied={entry.isOccupied} date={entry.date} reservationHandler={props.reservationHandler}/>)}
        </ul>
    )
}


export default Timeline;