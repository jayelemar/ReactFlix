import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Import your DeleteModal component here
import DeleteModal from '../Modal/Delete'; // Replace with the actual path

const MovieTableWrapper = styled.div`
  margin: 0 20px;
  width: 100%;
  margin-bottom: 55%;
  position: sticky;
`;

const TableContainer = styled.div`
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #333;
  color: white;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: #333;
  color: white;
  z-index: 2;
  width: 8%;
`;

const ActionIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
`;

const DetailsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
`;

const MovieTable = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingRowIndex, setDeletingRowIndex] = useState(null);
  const handleEditClick = (index) => {
    // Implement your edit logic here
    console.log('Edit clicked for index:', index);
  };

  const handleDeleteClick = (index) => {
    // Implement your delete logic here
    console.log('Delete clicked for index:', index);
    setDeletingRowIndex(index); // Set the index of the row to delete
    setIsDeleteModalOpen(true);
  };

  const handleDetailsClick = (index) => {
    // Implement your details logic here
    console.log('Details clicked for index:', index);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Implement your delete confirmation logic here
    setIsDeleteModalOpen(false);
  };

  const [movies, setMovies] = useState([
    {
      name: 'Movie 1',
      releaseDate: '2023-01-01',
      genre: 'Action',
      country: 'USA',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      duration: '2h 30min',
      cast: 'Actor 1, Actor 2, Actor 3',
      quality: 'HD',
    },
    {
      name: 'Movie 2',
      releaseDate: '2023-02-15',
      genre: 'Comedy',
      country: 'UK',
      details: 'A hilarious comedy movie',
      duration: '1h 45min',
      cast: 'Actor A, Actor B, Actor C',
      quality: 'Full HD',
    },
    // Add more movie data here
  ]);
  return (
    <MovieTableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Movie Name</TableHeaderCell>
              <TableHeaderCell>Release Date</TableHeaderCell>
              <TableHeaderCell>Genre</TableHeaderCell>
              <TableHeaderCell>Country</TableHeaderCell>
              <TableHeaderCell>Movie Details</TableHeaderCell>
              <TableHeaderCell>Duration</TableHeaderCell>
              <TableHeaderCell>Cast</TableHeaderCell>
              <TableHeaderCell>Movie Quality</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={index}>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{movie.releaseDate}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.country}</TableCell>
                <TableCell>{movie.details}</TableCell>
                <TableCell>{movie.duration}</TableCell>
                <TableCell>{movie.cast}</TableCell>
                <TableCell>{movie.quality}</TableCell>
                <TableCell>
                  <ActionIcons>
                    <EditButton onClick={() => handleEditClick(index)}>
                      <FontAwesomeIcon icon={faEdit} title="Edit" />
                    </EditButton>
                    <DeleteButton onClick={() => handleDeleteClick(index)}>
                <FontAwesomeIcon icon={faTrash} title="Delete" />
              </DeleteButton>
                    <DetailsButton onClick={() => handleDetailsClick(index)}>
                      <FontAwesomeIcon icon={faInfoCircle} title="Details" />
                    </DetailsButton>
                  </ActionIcons>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCancelDelete}
        onDelete={() => {
          // Delete the row with the corresponding index
          if (deletingRowIndex !== null) {
            const updatedMovies = [...movies];
            updatedMovies.splice(deletingRowIndex, 1);
            setDeletingRowIndex(null); // Reset the deletingRowIndex
            setMovies(updatedMovies); // Update the movies state
          }
          handleConfirmDelete();
        }}
      />
      
    </MovieTableWrapper>
  );
};

export default MovieTable;
