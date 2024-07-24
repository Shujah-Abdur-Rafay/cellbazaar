import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from './Navbr';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Simulate successful signup
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Phone Number:', phoneNumber);

        // You can redirect or perform other actions after successful signup
    };

    return (
        <div className="wrapper bg-white " style={{ marginTop: '5.5rem' }}>
            {/* Navigation bar */}
            <Menubar />
            {/* Heading */}
            <div className="h2 text-center">Cell Bazaar</div>
            {/* Subheading */}
            <div className="h4 text-muted text-center pt-2">Enter your Signup details</div>
            {/* Form */}
            <form className="pt-3" onSubmit={handleSignUp}>
                {/* Username or Email Address input */}
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span>
                        <input
                            type="text"
                            placeholder="Username or Email Address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className=""
                        />
                    </div>
                </div>
                {/* Password input */}
                <div className="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2"></span>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className=""
                        />
                        <button className="btn bg-white text-muted">
                            <span className="far fa-eye-slash"></span>
                        </button>
                    </div>
                </div>
                {/* Phone Number input */}
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className=""
                        />
                    </div>
                </div>
                {/* Remember me and Forgot Password links */}
                <div className="d-flex align-items-start">
                    <div className="remember">
                        <label className="option text-muted">
                            Remember me
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="ml-auto">
                        <a href="#" id="forgot">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                {/* Sign Up button */}
                <button className="btn btn-block text-center my-3" type="submit">
                    Sign Up
                </button>
                {/* Login link */}
                <div className="text-center pt-3 text-muted">
                    Already a member?<Link to="../Login"> Login</Link>
                </div>
            </form>
        </div>
    );
}
