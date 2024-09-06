import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";
import { firebase } from '../../configs/FirebaseConfig'

function Home() {

    const [name, setName] = useState('');
    const [users, setUsers] = useState('');
    const [products, setProducts] = useState('');
    const [orders, setOrders] = useState('');

    useEffect(() => {
        fetchData();
    }, [])
    

    const fetchData = async () => {
        const uid = localStorage.getItem('UserId');
        const resAdmin = await firebase.firestore().collection('admin').doc(uid).get();
        const resUser = await firebase.firestore().collection('users').get();
        const resItem = await firebase.firestore().collection('items').get();
        const resOrders = await firebase.firestore().collection('orders').get();

        const admin = await resAdmin.data();
        setName(admin.name);

        setUsers(resUser.size);
        setProducts(resItem.size);
        setOrders(resOrders.size);
    }

    return (
        <div className="container-home">
            <div>
                <h3 className="header-text">{"Welcome back, " + name}</h3>
            </div>
            <div className="container-box-row">
                <div className="container-box">
                    <p className="box-title">Registered Users</p>
                    <div className="box-items">
                        <FaRegUser className="box-icon" size={25} />
                        <span className="box-text">{users}</span>
                    </div>
                </div>
                <div className="container-box">
                    <p className="box-title">Products</p>
                    <div className="box-items">
                        <BsBoxSeam className="box-icon" size={25} />
                        <span className="box-text">{products}</span>
                    </div>
                </div>
                <div className="container-box">
                    <p className="box-title">Purchases</p>
                    <div className="box-items">
                        <PiListChecksBold className="box-icon" size={25} />
                        <span className="box-text">{orders}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
