import React from "react";
import styled from "styled-components";
import NavDash from "../Header/navdash";
import { FaUser, FaUpload, FaAd, FaCog, FaSignOutAlt } from 'react-icons/fa';

const IconWithMargin = styled.div`
  display: inline-block; /* Ensures icons are displayed in a row */
  margin: 10px; /* Add 10px margin to the right of each icon */
`;
function App() {
  return (
    <div className="App" style={{height:"600px"}}>
      <NavDash />
      <div className="main-content" style={{marginBottom:"20px", backgroundColor:"gray", width:"200px",height:"100vh", border:"1px solid black"}}>
      <div>
      <div className="user-stats" style={{ border: "1px solid black" }}>
        <h3> <IconWithMargin><FaUser /></IconWithMargin> User Statistics</h3>
        {/* Add user statistics here */}
      </div>

      <div className="Upload" style={{ border: "1px solid black" }}>
        <h3> <IconWithMargin><FaUpload /></IconWithMargin> Upload</h3>
        {/* Add settings options here */}
      </div>

      <div className="ads" style={{ border: "1px solid black" }}>
        <h3> <IconWithMargin><FaAd /></IconWithMargin> Ads</h3>
        {/* Add settings options here */}
      </div>

      <div className="settings" style={{ border: "1px solid black" }}>
        <h3> <IconWithMargin><FaCog /></IconWithMargin> Settings</h3>
        {/* Add settings options here */}
      </div>

      <div className="log-out" style={{ border: "1px solid black" }}>
        <h3> <IconWithMargin><FaSignOutAlt /></IconWithMargin> Log-Out</h3>
        {/* Add settings options here */}
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
