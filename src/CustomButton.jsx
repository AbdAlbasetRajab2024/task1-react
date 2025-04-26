// src/CustomButton.jsx
import React from 'react';

function CustomButton({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;
