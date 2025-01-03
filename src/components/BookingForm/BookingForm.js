// import React, { useState } from 'react';
// import { validateForm } from '../../utils/validation';

// function BookingForm({ setBookingData }) {
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     guests: '',
//     name: '',
//     contact: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm(formData)) {
//       setBookingData(formData);
//     } else {
//       alert('Invalid input!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="date" type="date" onChange={handleInputChange} required />
//       <input name="time" type="time" onChange={handleInputChange} required />
//       <input name="guests" type="number" onChange={handleInputChange} required />
//       <input name="name" type="text" onChange={handleInputChange} required />
//       <input name="contact" type="text" onChange={handleInputChange} required />
//       <button type="submit">Check Availability</button>
//     </form>
//   );
// }

// export default BookingForm;


import React, { useState } from 'react';
import { validateForm } from '../../utils/validation';
import './BookingForm.css';

function BookingForm({ setBookingData }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      setBookingData(formData);
    } else {
      alert('Please fill all fields correctly!');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Table</h2>
      <input name="date" type="date" onChange={handleInputChange} required />
      <input name="time" type="time" onChange={handleInputChange} required />
      <input name="guests" type="number" placeholder="Guests" onChange={handleInputChange} required />
      <input name="name" type="text" placeholder="Your Name" onChange={handleInputChange} required />
      <input name="contact" type="text" placeholder="Contact Info" onChange={handleInputChange} required />
      <button type="submit" className="ripple-button">Check Availability</button>
    </form>
  );
}

export default BookingForm;
