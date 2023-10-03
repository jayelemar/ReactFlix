import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  height: 100vh; /* Set the container to the full viewport height */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Adjust the width as needed */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0px #ccc;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login code here
  };

  return (
    <LoginContainer>
      <Form>
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Link to="/reg">Not Yet Registered?</Link>
      </Form>
    </LoginContainer>
  );
};

export default Login;
