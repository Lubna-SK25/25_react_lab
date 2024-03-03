// RegisterPage.js
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., register user
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Proceed with registration
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
        <InputField
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
        />
        <SubmitButton text="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;
