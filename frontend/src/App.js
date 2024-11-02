import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './styles/styles.css';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="container">
        {!token ? (
          <Routes>
            <Route path="/register" element={
              <div>
                <Register />
                <Link to="/login">Already have an account? Login</Link>
              </div>
            } />
            <Route path="/login" element={
              <div>
                <Login setToken={setToken} />
                <Link to="/register">Don't have an account? Register</Link>
              </div>
            } />
            <Route path="/" element={
              <div>
                <Login setToken={setToken} />
                <Link to="/register">Don't have an account? Register</Link>
              </div>
            } />
          </Routes>
        ) : (
          <TaskList token={token} setToken={setToken} /> // Pass setToken to TaskList
        )}
      </div>
    </Router>
  );
};

export default App;
