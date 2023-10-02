import React, { useState } from "react";
import styled from "styled-components"; // Import styled-components

const Container = styled.div`
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  text-align: left;
  margin: 20px auto;
  padding: 20px;
  width: 80%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const AdsContent = () => {
  const [bottomAdsVisible, setBottomAdsVisible] = useState(false);
  const [popupAdsVisible, setPopupAdsVisible] = useState(false);

  const handleBottomAdsClick = () => {
    setBottomAdsVisible(!bottomAdsVisible);
    setPopupAdsVisible(false);
  };

  const handlePopupAdsClick = () => {
    setPopupAdsVisible(!popupAdsVisible);
    setBottomAdsVisible(false);
  };

  return (
    <Container>
      <h3>Edit the ads Here:</h3>

      <ButtonsContainer>
        <button onClick={handleBottomAdsClick}>
          {bottomAdsVisible ? "Hide Bottom Ads Form" : "Show Bottom Ads Form"}
        </button>

        <button onClick={handlePopupAdsClick}>
          {popupAdsVisible ? "Hide Pop-up Ads Form" : "Show Pop-up Ads Form"}
        </button>
      </ButtonsContainer>

      {bottomAdsVisible && (
        <FormContainer>
          <h4>Bottom Ads Form</h4>
          <button>Upload</button>
        </FormContainer>
      )}

      {popupAdsVisible && (
        <FormContainer>
          <h4>Pop-up Ads Form</h4>
          <button>Upload</button>
        </FormContainer>
      )}
    </Container>
  );
};

export default AdsContent;
