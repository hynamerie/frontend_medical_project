import React from 'react'
import { useState } from 'react';

const Settings = () => {
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(0);

  const userDetails = {
    nameUs: sessionStorage.getItem("user"),
    email: sessionStorage.getItem("email"),
    pwd: sessionStorage.getItem("pwd")
  }

  const handleEdit = (i) => {
      setEditMode(i);
  };
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode === 1) {
      sessionStorage.setItem("user", updatedDetails.name);
    } else if (editMode == 2) {
      sessionStorage.setItem("email", updatedDetails.email);
    } else if (editMode === 3) {
    sessionStorage.setItem("pwd", updatedDetails.pwd);
    }
    setEditMode(0);
  };

  return (
    <div className='review-layout'>
      <h2 style={{textAlign: "left"}}>Profile Settings</h2>
      <table className='edit-table'>
        <tbody>
        <tr>
          <td className='edit-label'>Name</td>
          <td>
          {editMode !== 1 ? (
            <div className='edit-form'>
              <input type="text" name='name' className='edit-input' value={userDetails.nameUs} disabled/>
              <span> </span>
              <button className='btn-primary edit-btn' onClick={() => handleEdit(1)}>Edit</button>
            </div>
          ) : (
            <form className='edit-form' onSubmit={handleSubmit}>
              <input type="text" name='name' className='edit-input' defaultValue={userDetails.nameUs} onChange={handleInputChange}/>
              <span> </span>
              <button className='btn-primary edit-btn' >Save</button>
          </form>
          )}
          </td>
        </tr>
        <tr>
          <td className='edit-label'>Email</td>
          <td>
          {editMode !== 2 ? (
            <div className='edit-form'>
              <input type="email" name='email' className='edit-input' value={userDetails.email} disabled/>
              <span> </span>
              <button className='btn-primary edit-btn' onClick={() => handleEdit(2)}>Edit</button>
            </div>
          ) : (
            <form className='edit-form' onSubmit={handleSubmit}>
              <input type="email" name='email' className='edit-input' defaultValue={userDetails.email} onChange={handleInputChange}/>
              <span> </span>
              <button className='btn-primary edit-btn' >Save</button>
          </form>
          )}
          </td>
        </tr>
        <tr>
          <td className='edit-label'>Password</td>
          <td>
          {editMode !== 3 ? (
            <div className='edit-form'>
              <input type="password" name='pwd' className='edit-input' value={userDetails.pwd} disabled/>
              <span> </span>
              <button className='btn-primary edit-btn' onClick={() => handleEdit(3)}>Edit</button>
            </div>
          ) : (
            <form className='edit-form' onSubmit={handleSubmit}>
              <input type="password" name='pwd' className='edit-input' onChange={handleInputChange}/>
              <span> </span>
              <button className='btn-primary edit-btn' >Save</button>
          </form>
          )}
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Settings