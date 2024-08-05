import React, { useState } from 'react';
import './Register.css';
import user from '../Assets/userimage.png';
import email from '../Assets/emailimage.png';
import passwordImage from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';
import useSubmitForm from '../../Response/fetchFormResponse';

const Register = () => {
    const navigate = useNavigate();
    const { submitForm, error } = useSubmitForm('http://localhost:1080/user/register');
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValues.password !== formValues.confirmPassword) {
            return alert('Passwords do not match! Please try again.')
        };
        const data = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        };
        const result = await submitForm(data);
        if (result.message === 'User has been registerd successfully!') {
            localStorage.setItem('username', result.user.username);
            localStorage.setItem('email', result.user.email);
            navigate('/welcome');
        } else {
            return error;
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <form id='Register' onSubmit={handleSubmit}>
            <div className='container'>
                <div className='header'>
                    <h1 className='text'>Register</h1>
                    <div className='line' />
                </div>
                <div>
                    <div className='inputList'>
                        <div className='input'>
                            <img src={user} alt="A user profile" />
                            <input name="username" type='text' value={formValues.username} onChange={handleOnChange} placeholder='Username' required />
                        </div>
                        <div className='input'>
                            <img src={email} alt="An email" />
                            <input name="email" type='email' value={formValues.email} onChange={handleOnChange} placeholder='Email address' required />
                        </div>
                        <div className='input'>
                            <img src={passwordImage} alt="A lock" />
                            <input name="password" id="password" type='password' value={formValues.password} onChange={handleOnChange} placeholder='Password' required />
                        </div>
                        <div className='input'>
                            <img src={passwordImage} alt="A lock" />
                            <input name="confirmPassword" id="confirm-password" type='password' value={formValues.confirmPassword} onChange={handleOnChange} placeholder='Confirm password' required />
                        </div>
                    </div>
                    <div className='submit-content'>
                        <button type="submit">Register</button>
                    </div>
                    <div className='otherpage'>
                        <p>Already have an account? <button onClick={handleLogin}>Login</button></p>
                    </div>
                </div>
                {error && (
                    <div className='error'>
                        <p>Response: {error}</p>
                    </div>
                )}
            </div>
        </form>
    )
}

export default Register;