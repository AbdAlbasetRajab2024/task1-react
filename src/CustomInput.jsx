import React from 'react';

const CustomInput = ({ label, name, type, id, value, onChange }) => {
  return (
    <div className="input-group" style={{ marginBottom: '1rem' }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: '0.5rem', width: '100%' }}
      />
    </div>
  );
};

export default CustomInput;
