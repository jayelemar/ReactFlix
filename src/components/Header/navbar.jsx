import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

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
  color: white; /* Set the color to white */
  background-color: rgba(0, 0, 0, 0.1); /* Set the background color to the desired color */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 999;
`;

const TextLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  margin-right: auto;
  border-radius: 10px;
  color: white; /* Set the color to white */
`;

const NavLinks = styled.ul`
  display: ${props => props.isMenuOpen ? 'flex-col' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  margin: auto;
  padding: 25rem 3rem;
  list-style: none;
  justify-content: center;
  flex-grow: 1;

  @media screen and (min-width: 640px) {
      display: flex;
      position: relative;
      height: auto;
      width: auto;
      background-color: transparent;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: center;
      flex-grow: 1;
    }
`;

const NavLinkItem = styled.li`
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border-radius: 25%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

const SubscribeButton = styled(NavLink)`
  background-color: #e50914;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;

  @media screen and (min-width: 640px) {
    display: flex;
  }
`;

const MenuIcon = styled(AiOutlineMenu)`
  font-size: 30px;
  color: white;
  margin: 0 1rem;
  display: flex;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  font-size: 30px;
  color: white;
  margin: 0 1rem;
  display: flex;
  cursor: pointer;
  top: 2.5rem;
  right: 0;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const Modal = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0; /* Fixed position from the top */
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Line = styled.div`
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const SubscribeModalButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const ModalContentCentered = styled.div`
  text-align: center;
`;



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log(isMenuOpen);
  };


  return (
    <>
      <StyledNavbar>
        <TextLogo style={{ marginLeft: "3%" }}>ReactFlix</TextLogo>
        <NavLinks isMenuOpen={isMenuOpen}>
            <NavLinkItem>
              <NavLink to="/home">Browse</NavLink>
            </NavLinkItem>

            <NavLinkItem>
              <NavLink to="/reg">Login</NavLink>
            </NavLinkItem>
            <CloseIcon size={30} onClick={closeMenu}/>
        </NavLinks>
        <NavLinkItem style={{ marginRight: "3%" }}>
            <SubscribeButton onClick={toggleModal} style={{zIndex: '1'}}>Subscribe</SubscribeButton>
            
            <Modal isOpen={isModalOpen}>
              <ModalContent>
                <CloseButton onClick={toggleModal}>&times;</CloseButton>
                <ModalContentCentered>
                  <p>Want to Avail 5$ Lifetime No Ads?</p>
                  <Line />
                  <p>Or</p>
                  <Line />
                  <p>Want to Avail 1$ 1 Month No Ads?</p>
                </ModalContentCentered>
                <Line />
                <SubscribeModalButton>Subscribe Now</SubscribeModalButton>
                
              </ModalContent>
            </Modal>
        </NavLinkItem>
        <MenuIcon size={30} onClick={toggleMenu}/>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
