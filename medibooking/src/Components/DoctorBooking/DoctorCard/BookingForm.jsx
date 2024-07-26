import React, { useState } from 'react'

const BookingForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState('');
  
    // const handleSlotSelection = (slot) => {
    //   setSelectedSlot(slot);
    // };
  
    function handleFormSubmit(e) {
      e.preventDefault();
      console.log(name, phone, date, selectedSlot);
      // setName('');
      // setPhone('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="sign-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" required 
            value={date} onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="select-group">
          <label htmlFor="time">Time</label>
          <div className="select-body">
            <select name="time" id="time" aria-placeholder="Select a time slot"
              value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}
            >
              <option>Select a time slot</option>
              <option value="9am">9:00 AM</option>
              <option value="10am">10:00 AM</option>
              <option value="2pm">2:00 PM</option>
              <option value="3pm">3:00 PM</option>
            </select>
            <div className="select-icon">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>  
          </div>
        </div>

        <div className="btn-group">
          <button type="submit" className="btn-primary">Book Now</button>
        </div>
      </form>
    );
  };

export default BookingForm
