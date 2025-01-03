import React from 'react';
import './TimelineView.css';

function TimelineView({ availableSlots, bookedSlots, handleSlotSelection }) {
  return (
    <div className="timeline-container">
      <h2>Available Slots</h2>
      <div className="timeline">
        {availableSlots.map((slot, index) => (
          <div
            key={index}
            className="slot available"
            onClick={() => handleSlotSelection(slot)}
          >
            {slot}
          </div>
        ))}
        {bookedSlots.map((slot, index) => (
          <div key={index} className="slot booked">
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineView;
