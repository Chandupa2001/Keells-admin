import React, { useEffect, useState } from "react";
import "./EditDeals.css";
import { firebase } from '../../configs/FirebaseConfig';
import { useNavigate, useParams } from "react-router-dom";

function EditDeals() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeal = async () => {
        const doc = await firebase.firestore().collection('deals').doc(id).get();
          if (doc.exists) {
            const dealData = doc.data();
            setTitle(dealData.title)
            setDescription(dealData.description)
            setStartDate(dealData.startDate)
            setEndDate(dealData.endDate)
          }
      }
    fetchDeal();
  }, [id])

  const handleEdit = async (event) => {
    event.preventDefault();

    try {
      await firebase.firestore().collection("deals").doc(id).update({
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate,
      });
      console.log("Deal updated.");
      navigate('/dashboard/view')

      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.error("Error editing deal: ", error);
    }
  };

  return (
    <div className="deals">
      <form className="deal-form" onSubmit={handleEdit}>
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
          Edit Deal
        </button>
      </form>
    </div>
  );
}

export default EditDeals;
