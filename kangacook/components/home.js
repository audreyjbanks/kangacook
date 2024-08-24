// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <header className="one-half column" style={{ marginTop: '25%' }}>
      <nav>
        <ul>
          <ul className="adminsLinks">
            <li>Admin's List</li>
            <li>New</li>
            <li>Update</li>
          </ul>
          <h1>Chatty Blog</h1>
          <label>Search: <input type="text" placeholder="Search" /></label>
        </ul>
      </nav>
    </header>
  );
}

export default Home;
