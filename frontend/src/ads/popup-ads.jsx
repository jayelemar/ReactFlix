import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  width: 400px; /* Set your desired fixed width */
  height: 300px; /* Set your desired fixed height */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure it's above other content */
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 100vmax rgba(0, 0, 0, 0.5); /* Increased spread and inset shadow */
  text-align: center; /* Center the content */
  position: relative;
  max-width: 80%; /* Limit maximum width */
`;


const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const AdImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0; /* Add margin for spacing */
`;

const AdText = styled.p`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

function PopUpAd() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to show the pop-up after a few seconds (e.g., 5 seconds)
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Adjust the time as needed

    // Clean up the timeout to prevent memory leaks
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <PopupContainer isOpen={isOpen}>
      <PopupContent>
        <AdImage src="/images/spidey.jpg" alt="Advertisement" />
        <AdText>This is a pop-up ad. Add your ad content here.</AdText>
        <CloseButton onClick={handleCloseClick}>X</CloseButton>
      </PopupContent>
    </PopupContainer>
  );
}

export default PopUpAd;
