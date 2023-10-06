import React from "react";
import { BsClock } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin: 180px;
  width: 100vw;
  height: 100vh;
`;

const Poster = styled.div`
  margin: 100px 100px 0 100px; /* 100px top margin, 20px right and left margins, 0 bottom margin */
`;


const Details = styled.div`
  margin: 50px;

  h2 {
    font-size: 24px;
  }
`;

const CustomIcon = styled.img`
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
  margin-right: 5px;
`;

const StyledStrong = styled.strong`
  display: inline;
  font-weight: bold;
`;

const StyledP = styled.p`
  display: inline;
  margin: 5px;
`;
const MovieInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  text-align: left;
  align-items: flex-start; /* Align the content to the top within columns */
  h3 {
    margin-bottom: 0.5rem;
  }
`;
const StyledMovieDescription = styled.div`
    font-family: Arial, sans-serif;
    color: #333;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MovieButtons = styled.div`
  display: flex;
  flex-direction: row; /* Change to 'column' if you want them in a column */
  margin-top: 10px;
`;

const Button = styled.button`
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  .icon {
    margin-right: 5px;
  }
`;

const MoviePosterDetails = () => {
  return (
    <Wrapper>
      {/* Movie Poster */}
      <Poster>
        <img
          style={{ height: "300px", width: "200px" }}
          src="/images/lou.jpg"
          alt="Movie Poster"
        />
      </Poster>

      {/* Movie Details */}
      <Details>
        <h2>Movie Title</h2>
        <div>
          <StyledP>
            <StyledStrong>
              <CustomIcon src="/images/hd.svg" alt="HD Icon" />
            </StyledStrong>
          </StyledP>
          <StyledP>
            <StyledStrong>
              <CustomIcon src="/images/genre.svg" alt="Genre Icon" />
            </StyledStrong>
            Horror
          </StyledP>
          <StyledP>
            <StyledStrong>
              <CustomIcon src="/images/star.svg" alt="Star Icon" />
            </StyledStrong>
            PG-13
          </StyledP>
          <StyledP>
            <CustomIcon src="/images/duration.svg" alt="Duration Icon" />
            <StyledStrong>2 hours</StyledStrong>
          </StyledP>
          <StyledP>
            <StyledAnchor href="#">
              <CustomIcon src="/images/play.svg" alt="Play Icon" />
              Trailer
            </StyledAnchor>
          </StyledP>
        </div>

        <StyledMovieDescription>
            <h3>Movie Description</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac metus vitae sapien tincidunt vestibulum. Nulla facilisi. Integer auctor, felis sit amet tristique pharetra, justo quam venenatis massa, a malesuada lectus arcu non ligula. Ut euismod, justo eget pharetra aliquet, sem sapien congue turpis, id lacinia justo ex ac lectus.
    </StyledMovieDescription>
        <MovieInfoGrid>
      <div>
        <h3>Cast</h3>
        <StyledP>Actor 1</StyledP>
        <StyledP>Actor 2</StyledP>
        <StyledP>Actor 3</StyledP> 
        <h3>Release:</h3>
        <StyledP>2023</StyledP>
        <h3>Country:</h3>
        <StyledP>America</StyledP>
      </div>
      <div>
       
        
        <h3>Duration:</h3>
        <StyledP>2 hours</StyledP>
        <h3>Production:</h3>
        <StyledP>#</StyledP> 
        <MovieButtons>
        <Button>
          <CustomIcon src="/images/download.svg" alt="Download Icon" />
          Share
        </Button>
        <Button>
          <CustomIcon src="/images/share.svg" alt="Share Icon" />
          Download
        </Button>
        {/* New Button */}
        <Button>
          <CustomIcon src="/images/star.svg" alt="Your Button Icon" />
          Rate
        </Button>
      </MovieButtons>
      </div>
     
    </MovieInfoGrid>
      </Details>

      {/* Movie Buttons */}
      
      
    </Wrapper>
  );
};

export default MoviePosterDetails;
