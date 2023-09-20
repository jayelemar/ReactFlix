import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/images/stream.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #000;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #000;
  border: 1px solid black;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px;
  width: 100px;
  height: 30px;
  background-color: rgba(0, 123, 255, 0.8);
  color: #000;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid black;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here
    console.log('Registration data:', formData);
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <FormContainer>
        <RegisterForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Register</Button>
            <Button type="button" onClick={() => window.location.href = './login'}>Already have an account?</Button>
          </ButtonContainer>
        </RegisterForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
