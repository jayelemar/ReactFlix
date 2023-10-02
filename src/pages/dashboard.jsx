import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaCloudUploadAlt,
  FaBullhorn,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import Profile from "../Header/dashnav";
import  UserStatsContent  from '../DashboardContent.jsx/Userstats';

import UploadContent from "../DashboardContent.jsx/Upload";
import AdsContent from "../DashboardContent.jsx/Ads";
import SettingsContent from "../DashboardContent.jsx/Settings";
import LogoutContent from "../DashboardContent.jsx/Log-Out";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Navbar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabItem = styled.div`
  padding: 10px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center; /* Center the icon and text vertically */

  ${(props) =>
    props.active &&
    `
    background-color: #007bff;
    color: #fff;
  `}
`;

const IconWrapper = styled.div`
  margin-right: 10px; /* Add spacing between icon and text */
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  h3 {
    text-align: center; /* Center the text horizontally */
    margin-top: -450px; /* Add top margin */
  }
`;

const TabbedMenu = () => {
  const [activeTab, setActiveTab] = useState("user-stats");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const data1 = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const data2 = {
    labels: ['Label A', 'Label B', 'Label C'],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const data3 = {
    labels: ['Category X', 'Category Y', 'Category Z'],
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section>
      <Profile />
      <Container>
        <Navbar>
          <TabMenu>
            <TabItem
              active={activeTab === "user-stats"}
              onClick={() => handleTabClick("user-stats")}
            >
              <IconWrapper>
                <FaUser />
              </IconWrapper>
              User Statistics
            </TabItem>
            <TabItem
              active={activeTab === "upload"}
              onClick={() => handleTabClick("upload")}
            >
              <IconWrapper>
                <FaCloudUploadAlt />
              </IconWrapper>
              Upload
            </TabItem>
            <TabItem
              active={activeTab === "ads"}
              onClick={() => handleTabClick("ads")}
            >
              <IconWrapper>
                <FaBullhorn />
              </IconWrapper>
              Ads
            </TabItem>
            <TabItem
              active={activeTab === "settings"}
              onClick={() => handleTabClick("settings")}
            >
              <IconWrapper>
                <FaCog />
              </IconWrapper>
              Settings
            </TabItem>
            <TabItem
              active={activeTab === "log-out"}
              onClick={() => handleTabClick("log-out")}
            >
              <IconWrapper>
                <FaSignOutAlt />
              </IconWrapper>
              Log-Out
            </TabItem>
          </TabMenu>
        </Navbar>

        <Content>
          {activeTab === "user-stats" && <UserStatsContent />}
          {activeTab === "upload" && <UploadContent handleUploadClick={handleUploadClick} />}
          {activeTab === "ads" && <AdsContent />}
          {activeTab === "settings" && <SettingsContent />}
          {activeTab === "log-out" && <LogoutContent />}
        </Content>
      </Container>
    </section>
  );
};

export default TabbedMenu;
