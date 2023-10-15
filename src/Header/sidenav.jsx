import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MobileSidebar = styled.div`
  width: 0;
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px;
  background-color: #333;
  transition: 0.3s;
  overflow-x: hidden;
  
  &.open {
    width: 250px;
    left: 0;
  }
`;

const SidebarHeader = styled.div`
  text-align: center;
  padding: 15px;
  background-color: #222;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 15px;
  text-align: center;
`;

const SidebarMenuLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Content = styled.div`
  margin-left: 0;
  padding: 20px;
  transition: margin-left 0.3s;
`;

const OpenButton = styled.button`
  position: fixed;
  left: 10px;
  top: 10px;
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

  render() {
    return (
      <Container>
        <MobileSidebar className={this.state.isSidebarOpen ? "open" : ""}>
          <SidebarHeader>
            <h2>Sidebar Menu</h2>
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem><SidebarMenuLink href="#">Home</SidebarMenuLink></SidebarMenuItem>
            <SidebarMenuItem><SidebarMenuLink href="#">About</SidebarMenuLink></SidebarMenuItem>
            <SidebarMenuItem><SidebarMenuLink href="#">Services</SidebarMenuLink></SidebarMenuItem>
            <SidebarMenuItem><SidebarMenuLink href="#">Contact</SidebarMenuLink></SidebarMenuItem>
          </SidebarMenu>
        </MobileSidebar>

        <OpenButton onClick={this.toggleSidebar}>Open Sidebar</OpenButton>

        <Content>
          {/* Your page content goes here */}
          <h1>Welcome to my website</h1>
          <p>This is the main content of your page.</p>
        </Content>
      </Container>
    );
  }
}

export default Navbar;
