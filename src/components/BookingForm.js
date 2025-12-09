
import React, { useState } from 'react';
import './BookingForm.css';
import { submitAPI } from '../api'
import { useNavigate } from 'react-router-dom';

function BookingForm(props) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState(props.availableTimes?.[0] || '17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = (date, time, guests, name,  email) => {

        const isRequiredValid = date && time &&   email;
        
        const isNameLengthValid = name.length >= 2;
        const numGuests = Number(guests);
        const isGuestsValid = guests >= 1 && guests <= 10;


        const isEmailFormatValid = email.includes('@') && email.includes('.');

        
        return isRequiredValid && isNameLengthValid &&  isGuestsValid && isEmailFormatValid;
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        const validity = validateForm(date, time, guests, newName, email);
        setIsFormValid(validity);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        const validity = validateForm(date, time, guests, name, newEmail);
        setIsFormValid(validity);
    };
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);


        props.dispatch({
            type: 'UPDATE_TIMES',
            payload: newDate
        })

        const validity = validateForm(newDate, time, guests, name, email);
        setIsFormValid(validity);
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


            navigate("/confirmed", { state: formData });


        } else {

            alert("Reservation submission failed. Please try again.");
        }
    };



    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group"> <label htmlFor="res-name">Enter Your Name  </label>
                <input
                    type="text"
                    id="res-name"

                    value={name}
                    onChange={handleNameChange}
                    required
                    minLength="2"
                /></div>

            <div className="form-group"><label htmlFor="res-email">Enter Your E-Mail </label>
                <input
                    type="email"
                    id="res-email"

                    value={email}
                    onChange={handleEmailChange}
                    required
                /></div>
            <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required value={date}
                    onChange={handleDateChange} />
            </div>

            <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required value={time}
                    onChange={(e) => {
                        const newTime = e.target.value;
                        setTime(newTime);
                        const validity = validateForm(date, newTime, guests, name, email);
                        setIsFormValid(validity);
                    }}>
                    {props.availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests}
                   onChange={(e) => {
        
        const newGuests = Number(e.target.value); 
        setGuests(newGuests);
        
        
        const validity = validateForm(date, time, newGuests, name, email);
        setIsFormValid(validity);
    }} />
            </div>

            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion}
                    onChange={(e) => {
                        const newOccasion = e.target.value;
                        setOccasion(newOccasion);
                        const validity = validateForm(date, time, guests, name, email);
                        setIsFormValid(validity);
                    }}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>

           
            <input type="submit" value="Make Your Reservation" className="submit-button" disabled={!isFormValid} aria-label="On Click"/>
        </form>
    );
}

export default BookingForm;