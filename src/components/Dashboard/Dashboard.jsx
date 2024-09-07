import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { assets } from '../../assets/assets';
import { IoMdHome, IoIosAddCircle } from 'react-icons/io';
import { FaClipboardList, FaUserCircle } from 'react-icons/fa';
import { PiListChecksFill } from 'react-icons/pi';
import { AiFillNotification } from 'react-icons/ai';

function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logoName">
            <img src={assets.logo_white} alt="logo" />
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="home" end activeClassName="active-link">
              <IoMdHome className="icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="add" activeClassName="active-link">
              <IoIosAddCircle className="icon" />
              <span>Add</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="items" activeClassName="active-link">
              <FaClipboardList className="icon" />
              <span>Items</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="orders" activeClassName="active-link">
              <PiListChecksFill className="icon" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="deals" activeClassName="active-link">
              <AiFillNotification className="icon" />
              <span>Deals</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
          <FaUserCircle className="header-logo" size={30} color="#63BB43" />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
