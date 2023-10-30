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
    // Fetch user roles data from the backend
    axios.get('/api/get-user-roles')
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
      <Link to="/nav">
        <button>
          nav
        </button>
      </Link>
      <Link to="/usersansroles">
        <button>
          UsersRolesDropdown
        </button>
      </Link>
    </Container>
  );
}

export default UserRolesList;
