// import React, { useEffect, useState } from 'react';
// import { checkAvailability } from '../../services/api';

// function AvailabilityDisplay({ bookingData, setIsConfirmed }) {
//   const [availableSlots, setAvailableSlots] = useState([]);

//   useEffect(() => {
//     async function fetchAvailability() {
//       const slots = await checkAvailability(bookingData);
//       setAvailableSlots(slots);
//     }
//     fetchAvailability();
//   }, [bookingData]);

//   const handleBooking = () => setIsConfirmed(true);

//   return (
//     <div>
//       {availableSlots.length > 0 ? (
//         <ul>
//           {availableSlots.map((slot, index) => (
//             <li key={index} onClick={handleBooking}>
//               {slot}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No slots available</p>
//       )}
//     </div>
//   );
// }

// export default AvailabilityDisplay;

import React, { useEffect, useState } from 'react';
import { checkAvailability } from '../../services/api';
import './AvailabilityDisplay.css';

function AvailabilityDisplay({ bookingData, setIsConfirmed }) {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    async function fetchAvailability() {
      const slots = await checkAvailability(bookingData);
      setAvailableSlots(slots);
    }
    fetchAvailability();
  }, [bookingData]);

  const handleBooking = (slot) => {
    setIsConfirmed(true);
  };

  return (
    <div className="availability-container">
      <h2>Available Slots</h2>
      <div className="slots">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot, index) => (
            <button key={index} className="slot ripple-button" onClick={() => handleBooking(slot)}>
              {slot}
            </button>
          ))
        ) : (
          <p>No slots available</p>
        )}
      </div>
    </div>
  );
}

export default AvailabilityDisplay;
