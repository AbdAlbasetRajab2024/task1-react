// src/CustomInput.jsx
import React from 'react';

function CustomInput({ label, name, type, id, value, onChange }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '100%' }}
      />
    </div>
  );
}

export default CustomInput;
