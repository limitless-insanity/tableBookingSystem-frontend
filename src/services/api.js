// export const checkAvailability = async (bookingData) => {
//     // Mock API call
//     return ['6:00 PM', '7:00 PM', '8:00 PM'];
//   };
  
//   export const submitBooking = async (bookingData) => {
//     // Mock API call
//     return { success: true };
//   };
// export const checkAvailability = async (bookingData) => {
//   return ['6:00 PM', '7:00 PM', '8:00 PM']; // Mock data
// };

// export const submitBooking = async (bookingData) => {
//   return { success: true };
// };
// export const getSlotsForDate = async (date) => {
//   // Mock slots based on date
//   return {
//     available: ['12:00 PM', '2:00 PM'],
//     booked: ['1:00 PM'],
//   };
// };

// after backend

const BASE_URL = 'https://tablebookingsystem-backend.onrender.com';

export const getSlotsForDate = async (date) => {
  const response = await fetch(`${BASE_URL}/${date}`);
  const data = await response.json();
  return data;
};

export const createBooking = async (bookingData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

export const deleteBooking = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return response.json();
};

