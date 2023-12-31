import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RolesPermissionsTable() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [newRole, setNewRole] = useState('');
  const [newPermission, setNewPermission] = useState('');

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,

    };
    // Fetch roles and permissions data from the backend
    axios.get('/api/roles-and-permissions/get-roles', { headers })
      .then((response) => setRoles(response.data.map((role) => role.role_name)))
      .catch((error) => console.error('Error fetching roles:', error));

    axios.get('/api/roles-and-permissions/get-permissions', { headers })
      // eslint-disable-next-line max-len
      .then((response) => setPermissions(response.data.map((permission) => permission.permission_name)))
      .catch((error) => console.error('Error fetching permissions:', error));
  }, []);

  const handleAddRole = () => {
    if (newRole) {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios.post('/api/roles-and-permissions/add-role', { role: newRole }, { headers })
        .then(() => {
          setNewRole('');
          axios.get('/api/roles-and-permissions/get-roles', { headers })
            .then((response) => setRoles(response.data.map((role) => role.role_name)))
            .catch((error) => console.error('Error fetching roles:', error));
        })
        .catch((error) => console.error('Error adding role:', error));
    }
  };

  const handleAddPermission = () => {
    if (newPermission) {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios.post('/api/roles-and-permissions/add-permission', { permission: newPermission }, { headers })
        .then(() => {
          setNewPermission('');
          axios.get('/api/roles-and-permissions/get-permissions', { headers })
            // eslint-disable-next-line max-len
            .then((response) => setPermissions(response.data.map((permission) => permission.permission_name)))
            .catch((error) => console.error('Error adding permission:', error));
        })
        .catch((error) => console.error('Error adding permission:', error));
    }
  };

  return (
    <Container>
      {/* <Button component={Link} to="/setrolesandpermissions" variant="contained" color="primary">
        Manage Permissions
      </Button> */}
      <Grid container spacing={2} style={{ marginTop: '5%' }}>
        <Grid item xs={12} sm={6}>
          <div>
            <TextField
              label="New Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddRole}>
              Add Role
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Roles</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role}>
                    <TableCell>{role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <TextField
              label="New Permission"
              value={newPermission}
              onChange={(e) => setNewPermission(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddPermission}>
              Add Permission
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Permissions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {permissions.map((permission) => (
                  <TableRow key={permission}>
                    <TableCell>{permission}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RolesPermissionsTable;
