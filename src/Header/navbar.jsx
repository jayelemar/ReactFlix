import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import DropdownComponent from "../components/dropdown"; // Import the DropdownComponent

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191970;
  height: 60px;
  padding: 0 20px; /* Add some padding for better spacing */
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1000px) {
    display: none; /* Hide the whole navbar when screen width is less than 1000px */
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
  justify-content: center; /* Center the NavLinks horizontally */
  flex-grow: 1; /* Allow NavLinks to take up available space */
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

const SearchBar = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
`;

const SearchIcon = styled.i`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const Navbar = () => {
  const animeDropdownItems = ["Adventure", "Isekai", "Echi"];
  const moviesDropdownItems = ["Action", "Drama", "Comedy"];
  const seriesDropdownItems = ["Season 1", "Season 2", "Season 3"];

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
          <DropdownComponent label="Movies" items={moviesDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
          <DropdownComponent label="Anime" items={animeDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
          <DropdownComponent label="Series" items={seriesDropdownItems} />
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/login">Login</NavLink>
        </NavLinkItem>
      </NavLinks>
      <SearchBarContainer>
        <SearchBar type="text" placeholder="Search" />
        <SearchIcon className="fas fa-search" />
      </SearchBarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
