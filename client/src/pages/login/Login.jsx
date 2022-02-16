import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="container">
      <form action="">
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
