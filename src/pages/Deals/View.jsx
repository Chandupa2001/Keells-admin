import React, { useEffect, useState } from 'react'
import './View.css'
import { firebase } from "../../configs/FirebaseConfig";
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

function View() {
    const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection("deals")
        .get();
      const dealsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDeals(dealsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="table-container">
        <h2>Item List</h2>
        <table className="deals-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id}>
                <td>{deal.title}</td>
                <td>{deal.description}</td>
                <td>{deal.startDate}</td>
                <td>{deal.endDate}</td>
                <td><FaRegEdit color='#6E726E' size={20} /></td>
                <td><MdDelete color='red' size={20} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default View