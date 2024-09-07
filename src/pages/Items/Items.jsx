import React, { useEffect, useState } from "react";
import "./Items.css";
import { firebase } from "../../configs/FirebaseConfig";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  

  const fetchData = async () => {
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection("items")
        .get();
      const itemsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="table-container">
        <h2>Item List</h2>
        <table className="items-table">
          <thead>
            <tr>
              <th>Serail No</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Size</th>
              <th>Unit</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.serialNo}</td>
                <td>{item.productName}</td>
                <td>{item.category}</td>
                <td>{item.productSize}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;
