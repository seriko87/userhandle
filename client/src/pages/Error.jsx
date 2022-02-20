import React from 'react';

import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="errorPage">
      <div> Sorry something went wrong!!! </div>

      <Link to={'/'}>
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
