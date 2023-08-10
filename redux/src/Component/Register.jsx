import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/user', formData)
            .then(response => {
                alert('Registration successful:', response.data);
                navigate('/login')
            })
            .catch(error => {
                alert('Registration failed:', error);
            });
    };

    return (
        <div>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
