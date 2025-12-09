import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
    // 🚀 استخدام useLocation لجلب البيانات المُمررة أثناء التوجيه (navigate)
    const location = useLocation();
    const bookingDetails = location.state;

    // حالة احتياطية إذا تم الوصول إلى الصفحة مباشرة دون إرسال نموذج
    if (!bookingDetails) {
        return (
            <div className="confirmed-container">
                <div className="confirmed-card error">
                    <h1>Booking Confirmed!</h1>
                    <p>Your reservation was successful, but we couldn't retrieve the details.</p>
                    <p>Please check your email for confirmation.</p>
                </div>
            </div>
        );
    }

    // عرض رسالة التأكيد وتفاصيل الحجز
    return (
        <div className="confirmed-container">
            <div className="confirmed-card">
                <h1 className="confirmed-title">Reservation Confirmed! 🎉</h1>
                <p className="confirmed-message">
                    Thank you for choosing Little Lemon. Your table has been successfully reserved.
                </p>
                
                <div className="details-box">
                    <h3>Booking Details:</h3>
                    <p>🗓️ Date: <strong>{bookingDetails.date}</strong></p>
                    <p>⏰ Time: <strong>{bookingDetails.time}</strong></p>
                    <p>👥 Guests: <strong>{bookingDetails.guests}</strong></p>
                    <p>🎈 Occasion: <strong>{bookingDetails.occasion}</strong></p>
                </div>

                <p className="footer-note">We look forward to seeing you!</p>
            </div>
        </div>
    );
}

export default ConfirmedBooking;