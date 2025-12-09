import React from 'react';
import BookingSlot from './BookingSlot';
import './BookingSlotsList.css';

// هذا المكون يستقبل قائمة الأوقات كـ prop
function BookingSlotsList({ availableTimes }) {
    if (!availableTimes || availableTimes.length === 0) {
        return <p>No available slots for this date.</p>;
    }

    return (
        <div className="slots-list-container">
            <h2>Available Times</h2>
            <div className="slots-grid">
                {availableTimes.map((time, index) => (
                    <BookingSlot key={index} time={time} isBooked={false} />
                ))}
            </div>
        </div>
    );
}

export default BookingSlotsList;