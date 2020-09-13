import React from 'react';

import './timeline-row.css';
import { useState } from 'react';
import { useEffect } from 'react';

const TimelineRow = (props) => {
    const[statusClass, setStatusClass] = useState('');
    const[textContent, setTextContent] = useState('');
    

    useEffect(() => {
        let content = '';

        if (props.isWorkingDay) {
            if (props.isBreak && props.isMorningShift) {
                content = 'PAUZA';
            } else if (props.isOccupied && props.isMorningShift) {
                content = 'REZERVIRAN TERMIN';
            } else if (props.isMorningShift) {
                content = '';
            }
        }

        setTextContent(content);
    }, [props.date]);

    useEffect(() => {
        let timelineRowClass = 'disabled-timeline-row';

        if (props.isWorkingDay) {
            if (props.isBreak && props.isMorningShift) {
                timelineRowClass = 'timeline-row-break';
            } else if (props.isOccupied && props.isMorningShift) {
                timelineRowClass = 'timeline-row-occupied';
            } else if (props.isMorningShift) {
                timelineRowClass = 'timeline-row';
            }
        }

        setStatusClass(timelineRowClass);
    }, [props.date]);

    const appendLeadingZero = (value) => {
        if (value <= 9) {
            return '0' + value;
        }

        return value;
    };

    const clickHandler = (event) => {
        if (!props.isWorkingDay) {
            alert('Nemoguće rezervirati termin na neradni dan');
            return;
        }

        if (props.isBreak) {
            alert('Nije moguće odabrati termin u vrijeme pauze');
            return;
        }

        if (props.isOccupied) {
            alert('Odabrani termin je već zauzet');
            return;
        }

        if (!props.isMorningShift) {
            alert('Odabrani termin nije u radnom vremenu');
            return;
        }

        setStatusClass('timeline-row-occupied');
        setTextContent('REZERVIRAN TERMIN');

        props.reservationHandler(props.date, onCancel);
    };

    const onCancel = () => {
        setStatusClass('timeline-row');
        setTextContent('');
    };

    return (
        <div className={statusClass} onClick={clickHandler} 
        time={appendLeadingZero(props.date.getHours()) + ":" + appendLeadingZero(props.date.getMinutes())}>
            <span>{textContent}</span>
        </div>
    )
}

export default TimelineRow;