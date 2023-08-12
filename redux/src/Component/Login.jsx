import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loginStatus, setLoginStatus] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const generateRandomToken = () => {
        const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const user = users.find(user => user.email === formData.email);

        if (!user || user.password !== formData.password) {
            setLoginStatus('Invalid email or password');
        } else {
            generateRandomToken();
            setLoginStatus('Login successful');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

                <button type="submit">Login</button>
            </form>
            <p>{loginStatus}</p>
        </div>
    );
}

export default LoginPage;
