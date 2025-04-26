// src/User.jsx
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

function User() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age || !formData.status) {
      alert('Please fill all fields');
      return;
    }
    setUsers([...users, formData]);
    setFormData({
      name: '',
      email: '',
      age: '',
      status: '',
    });
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Name"
          name="name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <CustomInput
          label="Email"
          name="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <CustomInput
          label="Age"
          name="age"
          type="number"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <CustomInput
          label="Status"
          name="status"
          type="text"
          id="status"
          value={formData.status}
          onChange={handleChange}
        />

        <CustomButton type="submit" text="Add User" />
      </form>

      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Age:</strong> {user.age} <br />
              <strong>Status:</strong> {user.status} <br />
              <CustomButton text="Delete" onClick={() => handleDelete(index)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default User;
