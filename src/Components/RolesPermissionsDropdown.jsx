import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Grid,
  Snackbar,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RolesPermissionsDropdown() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [mode, setMode] = useState('insert');

  const [assignedPermissions, setAssignedPermissions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [noPermissionsMessageVisible, setNoPermissionsMessageVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [noRolesMessageVisible, setNoRolesMessageVisible] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,

    };
    // Fetch roles data from the backend
    axios.get('/api/roles-and-permissions/get-roles', { headers })
      .then((response) => setRoles(response.data.map((role) => role.role_name)))
      .catch((error) => console.error('Error fetching roles:', error));

    // Fetch permissions data from the backend
    axios.get('/api/roles-and-permissions/get-permissions', { headers })
      .then((response) => setPermissions(response.data))
      .catch((error) => console.error('Error fetching permissions:', error));
  }, []);

  useEffect(() => {
    // Fetch permissions assigned to the selected role
    if (selectedRole) {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios.get(`/api/roles-and-permissions/get-permissions-for-selectedrole/${selectedRole}`, { headers })
        .then((response) => {
          const permissionIDs = response.data;

          // Automatically select the permission_ids in the Multi-Select dropdown
          setSelectedPermissions(permissionIDs);

          // Update the assignedPermissions state with permission_ids
          setAssignedPermissions(permissionIDs);

          console.log('Permission IDs (Frontend):', permissionIDs);

          // Make a backend API call to log permission_ids in the backend console
          axios
            .post('/api/roles-and-permissions/log-permission-ids', {
              role_name: selectedRole,
              permission_ids: permissionIDs,
            }, { headers })
            .then((backendResponse) => {
              console.log('Permission IDs (Backend):', backendResponse.data);
            })
            .catch((error) => {
              console.error('Error logging permission_ids in the backend:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching permission_ids:', error);
        });
    } else {
      // Reset assigned permissions when no role is selected
      setAssignedPermissions([]);
      setSelectedPermissions([]); // Deselect the permissions in the Multi-Select dropdown
    }
  }, [selectedRole]);

  const resetSelectedPermissions = () => {
    setSelectedPermissions([]);
  };

  const updateAssignedPermissions = (roleName) => {
    if (roleName) {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios
        .get(`/api/roles-and-permissions/get-permissions-for-selectedrole/${roleName}`, { headers })
        .then((response) => {
          // Update the assignedPermissions state with the new permission_ids
          setAssignedPermissions(response.data);

          // Check if there are no permission_ids and set the message visibility
          const noPermissions = response.data.length === 0;
          setNoPermissionsMessageVisible(noPermissions);
        })
        .catch((error) => {
          console.error('Error fetching permission_ids:', error);
        });
    } else {
      // Reset assigned permissions and show the message when no role is selected
      setAssignedPermissions([]);
      setNoPermissionsMessageVisible(true);
    }
  };

  const handleRoleSelect = (event) => {
    setSelectedRole(event.target.value);

    if (mode === 'insert') {
      // Fetch permissions assigned to the selected role and update assigned permissions
      updateAssignedPermissions(event.target.value);
    }
  };

  const handlePermissionSelect = (event) => {
    setSelectedPermissions(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleInsertRolesPermissions = () => {
    if (mode === 'insert') {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios
        .post('/api/roles-and-permissions/insert-roles-permissions', {
          selectedRole,
          selectedPermissions,
        }, { headers })
        .then((response) => {
          console.log(response.data.message);
          setSnackbarOpen(true);
          resetSelectedPermissions(); // Clear the selected permissions
          updateAssignedPermissions(selectedRole); // Update assigned permissions
        })
        .catch((error) => {
          console.error('Error inserting roles and permissions:', error);
        });
    }
  };

  const handleRemovePermissions = () => {
    if (mode === 'delete') {
      if (selectedRole && selectedPermissions.length > 0) {
        const authToken = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${authToken}`,

        };
        axios
          .delete('/api/roles-and-permissions/remove-role-permissions', {
            data: {
              role_name: selectedRole,
              permissions: selectedPermissions,
            },
            headers,
          })
          .then((response) => {
            console.log(response.data.message);
            setSnackbarOpen(true);
            resetSelectedPermissions(); // Clear the selected permissions
            updateAssignedPermissions(selectedRole); // Update assigned permissions
          })
          .catch((error) => {
            console.error('Error removing role permissions:', error);
          });
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (

    <Container style={{ marginTop: '5%' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="role-select-label">Select Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={selectedRole}
              onChange={handleRoleSelect}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="permissions-select-label">Select Permissions</InputLabel>
            <Select
              labelId="permissions-select-label"
              id="permissions-select"
              multiple
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={selectedPermissions}
              onChange={handlePermissionSelect}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      // eslint-disable-next-line max-len
                      onDelete={() => setSelectedPermissions((prev) => prev.filter((p) => p !== value))}
                    />
                  ))}
                </div>
              )}
            >
              {permissions.map((permission) => (
                <MenuItem key={permission.permission_name} value={permission.permission_name}>
                  {permission.permission_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          aria-label="mode"
          name="mode"
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <FormControlLabel value="insert" control={<Radio />} label="Insert Mode" />
          <FormControlLabel value="delete" control={<Radio />} label="Delete Mode" />
        </RadioGroup>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleInsertRolesPermissions} disabled={mode === 'delete'}>
          Insert Roles and Permissions
        </Button>
        <Button variant="contained" color="secondary" onClick={handleRemovePermissions} disabled={mode === 'insert'}>
          Remove Permissions
        </Button>
      </Grid>

      <Grid item xs={12}>
        {assignedPermissions.length === 0 ? (
          <div>
            <InputLabel>No permission IDs associated with the selected role.</InputLabel>
          </div>
        ) : (
          <div>
            <InputLabel>Permission IDs:</InputLabel>
            {assignedPermissions.map((permissionID) => (
              <Chip key={permissionID} label={permissionID} style={{ margin: '2px' }} />
            ))}
          </div>
        )}
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="New roles and permissions added"
      />

      <Button component={Link} to="/displayrolespermissionstable" variant="contained" color="primary" style={{ marginTop: '5%' }}>
        Show roles and permissions table
      </Button>
    </Container>
  );
}

export default RolesPermissionsDropdown;
