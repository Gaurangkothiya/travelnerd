import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
