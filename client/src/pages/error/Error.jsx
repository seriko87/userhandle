import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="errorPage">
      <div> Sorry something went wrong!!! </div>

      <Link to={'/'}>
        <button className="errorBackBtn">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
