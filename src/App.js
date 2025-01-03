// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import BookingForm from './components/BookingForm/BookingForm';
// import AvailabilityDisplay from './components/AvailabilityDisplay/AvailabilityDisplay';
// import BookingSummary from './components/BookingSummary/BookingSummary';

// function App() {
//   const [bookingData, setBookingData] = useState(null);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   return (
//     <div className="App">
//       {!isConfirmed ? (
//         <>
//           <BookingForm setBookingData={setBookingData} />
//           {bookingData && (
//             <AvailabilityDisplay bookingData={bookingData} setIsConfirmed={setIsConfirmed} />
//           )}
//         </>
//       ) : (
//         <BookingSummary bookingData={bookingData} />
//       )}
//     </div>
//   );
// }

// export default App;


//after adding timeline and calenderview

import React, { useState } from 'react';
import CalendarView from './components/CalendarView/CalendarView';
import TimelineView from './components/TimelineView/TimelineView';
import BookingForm from './components/BookingForm/BookingForm';
import BookingSummary from './components/BookingSummary/BookingSummary';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState(['12:00 PM', '1:00 PM', '2:00 PM']);
  const [bookedSlots, setBookedSlots] = useState(['1:30 PM']);
  const [bookingData, setBookingData] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSlotSelection = (slot) => {
    setBookingData((prev) => ({ ...prev, slot }));
    setIsConfirmed(true);
  };

  return (
    <div className="App">
      {!isConfirmed ? (
        <>
          <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <TimelineView
            availableSlots={availableSlots}
            bookedSlots={bookedSlots}
            handleSlotSelection={handleSlotSelection}
          />
          <BookingForm setBookingData={setBookingData} />
        </>
      ) : (
        <BookingSummary bookingData={bookingData} />
      )}
    </div>
  );
}

export default App;
