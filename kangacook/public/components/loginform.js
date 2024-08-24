import React, { useState } from 'react';

function LoginForm() {
  const [userPass, setUserPass] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUserPass({ ...userPass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic
    console.log('Login:', userPass);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email" onChange={handleChange} />
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default LoginForm;
