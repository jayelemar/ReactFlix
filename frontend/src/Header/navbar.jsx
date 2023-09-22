import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:70px;
  background: rgba(255, 255, 255, 0.15); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Shadow effect */
  color: white; /* Text color */

  @media (max-width: 1000px) {
    display: none;
  }
`;



const Logo = styled.img`
  height: 40px;
  width: 50px;
  margin-right: auto;
  border-radius: 10px;
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

const Search = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
  justify-content: flex-end; /* Align to the right */
  cursor: pointer;
`;

const SearchIcon = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  background-color: #fff;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 0;
  height: 20px;
  width: ${({ expanded }) => (expanded ? "100px" : "0")};
  margin: 20px;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledNavbar>
      <Logo src="/images/OIP.jpg" alt="Reactflix Logo" />
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/home">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/movie">Movies</NavLink>
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
        <Search onClick={toggleSearch}>
          <SearchIcon>{expanded ? "✕" : "🔍"}</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            expanded={expanded}
          />
        </Search>
      </NavLinkItem>
    </StyledNavbar>
  );
};

export default Navbar;
