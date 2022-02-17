import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login');
    setAlert(!alert);
  };

  return (
    <div className="container">
      <h1>Forgot Password</h1>
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
        {alert && (
          <span style={{ color: '#ca0909' }} className="alert">
            'Problem with register, try later'
          </span>
        )}
        <button className="btn" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <div className="linkContainer">
        <Link to="/register" className="link">
          Remembered password? Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
