import React, { useState } from 'react';
import './Login.css';
import email from '../Assets/emailimage.png';
import passwordImage from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';
import useSubmitForm from '../../Response/fetchFormResponse';

const Login = () => {
    const navigate = useNavigate();
    const { submitForm, error } = useSubmitForm('http://localhost:1080/user/login');
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
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
        try {
            const result = await submitForm(formValues);
            if (result.message === 'User has logged in succesfully') {
                localStorage.setItem('username', result.user.username);
                localStorage.setItem('email', result.user.email);
                navigate('/welcome');
            } else {
                console.log(error);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <form id='Login' onSubmit={handleSubmit}>
            <div className='container'>
                <div className='header'>
                    <h1 className='text'>Login</h1>
                    <div className='line' />
                </div>
                <div>
                    <div className='inputList'>
                        <div className='input'>
                            <img src={email} alt="An email" />
                            <input name="email" type='email' value={formValues.email} onChange={handleOnChange} placeholder='Email address' required />
                        </div>
                        <div className='input'>
                            <img src={passwordImage} alt="A lock" />
                            <input name="password" type='password' value={formValues.password} onChange={handleOnChange} placeholder='Password' required />
                        </div>
                    </div>
                    <div className='lost-password'>
                        <p>Forgot your password? <a href="/lost-password">Click here to reset</a></p>
                    </div>
                    <div className='submit-content'>
                        <button type="submit">Login</button>
                    </div>
                    <div className='otherpage'>
                        <p>Don't have an account? <button onClick={handleRegister}>Register</button></p>
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

export default Login;