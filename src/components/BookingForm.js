
import React, { useState } from 'react';
import './BookingForm.css';
import { submitAPI } from '../api'
import {  useNavigate } from 'react-router-dom';

function BookingForm(props) {
    const navigate = useNavigate();


    const [date, setDate] = useState('');
    const [time, setTime] = useState(props.availableTimes?.[0] || '17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');


    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);


        props.dispatch({
            type: 'UPDATE_TIMES',
            payload: newDate
        })
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            time,
            guests,
            occasion
        };
      
        if (submitAPI(formData)) {
            // 🛑 6. التوجيه إلى صفحة التأكيد أو عرض رسالة
            // لنفترض أنك قمت بإنشاء مسار تأكيد (Confirmation) في App.js
            
            navigate("/confirmed", { state: formData }); 
            
            
        } else {
            // معالجة الفشل
            alert("Reservation submission failed. Please try again.");
        }
    };
    


    return (
        <form className="booking-form" onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required value={date}
                    onChange={handleDateChange} />
            </div>

            <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required value={time}
                    onChange={(e) => setTime(e.target.value)}>
                    {props.availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests}
                    onChange={(e) => setGuests(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

            {/* زر الإرسال */}
            <input type="submit" value="Make Your Reservation" className="submit-button" />
        </form>
    );
}

export default BookingForm;