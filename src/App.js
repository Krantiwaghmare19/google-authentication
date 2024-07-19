
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    
                </Routes>
            </div>
        </Router>
    );
}


export default App;