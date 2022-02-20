import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';

const Home = () => {
  const { setUser } = useContext(GlobalContext);

  return (
    <div className="container">
      <h1>Welcome to website</h1>
      <button className="btn" onClick={() => setUser(false)}>
        Logout
      </button>
    </div>
  );
};

export default Home;
