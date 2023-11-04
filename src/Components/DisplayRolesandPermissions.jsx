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

function RolePermissionsList() {
  const [rolePermissions, setRolePermissions] = useState([]);

  useEffect(() => {
    // Fetch role permissions data from the backend
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
    axios.get('/api/roles-and-permissions/display-role-permissions', { headers })
      .then((response) => setRolePermissions(response.data))
      .catch((error) => console.error('Error fetching role permissions:', error));
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Permission Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rolePermissions.map((rolePermission) => (
              <TableRow key={rolePermission.role_permission_id}>
                <TableCell>{rolePermission.role_name}</TableCell>
                <TableCell>{rolePermission.permission_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/setrolesandpermissions">
        <button type="submit">
          Set Roles and Permissions
        </button>
      </Link>
    </Container>
  );
}

export default RolePermissionsList;
