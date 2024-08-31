import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import './App.css';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
