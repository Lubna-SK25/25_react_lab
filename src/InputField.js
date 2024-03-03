// InputField.js
import React from 'react';

const InputField = ({ type, id, value, onChange, label }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="input-field"
        required
      />
    </div>
  );
};

export default InputField;
