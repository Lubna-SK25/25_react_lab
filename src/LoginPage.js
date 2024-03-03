// LoginPage.js
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const LoginPage = ({ handleLogin, errorMessage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title" style={{ color: 'white' }}>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          label="Username"
        />
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
        />
        <SubmitButton text="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
