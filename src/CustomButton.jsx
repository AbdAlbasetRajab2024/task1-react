import React from 'react';

const CustomButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '0.7rem 1.5rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
      {text}
    </button>
  );
};

export default CustomButton;
