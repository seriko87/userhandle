import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { axios } from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://localhost:3001/api/login');

    setAlert(!alert);
  };

  console.log(email, password);
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {alert && (
          <span style={{ color: '#ca0909' }} className="alert">
            'Problem with register, try later'
          </span>
        )}
        <button className="btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <div className="linkContainer">
        <Link to="/register" className="link">
          Register
        </Link>
        <Link to="/forgot-password" className="link">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
