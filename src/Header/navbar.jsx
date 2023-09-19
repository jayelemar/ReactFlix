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

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
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
      <Logo>
        <NavLink to="/">ReactFlix</NavLink>
      </Logo>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/Home">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/Movies">Movies</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/Anime">Anime</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/Series">Series</NavLink>
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
