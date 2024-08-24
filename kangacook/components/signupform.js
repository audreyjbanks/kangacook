// src/components/SignUpForm.js
import React, { useState } from 'react';

function SignUpForm() {
  const [userPass, setUserPass] = useState({
    name: '',
    user_name: '',
    email: '',
    password: '',
    admin: false
  });

  const handleChange = (e) => {
    setUserPass({ ...userPass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-up logic
    console.log('Sign Up:', userPass);
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" onChange={handleChange} />
        <input type="text" name="user_name" placeholder="user name" onChange={handleChange} />
        <input type="email" name="email" placeholder="email" onChange={handleChange} />
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <input type="checkbox" name="admin" onChange={(e) => setUserPass({ ...userPass, admin: e.target.checked })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
