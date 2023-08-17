// SignUpForm.js
import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ onSignUp }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        weight: '',
        height: '',
        measurementSystem: 'conventional',
        dateOfBirth: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignUp(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
