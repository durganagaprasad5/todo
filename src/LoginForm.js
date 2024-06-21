import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Here you can add your authentication logic
    // For demonstration purposes, we will just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear form fields after successful login (replace with actual logic)
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;