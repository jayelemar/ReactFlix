import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  background-color: black;
`;

const Column = styled.div`
  flex: 1;
  max-width: calc(20% - 20px);
  padding: 20px;
  margin: 10px;
  
  h2,
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    color: #fff;
  }
  p {
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;
    @hover{
      text-decoration: underline green;
    }
  }
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialMediaItem = styled.li`
  display: inline-block;
  margin-right: 10px; /* Add some spacing between icons */
`;

function App() {
  // Define social media URLs
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://twitter.com/";
  const instagramUrl = "https://www.instagram.com/";
  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <Container>
      <Column>
        <h2 style={{ fontSize: "30px" }}>ReactFlix</h2>
        <p>
          <strong>ReactFlix</strong> is a Free Movies streaming app with zero
          ads. We let you watch movies online without having to register or pay,
          with over 10,000 movies and TV-Series. You can also download full
          movies from MoviesCloud and watch them later if you want
        </p>
      </Column>
      <Column>
        <h3>About</h3>
        <ul>
          <li><a href="/about">About ReactFlix</a></li>
          <li><a href="/term">Terms & Conditions</a></li>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </Column>
      <Column>
        <h3>Our Show</h3>
        <ul>
          <li><a href="/movie">Movies</a></li>
          <li><a href="/series">TV Shows</a></li>
          <li><a href="/anime">Anime</a></li>
          <li><a href="/more">And Many More</a></li>
        </ul>
      </Column>
      <Column>
        <h3>Genre</h3>
        <ul>
          <li><a href="/horror">Horror</a></li>
          <li><a href="/sci-fi">Sci-Fi</a></li>
          <li><a href="/romance">Romance</a></li>
          <li><a href="/actions">Actions</a></li>
          <li><a href="/adventure">Adventure</a></li>
          <li><a href="/other-genres">...</a></li>
        </ul>
      </Column>
      <Column>
        <h3>Social Media:</h3>
        <SocialMediaList>
          <SocialMediaItem>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialMediaItem>
        </SocialMediaList>
      </Column>
      <Column>
        <h3>Credit</h3>
        <ul>
          <li><a href="/about">About My Team</a></li>
         
        </ul>
      </Column>
    </Container>
  );
}

export default App;
