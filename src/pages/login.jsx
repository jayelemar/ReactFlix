import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Make an HTTP POST request to the PHP login script
        fetch('http://localhost/rf/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&password=${password}`,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Login successful, perform actions like storing a token or redirecting
                    console.log(data.message);
                } else {
                    // Login failed, display an error message
                    console.error(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
