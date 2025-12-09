import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer} from 'react';
import './App.css';
import Nav from './components/Nav'
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'
import Footer from './components/Footer';
import {  updateTimes,initializeTimes } from './bookingReducer';




function App() {
  
const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes); 

    
    


  return (
    <Router>
      <Nav />
      <main>
        <Routes>

          <Route path="/" element={<HomePage />} />


          <Route path="/reservations" element={
                            // 💡 لا يوجد شرط تحميل بعد الآن
                            <BookingPage 
                                availableTimes={availableTimes} 
                                dispatch={dispatch} 
                            />
                        }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
