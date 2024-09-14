import React, { useEffect, useState } from 'react';
import './Orders.css';
import { firebase } from "../../configs/FirebaseConfig";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection("orders")
        .get();
      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
      console.log(ordersData);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div>
      <div className="table-container">
        <h2>Order List</h2>
        <table className="items-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{formatDate(order.orderDate)}</td>
                <td>{"Rs. " + order.totalAmount}</td>
                <td>
                  {order.cartItems.map((item, index) => (
                    <div key={index}>
                      {item.data.productName + "  " + item.data.productSize +  item.data.unit}
                    </div>
                  ))}
                </td>
                <td>
                  {order.cartItems.map((item, index) => (
                    <div key={index}>
                      {item.qty}
                    </div>
                  ))}
                </td>
                <td>
                  {order.cartItems.map((item, index) => (
                    <div key={index}>
                      {"Rs. " + item.data.price}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
