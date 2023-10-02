import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

// Styled modal component
const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

const UploadContent = ({ handleUploadClick }) => {
  const [formData, setFormData] = useState({
    movieFile: "",
    movieTitle: "",
    movieStory: "",
    HD: "",
    genre: "",
    ratings: "",
    duration: "",
    trailer: "",
    cast: "",
    release: "",
    country: "",
    production: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // You can handle form submission logic here
    console.log("Form Data:", formData);

    // Clear the form fields after submission
    setFormData({
        id: "",
        movieFile: "",
        movieTitle: "",
        movieStory: "",
        HD: "HD",
        genre: "Horror",
        ratings: "",
        duration: "",
        trailer: "",
        cast: "",
        release: "",
        country: "USA",
        production: "",
    });

    closeModal(); // Close the modal after submission
  };

  return (
    <div>
      <div style={{marginTop:"-450%"}}>
        <h4>Upload Movies</h4>
        <button onClick={openModal}>Upload</button>
      </div>

      {/* Styled Modal */}
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <h2>Upload Movie Content</h2>
        <input
          type="file"
          name="movieFile"
          value={formData.movieFile}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="movieTitle"
          placeholder="Movie Title"
          value={formData.movieTitle}
          onChange={handleInputChange}
        />
        <br /><input
          type="text"
          name="id"
          placeholder="ID Number"
          value={formData.id}
          onChange={handleInputChange}
        /><br />
        <textarea
          name="movieStory"
          placeholder="Movie Details"
          value={formData.movieStory}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <select
          name="HD"
          value={formData.HD}
          onChange={handleInputChange}
        >
          <option value="non">n/a</option>
          <option value="HD">HD</option>
          <option value="SD">SD</option>
        </select>
        <br />
        <select
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
        >
          <option value="none">n/a</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Musical">Musical</option>
          <option value="Animation">Animation</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
        </select>
        <br />
        <input
          type="text"
          name="ratings"
          placeholder="Ratings"
          value={formData.ratings}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="trailer"
          placeholder="Trailer"
          value={formData.trailer}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="cast"
          placeholder="Cast"
          value={formData.cast}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="release"
          placeholder="Release Date"
          value={formData.release}
          onChange={handleInputChange}
        />
        <br />
        <select name="country" value={formData.country} onChange={handleInputChange}>
        <option value="n/a">n/a</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          {/* Add more countries */}
        </select>
        <br />
        <input
          type="text"
          name="production"
          placeholder="Production"
          value={formData.production}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </StyledModal>
    </div>
  );
};

export default UploadContent;
