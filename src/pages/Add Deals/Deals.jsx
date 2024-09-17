import React, { useState } from 'react';
import "./Deals.css";
import { firebase } from '../../configs/FirebaseConfig';

function Deals() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(''); 

  const handleAdd = async (event) => {
    event.preventDefault();

    try {
      await firebase.firestore().collection('deals').add({
        title,
        description,
        startDate,
        endDate
      });
      console.log("Deal added.");
      
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error("Error adding deal: ", error);
    }
  }

  return (
    <div className="deals">
      <form className='deal-form' onSubmit={handleAdd} >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter deal title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <div className="date-group">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              className="form-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          Add Deal
        </button>
      </form>
    </div>
  );
}

export default Deals;
