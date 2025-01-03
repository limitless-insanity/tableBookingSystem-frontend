// import React from 'react';

// function BookingSummary({ bookingData }) {
//   return (
//     <div>
//       <h2>Booking Confirmed!</h2>
//       <p>Date: {bookingData.date}</p>
//       <p>Time: {bookingData.time}</p>
//       <p>Guests: {bookingData.guests}</p>
//       <p>Name: {bookingData.name}</p>
//       <p>Contact: {bookingData.contact}</p>
//     </div>
//   );
// }

// export default BookingSummary;
import React from 'react';
import './BookingSummary.css';

function BookingSummary({ bookingData }) {
  return (
    <div className="summary-container">
      <h2>Booking Confirmed!</h2>
      <p>Date: {bookingData.date}</p>
      <p>Time: {bookingData.time}</p>
      <p>Guests: {bookingData.guests}</p>
      <p>Name: {bookingData.name}</p>
      <p>Contact: {bookingData.contact}</p>
    </div>
  );
}

export default BookingSummary;
