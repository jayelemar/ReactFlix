import React from 'react';
import { AiOutlineUser, AiOutlineMessage, AiOutlineBell, AiOutlineSetting, AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

// Import your profile image
import profileImage from '../assets/images/th1.jpg';

const NavigationContainer = styled.div`
  background-color: #191970;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 20px;

  svg {
    margin-right: 10px;
  }
`;

const ProfileCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border:2px solid skyblue;
  }
`;

function Navigation() {
  return (
    <NavigationContainer>
      <Logo>
        <AiOutlineUser size={24} />
        <h1>Profile</h1>
      </Logo>
      <NavList>
        <NavItem>
          <AiOutlineHome size={24} />
        </NavItem>
        <NavItem>
          <AiOutlineUser size={24} />
          Profile
        </NavItem>
        <NavItem>
          <AiOutlineMessage size={24} />
          
        </NavItem>
        <NavItem>
          <AiOutlineBell size={24} />
          
        </NavItem>
        <NavItem>
          <AiOutlineSetting size={24} />
          
        </NavItem>
        <NavItem>
        <ProfileCircle>
        <img src={profileImage} alt="Profile" />
      </ProfileCircle>
      </NavItem>
      </NavList>
      
    </NavigationContainer>
  );
}

export default Navigation;
