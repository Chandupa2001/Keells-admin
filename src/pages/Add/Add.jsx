import React, { useEffect, useState } from "react";
import "./Add.css";
import { firebase } from '../../configs/FirebaseConfig';

function Add() {

  const [serialNo, setSerialNo] = useState(''); 
  const [productName, setProductName] = useState('');
  const [productSize, setProductSize] = useState('');
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = async (event) => {
    event.preventDefault();

    try {
      await firebase.firestore().collection('items').add({
        serialNo,
        productName,
        productSize,
        unit,
        category,
        price: Number(price),
      });
      console.log("Item added.");
      
      setSerialNo('');
      setProductName('');
      setProductSize('');
      setUnit('');
      setCategory('');
      setPrice('');
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  }

  useEffect(() => {
    console.log(unit);
  }, [unit]);

  return (
    <div className="add">
      <form onSubmit={handleAdd}>
        <div className="add-product-serial">
          <p>Serial No</p>
          <input
            value={serialNo}
            onChange={(text) => setSerialNo(text.target.value)}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Product name</p>
          <input
            value={productName}
            onChange={(text) => setProductName(text.target.value)}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-size">
          <p>Product size</p>
          <div className="size-input-container">
            <input
              value={productSize}
              onChange={(text) => setProductSize(text.target.value)}
              type="number"
              placeholder="Enter value"
              className="size-value"
            />
            <select
              name="size"
              className="size-type"
              onChange={(item) => setUnit(item.target.value)}
              value={unit} 
            >
              <option value="" disabled>Select unit</option>
              <option value="g">g (grams)</option>
              <option value="kg">kg (kilograms)</option>
              <option value="L">L (liters)</option>
              <option value="ml">ml (milliliters)</option>
            </select>
          </div>
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p>Product category</p>
            <select
              name="category"
              onChange={(item) => setCategory(item.target.value)}
              value={category} 
            >
              <option value="" disabled>Select category</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Meat">Meat</option>
              <option value="Fish">Fish</option>
              <option value="Beverages">Beverages</option>
              <option value="Chilled">Chilled</option>
              <option value="Frozen Food">Frozen Food</option>
              <option value="Grocery">Grocery</option>
              <option value="Homeware">Homeware</option>
              <option value="HouseHold">HouseHold</option>
            </select>
          </div>
          <div className="add-price">
            <p>Product price</p>
            <input
              value={price}
              onChange={(text) => setPrice(text.target.value)}
              type="number"
              name="price"
              placeholder="Rs. 300"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
