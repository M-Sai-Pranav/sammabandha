import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserRolesList() {
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,

    };
    // Fetch user roles data from the backend
    axios.get('/api/users/get-user-roles-table', { headers })
      .then((response) => setUserRoles(response.data))
      .catch((error) => console.error('Error fetching user roles:', error));
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRoles.map((userRole) => (
              <TableRow key={userRole.user_role_id}>
                <TableCell>{userRole.user_id}</TableCell>
                <TableCell>{userRole.role_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/usersansroles">
        <button type="submit">
          UsersRolesDropdown
        </button>
      </Link>
    </Container>
  );
}

export default UserRolesList;
