import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-family: Gotham, sans-serif;
  margin: 0; /* Reset margin to center content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  width: 100vw;
  height: 120vh;
  background-image: url("/images/lou1.jpg");
  background-size: 100% 100%;
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
  color: black;
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
  color: #000;
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
background-color:white;

  &:last-child {
    margin-right: 0;
  }

  .icon {
    margin-right: 5px;
  }
`;




const MovieDetails = () => {
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
        <h2>Expend4bles</h2>
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
            Action, Adventure, Thriller
          </StyledP>
          <StyledP>
            <StyledStrong>
              <CustomIcon src="/images/star.svg" alt="Star Icon" />
            </StyledStrong>
            PG-13
          </StyledP>
          <StyledP>
            <CustomIcon src="/images/duration.svg" alt="Duration Icon" />
            <StyledStrong>103 m</StyledStrong>
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
          Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.
        </StyledMovieDescription>

        <MovieInfoGrid>
          <div>
            <h3>Cast</h3>
            <StyledP>Jason Statham, Megan Fox, Iko Uwais, Eddie Hall, Nicole Andrews</StyledP>
            <h3>Production:</h3>
            <StyledP>Millennium Films, Nu Image, Campbell Grobman Films, Lionsgate</StyledP>
            <h3>Country:</h3>
            <StyledP>United States of America</StyledP>
          </div>
          <div>
            <h3>Duration:</h3>
            <StyledP>103 m</StyledP>
            <h3>Rating:</h3>
            {/* Add a rating component here */}
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

      {/* Episode List */}
  
    </Wrapper>
  );
};

export default MovieDetails;
