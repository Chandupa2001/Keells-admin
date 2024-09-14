import React from 'react';
import "./Deals.css";

function Deals() {
  return (
    <div className="deals">
      <form className='deal-form'>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter deal title"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            className="form-input"
          />
        </div>
        
        <div className="date-group">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              className="form-input"
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
