import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const [isUsername, setIsUsername] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setIsUsername(localStorage.getItem('username'));
        setIsEmail(localStorage.getItem('email'));
    },[]);

    const handleSubmit = (e) => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div className="container">
            <div className="header">
                <h1 className="text">Welcome to your profile page!</h1>
            </div>
            <div>
                <ul>
                    <li>Username: {isUsername}</li>
                    <li>Email address: {isEmail}</li>
                </ul>
            </div>
            <div className="submit" onClick={handleSubmit}>
                <button className="button">Logout</button>
            </div>
        </div>
    );
};

export default LandingPage;