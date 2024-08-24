// src/App.js
import React from 'react';
import Home from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <div className="container">
      <Home />
      <Blog />
      <footer>
        <h2>SIGN UP</h2>
        <SignUpForm />
        <h2>LOG IN</h2>
        <LoginForm />
        <h2>LOG OUT</h2>
        <button type="button" name="logout" onClick={handleLogout}>Log Off!</button>
      </footer>
    </div>
  );
}

function handleLogout() {
  // Implement logout logic
  console.log('Logged out!');
}

export default App;
