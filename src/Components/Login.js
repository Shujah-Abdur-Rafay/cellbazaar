import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from './Navbr';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Simulate login action
        console.log('Login button clicked');
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="wrapper bg-white" style={{ marginTop: "6rem" }}>
            <Menubar />
            <div className="h2 text-center">Cell Bazaar</div>
            <div className="h4 text-muted text-center pt-2">Enter your login details</div>
            <form className="pt-3">
                <div className="form-group py-2">
                    <div className="input-field">
                        <span className="far fa-user p-2"></span>
                        <input
                            type="text"
                            placeholder="Username or Email Address"
                            required
                            className=""
                            onChange={handleUsernameChange}
                        />
                    </div>
                </div>
                <div className="form-group py-1 pb-2">
                    <div className="input-field">
                        <span className="fas fa-lock p-2"></span>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            required
                            className=""
                            onChange={handlePasswordChange}
                        />
                        <button className="btn bg-white text-muted" type="button">
                            <span className="far fa-eye-slash"></span>
                        </button>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <div className="remember">
                        <label className="option text-muted"> Remember me
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="ml-auto">
                        <a href="#" id="forgot">Forgot Password?</a>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-block text-center my-3"
                    onClick={handleLogin}
                >
                    Log in
                </button>

                <div className="text-center pt-3 text-muted">
                    Not a member? <Link to="../signup"><p>Sign Up</p></Link>
                </div>
            </form>
        </div>
    );
}
