import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaBell } from 'react-icons/fa';

const NavbarContainer = styled.div`
  background-color: #007bff; /* Change to your desired navbar background color */
  color: #fff; /* Change to your desired text color */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
`;

const Logo = styled.div`
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold; /* Adjust the font weight as needed */
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Add position relative to enable absolute positioning of dropdown */
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 30px; /* Adjust the image size as needed */
  height: 30px; /* Adjust the image size as needed */
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 16px; /* Adjust the font size as needed */
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1; /* Ensure the dropdown appears above other elements */
`;
const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 20px; /* Add spacing between user profile and notification icon */
`;
const UserProfileNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavbarContainer>
      <Logo>ReactFlix</Logo> {/* Replace with your logo or site name */}
      <UserProfile onClick={toggleDropdown}>
        <UserImage
          src="/images/lou.jpg" // Replace with the URL of the user's image
          alt="User Profile"
        />
        <UserName>
          <FaUser style={{ marginRight: '5px' }} /> User Profile
        </UserName>
        <Dropdown isOpen={isDropdownOpen}>
          {/* Add dropdown content here */}
          <p>Profile</p>
          <p>Settings</p>
          <p>Log Out</p>
        </Dropdown>
      </UserProfile>
      <NotificationIcon>
        <FaBell style={{ marginRight: '5px' }} />
        <span>3</span>
      </NotificationIcon>
    </NavbarContainer>
  );
};

export default UserProfileNavbar;
