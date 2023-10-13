import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height:100vh;
  border: 1px solid #ccc; /* Add a border */
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 140%;
`;

const Table = styled.table`
  width: 100%;
  
  border-collapse: collapse; /* Collapse table borders */
  border: 1px solid #ccc; /* Add a border */
`;

const TableRow = styled.tr`
  text-align: center;height:100%;
  border-bottom: 1px solid #ccc; /* Add a border to each row */
`;

const TableCell = styled.td`
  padding: 8px;
`;
const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0 10px 90%;
`;
const ActionButton = styled.button`
  background-color: #007bff; /* Blue background color */
  color: #fff; /* White text color */
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`; /* Add any additional styles as needed */
  
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      username: 'User1',
      password: 'Password1',
      hashedPassword: 'Hashed1',
      adminHashedPassword: 'AdminHashed1',
    },
    {
      id: 2,
      username: 'User2',
      password: 'Password2',
      hashedPassword: 'Hashed2',
      adminHashedPassword: 'AdminHashed2',
    },
  ]);

  const addRow = () => {
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        username: '',
        password: '',
        hashedPassword: '',
        adminHashedPassword: '',
      },
    ]);
  };

  const handleInputChange = (e, id, field) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [field]: e.target.value,
        };
      }
      return row;
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  return (
    <TableContainer>
     <AddButton onClick={addRow}>Add Row</AddButton>
      <Table>
        <thead>
          <TableRow>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Hashed Password</th>
            <th>Action</th>
            <th>Admin Hashed Password</th>
            <th>Action</th>
          </TableRow>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.username}
                  onChange={(e) => handleInputChange(e, row.id, 'username')}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.password}
                  onChange={(e) => handleInputChange(e, row.id, 'password')}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.hashedPassword}
                  onChange={(e) => handleInputChange(e, row.id, 'hashedPassword')}
                />
              </TableCell>
              <TableCell>
              <ActionButton>
                  <FontAwesomeIcon icon={faPlus} /> {/* Create */}
                </ActionButton>
                <ActionButton>
                  <FontAwesomeIcon icon={faEdit} /> {/* Update */}
                </ActionButton>
                <ActionButton>
                  <FontAwesomeIcon icon={faTrash} /> {/* Delete */}
                </ActionButton>

              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.adminHashedPassword}
                  onChange={(e) => handleInputChange(e, row.id, 'adminHashedPassword')}
                />
              </TableCell>
              <TableCell>
              <ActionButton>
                  <FontAwesomeIcon icon={faPlus} /> {/* Create */}
                </ActionButton>
                <ActionButton>
                  <FontAwesomeIcon icon={faEdit} /> {/* Update */}
                </ActionButton>
                <ActionButton>
                  <FontAwesomeIcon icon={faTrash} /> {/* Delete */}
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default App;
