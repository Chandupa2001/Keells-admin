import React from "react";
import "./Add.css";

function Add() {

  return (
    <div className="add">
      <form>
        <div className="add-product-serial">
          <p>Serial No</p>
          <input
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Product name</p>
          <input
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-size">
          <p>Product size</p>
          <div className="size-input-container">
            <input
              type="number"
              placeholder="Enter value"
              className="size-value"
            />
            <select name="size" className="size-type">
              <option value="g">g (grams)</option>
              <option value="kg">kg (kilograms)</option>
              <option value="l">l (liters)</option>
              <option value="ml">ml (milliliters)</option>
            </select>
          </div>
        </div>
        <div className="add-product-description">
          <p>Product description</p>
          <textarea
            rows="6"
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p>Product category</p>
            <select name="category">
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
};

export default Add;
