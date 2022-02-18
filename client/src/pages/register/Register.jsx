import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [alert, setAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login');
    setAlert(!alert);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="inputContainer">
          <label htmlFor="name">UserName</label>
          <input
            type="name"
            name="name"
            id="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
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
          <span style={{ color: '#ca0909' }}>
            "Problem with register, try later"
          </span>
        )}
        <button className="btn" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <div className="linkContainer">
        <Link to="/login" className="link">
          Already have account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
