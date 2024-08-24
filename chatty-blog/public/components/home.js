import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Chatty Blog</h1>
        <nav>
          <Link to="/blogs">Blog List</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
