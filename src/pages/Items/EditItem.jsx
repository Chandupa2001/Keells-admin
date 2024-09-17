import React, { useEffect, useState } from "react";
import "./EditItem.css";
import { firebase } from "../../configs/FirebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

function EditItem() {
  const [serialNo, setSerialNo] = useState("");
  const [productName, setProductName] = useState("");
  const [productSize, setProductSize] = useState("");
  const [unit, setUnit] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const doc = await firebase.firestore().collection("items").doc(id).get();
      if (doc.exists) {
        const itemData = doc.data();
        setSerialNo(itemData.serialNo);
        setProductName(itemData.productName);
        setProductSize(itemData.productSize);
        setUnit(itemData.unit);
        setCategory(itemData.category);
        setPrice(itemData.price);
      }
    };
    fetchItem();
  }, [id]);

  const handleEdit = async (event) => {
    event.preventDefault();

    try {
      await firebase.firestore().collection("items").doc(id).update({
          serialNo: serialNo,
          productName: productName,
          productSize: productSize,
          unit: unit,
          category: category,
          price: Number(price),
        });
      console.log("Item edited.");
      navigate('/dashboard/items')

      setSerialNo("");
      setProductName("");
      setProductSize("");
      setUnit("");
      setCategory("");
      setPrice("");
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  return (
    <div className="edit">
      <form onSubmit={handleEdit}>
        <div className="edit-product-serial">
          <p>Serial No</p>
          <input
            value={serialNo}
            onChange={(text) => setSerialNo(text.target.value)}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="edit-product-name">
          <p>Product name</p>
          <input
            value={productName}
            onChange={(text) => setProductName(text.target.value)}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="edit-product-size">
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
              <option value="" disabled>
                Select unit
              </option>
              <option value="g">g (grams)</option>
              <option value="kg">kg (kilograms)</option>
              <option value="L">L (liters)</option>
              <option value="ml">ml (milliliters)</option>
            </select>
          </div>
        </div>
        <div className="edit-category-price">
          <div className="edit-category">
            <p>Product category</p>
            <select
              name="category"
              onChange={(item) => setCategory(item.target.value)}
              value={category}
            >
              <option value="" disabled>
                Select category
              </option>
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
          <div className="edit-price">
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
        <button type="submit" className="edit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
}

export default EditItem;
