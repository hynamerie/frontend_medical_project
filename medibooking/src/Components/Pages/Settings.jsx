import React from 'react'
import { useState } from 'react';

const Settings = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className='review-layout'>
      <h2 style={{textAlign: "left"}}>Profile Settings</h2>
      <table className='edit-table'>
        <tbody>
        <tr>
          <td className='edit-label'>Name</td>
          <td>
            <form action="">
            <input type="text" name='name' className='edit-input' disabled/>
            <span> </span>
            <button className='btn-primary edit-btn' onClick={handleEdit}>Edit</button>
            </form>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Settings