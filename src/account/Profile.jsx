import React from "react";
import styled from "styled-components";
import { FaUser, FaBell } from 'react-icons/fa';

const UserProfileContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 50px; /* Adjust the image width as needed */
  height: 50px; /* Adjust the image height as needed */
  border-radius: 50%; /* Make the image round */
  margin-right: 10px; /* Add some spacing between the image and text */
`;

const UserName = styled.h3`
  margin: 0;
`;

const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserInfo>
        <UserImage
          src="/images/lou.jpg" // Replace with the URL of the user's image
          alt="User Profile"
        />
        <UserName>
          <IconWithMargin><FaUser /></IconWithMargin> User Profile
        </UserName>
      </UserInfo>
      <NotificationIcon>
        {/* Add notification icon and count here */}
        <IconWithMargin>
          <FaBell />
        </IconWithMargin>
        <span>3</span> {/* Display the notification count */}
      </NotificationIcon>
    </UserProfileContainer>
  );
};

export default UserProfile;
