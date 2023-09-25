import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

import styled from 'styled-components';

const PopupContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and vertically */
  width: 800px; /* Set your desired fixed width */
  height: 800px; /* Set your desired fixed height */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure it's above other content */
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 100vmax rgba(0, 0, 0, 0.5); /* Increased spread and inset shadow */
  text-align: center; /* Center the content */
  position: relative;
  max-width: 80%; /* Limit maximum width */
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const AdImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0; /* Add margin for spacing */
`;

const AdText = styled.p`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const ShareButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ShareButton = styled.div`
  background-color: #0074e4;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-grow: 1;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:hover {
    background-color: #0052a7;
  }

  display: flex;
  align-items: center; /* Center the icon and text vertically */
  justify-content: center; /* Center the icon and text horizontally */

  svg {
    margin-right: 5px; /* Add spacing between icon and text */
  }
`;


function PopUpAd() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to show the pop-up after a few seconds (e.g., 5 seconds)
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Adjust the time as needed

    // Clean up the timeout to prevent memory leaks
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const shareUrl = 'https://example.com';

  const shareOnFacebook = () => {
    // Open the Facebook Share dialog
    window.FB.ui({
      method: 'share',
      href: shareUrl,
    });
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?app_id=YOUR_APP_ID&link=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnReddit = () => {
    window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=YOUR_TITLE`, '_blank');
  };

  const shareOnTelegram = () => {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(shareUrl)}&text=YOUR_MESSAGE`, '_blank');
  };

  useEffect(() => {
    // Load Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_APP_ID',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <PopupContainer isOpen={isOpen}>
      <PopupContent>
        <AdImage src="/images/spidey.jpg" alt="Advertisement" />
        <AdText>This is a pop-up ad. Add your ad content here.</AdText>
        <CloseButton onClick={handleCloseClick}>X</CloseButton>
        <ShareButtonContainer>
          <ShareButton onClick={shareOnFacebook}> 
            <div className="fb-share-button" data-href={shareUrl} data-layout="button" data-size="large">
            <FaFacebook /> Share on Facebook
            </div>
          </ShareButton>
          <ShareButton onClick={shareOnTwitter}>
  <FaTwitter /> Share on Twitter
</ShareButton>
<ShareButton onClick={shareOnWhatsApp}>
  <FaWhatsapp /> Share on Instagram
</ShareButton>
<ShareButton onClick={shareOnMessenger}>
  <FaFacebookMessenger /> Share on Messenger
</ShareButton>
        </ShareButtonContainer>
      </PopupContent>
    </PopupContainer>
  );
}

export default PopUpAd;
