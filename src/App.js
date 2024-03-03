// App.js
import React, { useState } from 'react';
import './app1.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NewPage from './NewPage';

const Home = () => {
  return null; // Render nothing for the home page
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (username, password) => {
    // Simulate login logic (e.g., check credentials)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      return true; // Return true to indicate successful login
    } else {
      setErrorMessage('Invalid username or password');
      return false; // Return false to indicate unsuccessful login
    }
  };

  return (
    <Router>
      {isLoggedIn ? <Navigate to="/NewPage" /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} errorMessage={errorMessage} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
