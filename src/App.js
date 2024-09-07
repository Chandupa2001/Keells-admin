import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import './App.css';
import Signup from './pages/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Items from './pages/Items/Items';
import Orders from './pages/Orders/Orders';
import Deals from './pages/Deals/Deals';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="add" element={<Add />} />
            <Route path="items" element={<Items />} />
            <Route path="orders" element={<Orders />} />
            <Route path="deals" element={<Deals />} />
          </Route>
          {/* Redirect root path to dashboard home */}
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
