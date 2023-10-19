import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  const fetchRegisteredUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setRegisteredUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', { name, password });
      setRegisteredUsers([...registeredUsers, response.data]);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="App">
      <h1>User Registration</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={registerUser}>Register</button>
      </div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hashed Password</th>
            <th>Registration Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{new Date(user.registrationDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
