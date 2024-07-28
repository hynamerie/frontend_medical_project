import React from 'react'
import { useState } from 'react';

export default function Review() {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const [submittedMessage, setSubmittedMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', review: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData.review);
    // setFormData({name: '', review: '' });
    // Check if all required fields are filled before submission
    setShowForm(false);
  };
      

  return (
    <div className='review-layout'>
      <h2 style={{textAlign: "left"}}>Review</h2>
      {!showForm ? (
      <table className='table-rv'>
        <thead>
          <tr className='table-head'>          
            <th>No.</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Review</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr>
            <td>1</td>
            <td>Dr. Loria Musset</td>
            <td>Dentist</td>
            <td>
              <button className='btn-primary' onClick={handleButtonClick}>Give Review</button>
            </td>
            <td>{submittedMessage}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Gregory Schneider</td>
            <td>Neurosurgery</td>
            <td>
              <button>Give Review</button>
            </td>
            <td>“Really good bedside manner, made me feel at ease and comfortable!”</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr. Petra Kilback</td>
            <td>Anesthesiology</td>
            <td>
              <button>Give Review</button>
            </td>
            <td>“Really good bedside manner, made me feel at ease and comfortable!”</td>
          </tr>
        </tbody>
      </table>
      ) : (
      <div>
        <h3>Give Your Feedback</h3>
        <form className='sign-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
      )}
    </div>
  )
}
