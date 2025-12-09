
import React from 'react';
import BookingForm from '../components/BookingForm';
import './BookingPage.css'
import BookingSlotsList from '../components/BookingSlotsList';

function BookingPage(props) {
  return (
    <div className="booking-page-container">
      <div className="booking-content-wrapper">
        <h1 className="booking-title">Reserve a Table</h1>
        <BookingForm availableTimes={props.availableTimes}
            dispatch={props.dispatch} />
        <BookingSlotsList 
            availableTimes={props.availableTimes} 
        />    
      </div>
    </div>
  );
}

export default BookingPage;