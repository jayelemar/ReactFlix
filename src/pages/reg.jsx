import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation (e.g., check for password match, username length, etc.)
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else if (username.length < 5) {
            alert('Username must be at least 5 characters long');
        } else {
            // Send registration data to your API or PHP script
            const registrationData = {
                username: username,
                password: password,
            };

            // Make an API request to register the user
            fetch('http://localhost/rf/reg.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert('Registration successful');
                        // You can redirect the user or perform other actions here
                    } else {
                        alert('Registration failed: ' + data.message);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
