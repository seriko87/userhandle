import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GlobalContext } from '../context/context';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });
      console.log(res.data);

      setUser(true);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setError('');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

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
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
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
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icons"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <span className="errorMessage">{error}</span>

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
