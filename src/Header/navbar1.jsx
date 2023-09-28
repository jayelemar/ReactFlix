import React, { Component } from "react";
import styled from "styled-components";
import { FaBars, FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilm,
  faTv,
  faStar,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const SidebarMenuBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  height:70px;
  padding: 0 20px;
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.img`
  height: 40px;
  width: 50px;
  margin-right: auto;
  border-radius: 10px;
`;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  transition: left 0.3s ease-in-out;
  z-index: ${(props) => (props.isOpen ? "1000" : "-1")};

  /* Glassmorphism effect */
  background: rgba(255, 255, 255, 0.15); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Apply blur effect */
`;

const HeaderButton = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 20px;
  margin-left: 100px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
`;

const SearchInput = styled.input`
  background-color: #fff;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  height: 20px;
  width: 800px;
  margin: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: #444654;
  color: white;
  border: none;
  cursor: pointer;
`;

const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const GenreGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GenreTag = styled.a`
  padding: 5px 10px;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid black;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      isSidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, isSidebarOpen } = this.state;

    return (
      <nav style={{ height: "60px" }}>
        <SidebarMenuBg>
          <Logo src="/images/OIP.jpg" alt="Reactflix Logo" />
          <HeaderButton onClick={this.toggleSidebar}>
            <FaBars />
          </HeaderButton>
          <Search>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
          </Search>

          <LoginLink href="/login">
            <FaUser className="user-icon" />
            <span style={{ margin: "20px" }}>Login</span>
          </LoginLink>
        </SidebarMenuBg>
        <SideMenuWrapper isOpen={isSidebarOpen}>
          <button
            onClick={this.toggleSidebar}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              border: "none",
              background: "#666666",
              cursor: "pointer",
            }}
          >
            &larr;
          </button>

          <br />
          <ul>
            <h3 style={{ color: "black" }}>SideMenu</h3>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="/home"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/movies"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                <FontAwesomeIcon icon={faFilm} /> Movies
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/tv-shows"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                <FontAwesomeIcon icon={faTv} /> TV Shows
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/top-imdb"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                <FontAwesomeIcon icon={faStar} /> Top Rated
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <a
                href="/android-app"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                <FontAwesomeIcon icon={faMobileAlt} /> Android App
              </a>
            </div>

            <h3 style={{ color: "black" }}>GENRE</h3>
            <GenreGridContainer>
              <GenreTag href="/action">Action</GenreTag>
              <GenreTag href="/action-adventure">Action & Adventure</GenreTag>
              <GenreTag href="/adventure">Adventure</GenreTag>
              <GenreTag href="/animation">Animation</GenreTag>
              <GenreTag href="/biography">Biography</GenreTag>
              <GenreTag href="/comedy">Comedy</GenreTag>
              <GenreTag href="/crime">Crime</GenreTag>
              <GenreTag href="/documentary">Documentary</GenreTag>
              <GenreTag href="/drama">Drama</GenreTag>
              <GenreTag href="/family">Family</GenreTag>
              <GenreTag href="/fantasy">Fantasy</GenreTag>
              <GenreTag href="/history">History</GenreTag>
              <GenreTag href="/horror">Horror</GenreTag>
              <GenreTag href="/kids">Kids</GenreTag>
              <GenreTag href="/music">Music</GenreTag>
              <GenreTag href="/mystery">Mystery</GenreTag>
              <GenreTag href="/news">News</GenreTag>
              <GenreTag href="/reality">Reality</GenreTag>
              <GenreTag href="/romance">Romance</GenreTag>
              <GenreTag href="/sci-fi-fantasy">Sci-Fi & Fantasy</GenreTag>
              <GenreTag href="/science-fiction">Science Fiction</GenreTag>
              <GenreTag href="/soap">Soap</GenreTag>
              <GenreTag href="/talk">Talk</GenreTag>
              <GenreTag href="/thriller">Thriller</GenreTag>
              <GenreTag href="/tv-movie">TV Movie</GenreTag>
              <GenreTag href="/war">War</GenreTag>
              <GenreTag href="/war-politics">War & Politics</GenreTag>
              <GenreTag href="/western">Western</GenreTag>
            </GenreGridContainer>
          </ul>
        </SideMenuWrapper>
      </nav>
    );
  }
}

export default Navbar;
