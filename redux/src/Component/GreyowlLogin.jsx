import React, { useState } from 'react';
import '../Styles/login.css';

function GreyowlLogin() {
  const [username, setUsername] = useState('Demo login');
  const [password, setPassword] = useState('1234');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    window.location.href = 'http://199.241.138.229:3000/upload';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};

export default GreyowlLogin;
