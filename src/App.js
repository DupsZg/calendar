import React, { Component, Fragment} from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Header from './components/header/header';
import {Aside} from './components/aside/aside';
import {Main} from './components/main/main';
import {PopUp} from './components/pop-up/pop-up';
import Timeline from './components/timeline/time-line';

import actions from './components/actions';

class App extends Component {

  state = {
    date: new Date(),
    isPopupVisible: false,
    reservedDate: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.date !== nextState.date || this.state.isPopupVisible !== nextState.isPopupVisible;
  }
 
  onChange = (date) => {
    if (this.state.date.toLocaleDateString() !== date.toLocaleDateString()) {
      this.setState({
        ...this.state,
        date: date,
        reservedDate: null
      });
    }
  };

  popupClickHandler = (action) => {
    if (actions.reserve === action) {
      this.setState({
        ...this.state,
        isPopupVisible: false
      });
    } else if (actions.cancel === action) {
        this.cancelHandler();
        this.setState({
          ...this.state,
          isPopupVisible: false,
          reservedDate: null
        });
    }
  };
  
  onReservation = (reservedDate, onCancel) => {
    if (this.state.reservedDate !== null) {
      onCancel();
      alert('Nije moguće rezervirati više od jednog termina dnevno');
      return;
    }

    this.setState({
      ...this.state,
      isPopupVisible: true,
      reservedDate: reservedDate
    });

    this.cancelHandler = onCancel;
  };
 
  render() {
    return (
      <Fragment>
        <Header/>
        <Main>
          <Aside>
            <Calendar
              className = "calendar"
              onChange = {this.onChange}
              value = {this.state.date}
            />
          </Aside>
          <Timeline selectedDate = {this.state.date} reservationHandler={this.onReservation}/>
        </Main>
        <PopUp isVisible={this.state.isPopupVisible} selectedDate={this.state.date} reservedDate={this.state.reservedDate} popupClickHandler={this.popupClickHandler} />
      </Fragment>
    );
  }
}

export default App;
