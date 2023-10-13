import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; // Import the desired icons

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

const TableContainer = styled.div`
  text-align: left;
  margin: 40px auto;
  padding: 20px;
  width: 90%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  font-size: 24px;
  margin-bottom: 30px; // Adjust the font size as needed
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.thead`
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
`;

const AdsContent = () => {
  return (
    <Container>
      <h3>Table of 4</h3>

      <TableContainer>
        <AddButton>+</AddButton>
        <Table> 
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Bottom Ads</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell>Pop-up Ads</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Your Data Here</TableCell>
              <TableCell>
                <button>
                  <FontAwesomeIcon icon={faPlus} /> {/* Create */}
                </button>
                <button>
                  <FontAwesomeIcon icon={faEdit} /> {/* Update */}
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrash} /> {/* Delete */}
                </button>
              </TableCell>
              <TableCell>Your Data Here</TableCell>
              <TableCell>
                <button>
                  <FontAwesomeIcon icon={faPlus} /> {/* Create */}
                </button>
                <button>
                  <FontAwesomeIcon icon={faEdit} /> {/* Update */}
                </button>
                <button>
                  <FontAwesomeIcon icon={faTrash} /> {/* Delete */}
                </button>
              </TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
       
      </TableContainer>
    </Container>
  );
};

export default AdsContent;
