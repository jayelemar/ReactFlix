import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner></Spinner>
      <LoadingText></LoadingText>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #007bff; /* Change the color as needed */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.div`
  font-size: 18px;
`;

export default LoadingSpinner;
