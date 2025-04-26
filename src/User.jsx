import React, { useState } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData);
    alert('User added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Add User</h2>
      <CustomInput label="Name" name="name" type="text" id="name" value={formData.name} onChange={handleChange} />
      <CustomInput label="Email" name="email" type="email" id="email" value={formData.email} onChange={handleChange} />
      <CustomInput label="Age" name="age" type="number" id="age" value={formData.age} onChange={handleChange} />
      <CustomInput label="Status" name="status" type="text" id="status" value={formData.status} onChange={handleChange} />
      <CustomButton text="Submit" />
    </form>
  );
};

export default User;
