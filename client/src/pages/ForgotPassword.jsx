import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email) {
      return setError('Please enter your email');
    }
    try {
      const res = await axios.post('http://localhost:3001/api/forgot', {
        email,
      });
      console.log(res.data);
      setEmail('');
      setSuccess('Password reset link sent to your email account!');
    } catch (error) {
      console.log(error);
      if (error.response === undefined) {
        setError('There is problem with server, try again later');
        return;
      }
      setError(error.response.data);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

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
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icons"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {error && <span className="errorMessage">{error}</span>}

        {success && <span style={{ color: '#063206' }}>{success}</span>}

        <button className="btn" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <div className="linkContainer">
        <Link to="/login" className="link">
          Remembered password? Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
