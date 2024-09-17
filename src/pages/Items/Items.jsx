import React, { useEffect, useState } from "react";
import "./Items.css";
import { firebase } from "../../configs/FirebaseConfig";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Items() {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

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

  const onDeletePress = async (id) => {
    await firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Record Deleted");
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditPress = async (id) => {
    navigate(`/editItem/${id}`)
  }

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
              <th>Edit</th>
              <th>Delete</th>
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
                <td>
                  <button onClick={() => onEditPress(item.id)}>
                    <FaRegEdit color="#6E726E" size={20} />
                  </button>
                </td>
                <td>
                  <button onClick={() => onDeletePress(item.id)}>
                    <MdDelete color="red" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;
