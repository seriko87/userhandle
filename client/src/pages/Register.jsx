import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSend = async (data) => {
    const { name, email, password } = data;
    setError('');
    console.log(data);
    try {
      await axios.post('http://localhost:3001/api/register', {
        name,
        email,
        password,
      });
      navigate('/login', { replace: true });
    } catch (error) {
      console.log(error.response.data);
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

  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="inputContainer">
          <label htmlFor="name">Username</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="John Doe"
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less',
              },
            })}
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
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </div>
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            {...register('email', {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
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
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Please enter atleast 6 characters',
              },
            })}
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
        {errors.password && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
        <span className="errorMessage">{error}</span>
        <button className="btn" onClick={handleSubmit(handleSend)}>
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
