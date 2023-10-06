import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  font-family: "Gotham", sans-serif;
  font-style: bold;
  color: ${(props) => (props.isBlack ? "white" : "black")};
  background-color: ${(props) =>
    props.isBlack ? "black" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const TextLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
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
  background-color: transparent;
  border-radius: 25%;
  padding: 5px 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

const SubscribeButton = styled(NavLink)`
  background-color: #e50914;
  border-radius: 25px;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  z-index: 1000;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

const SubscribeModalButton = styled.button`
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Navbar = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBlack(true);
      } else {
        setIsBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledNavbar isBlack={isBlack}>
        <TextLogo>ReactFlix</TextLogo>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/home">Browse</NavLink>
          </NavLinkItem>

          <NavLinkItem>
            <NavLink to="/reg">Login</NavLink>
          </NavLinkItem>
        </NavLinks>

        <NavLinkItem>
          <SubscribeButton onClick={toggleModal}>Subscribe</SubscribeButton>
          <Modal isOpen={isModalOpen}>
            <CloseButton onClick={toggleModal}>&times;</CloseButton>
            <p>Want to Avail 5$ Lifetime No Ads?</p>
            <SubscribeModalButton>Subscribe Now</SubscribeModalButton>
          </Modal>
        </NavLinkItem>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
