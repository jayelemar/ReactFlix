import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../Search/search";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444654;
  height: 60px;
  padding: 0 20px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 40px; /* Set the height of the icon */
  width: 50px; /* Let the width adjust to maintain aspect ratio */
  margin-right: auto;
  border-radius:10px;
`;

const NavLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
`;

const NavLinkItem = styled.li`
  margin-left: 30px;
  position: relative;
  font-family: "Montserrat", sans-serif;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.i`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo src="/images/OIP.jpg" alt="Reactflix Logo" />
      
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/home">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/anime">Anime</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/series">Series</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/login">Login</NavLink>
        </NavLinkItem>
      </NavLinks>
      <NavLinkItem>
        <SearchBarContainer>
        <SearchBar />
        <SearchIcon className="fas fa-search" />
      </SearchBarContainer>
      </NavLinkItem>
      
    </StyledNavbar>
  );
};

export default Navbar;
