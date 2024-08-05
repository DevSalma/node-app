import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import Register from './Components/Register/Register';

function App() {
  const [username, setUsername] = useState('');
  const handleUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <Login
              onUsernameChange={handleUsername}
            />
          }
        />
        <Route
          path='/register'
          element={
            <Register
              onUsernameChange={handleUsername}
            />
          }
        />
        <Route
          path='/welcome'
          element={
            <LandingPage
              username={username}
            />
          }
        />
        <Route
          path='/lost-password'
          element={
            <div>Page still in development!</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
