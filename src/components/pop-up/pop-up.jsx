import React from 'react';

import moment from 'moment';
import actions from '../actions';

import './pop-up.css';

export const PopUp = (props) => {
    const isVisible = (props.isVisible) ? 'visible' : '';
    const startTime = moment(props.reservedDate).format('HH:mm');
    const endTime = moment(props.reservedDate).add(30, 'minutes').format('HH:mm');

    const onClick = (event) => {
        const target = event.target;

        if (actions.reserve === target.id) {
            props.popupClickHandler(actions.reserve);
        } else if (actions.cancel === target.id) {
            props.popupClickHandler(actions.cancel);
        }
    }

    return (
        <div id="modal-background" className={isVisible}>
          <div id="pop-up" className={isVisible}>
            <div className="popup-content" onClick={onClick}>
                <header>
                    <span className="label">Termin</span>
                    <span id="cancel">×</span>
                </header>
                
                <h3>Odabrani datum: {moment(props.selectedDate).format('DD.MM.YYYY')}</h3>
                <input type="text" id="inputField" value={startTime + " - " + endTime} disabled/>
                <button id="reserve" className="button-popup">Rezerviraj termin</button>
            </div>
          </div>
        </div>
    )
}