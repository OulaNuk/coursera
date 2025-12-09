import React from 'react';
import './BookingSlot.css';


function BookingSlot({ time, isBooked }) {
    
    const slotClass = isBooked ? 'slot-booked' : 'slot-available';

    return (
        <div className={`booking-slot ${slotClass}`}>
            {time}
        </div>
    );
}

export default BookingSlot;