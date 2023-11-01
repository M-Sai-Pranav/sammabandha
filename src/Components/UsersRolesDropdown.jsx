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

function UsersRolesDropdown() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [openRoles, setOpenRoles] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [mode, setMode] = useState('insert');
  const [noRolesMessageVisible, setNoRolesMessageVisible] = useState(false);

  const [assignedRoles, setAssignedRoles] = useState([]); // To store assigned roles for the selected user

  useEffect(() => {
    axios.get('/api/users/get-users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));

    axios.get('/api/roles-and-permissions/get-roles')
      .then((response) => setRoles(response.data))
      .catch((error) => console.error('Error fetching roles:', error));
  }, []);

  useEffect(() => {
    // Fetch roles assigned to the selected user
    if (selectedUser) {
      axios.get(`/api/users/get-user-roles/${selectedUser}`)
        .then((response) => setAssignedRoles(response.data))
        .catch((error) => console.error('Error fetching assigned roles:', error));
    } else {
      // Reset assigned roles when no user is selected
      setAssignedRoles([]);
    }
  }, [selectedUser]);

  const handleUserSelect = (event) => {
    const userId = event.target.value;

    setSelectedUser(userId);

    if (userId) {
      // Fetch roles assigned to the selected user
      axios.get(`/api/users/get-user-roles/${userId}`)
        .then((response) => {
          const roleIDs = response.data;

          // Automatically select the role_ids in the Multi-Select dropdown
          setSelectedRoles(roleIDs);

          // Update the assignedRoles state with role_ids
          setAssignedRoles(roleIDs);

          console.log('Role IDs (Frontend):', roleIDs);

          // Make a backend API call to log role_ids in the backend console
          axios
            .post('/api/users/log-role-ids', {
              user_id: userId,
              role_ids: roleIDs,
            })
            .then((backendResponse) => {
              console.log('Role IDs (Backend):', backendResponse.data);
            })
            .catch((error) => {
              console.error('Error logging role_ids in the backend:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching role_ids:', error);
        });
    } else {
      // Reset assigned roles when no user is selected
      setAssignedRoles([]);
      setSelectedRoles([]); // Deselect the roles in the Multi-Select dropdown
    }
  };

  const resetSelectedRoles = () => {
    setSelectedRoles([]);
  };

  const updateAssignedRoles = (userId) => {
    if (userId) {
      axios
        .get(`/api/users/get-user-roles/${userId}`)
        .then((response) => {
          // Update the assignedRoles state with the new role_ids
          setAssignedRoles(response.data);

          // Check if there are no role_ids and set the message visibility
          const noRoles = response.data.length === 0;
          setNoRolesMessageVisible(noRoles);
          console.log(response.data);
          console.log('No Roles Message Visible:', noRoles); // Log the value
        })
        .catch((error) => {
          console.error('Error fetching role_ids:', error);
        });
    } else {
      // Reset assigned roles and show the message when no user is selected
      setAssignedRoles([]);
      setNoRolesMessageVisible(true); // Set to true when no user is selected
    }
  };

  const handleRoleSelect = (event) => {
    setSelectedRoles(event.target.value);
  };

  const handleCloseRoles = () => {
    setOpenRoles(false);
  };

  const handleOpenRoles = () => {
    setOpenRoles(true);
  };

  const handleInsertUserRoles = () => {
    if (mode === 'insert') {
      axios
        .post('/api/users/insert-user-roles', {
          selectedUser,
          selectedRoles,
        })
        .then((response) => {
          console.log(response.data.message);
          setSnackbarOpen(true);
          resetSelectedRoles(); // Clear the selected roles
          updateAssignedRoles(selectedUser); // Update assigned roles
        })
        .catch((error) => {
          console.error('Error inserting user roles:', error);
        });
    }
  };

  const handleRemoveRoles = () => {
    if (mode === 'delete') {
      if (selectedUser && selectedRoles.length > 0) {
        axios
          .delete('/api/users/remove-user-roles', {
            data: {
              user_id: selectedUser,
              roles: selectedRoles,
            },
          })
          .then((response) => {
            console.log(response.data.message);
            setSnackbarOpen(true);
            resetSelectedRoles(); // Clear the selected roles
            updateAssignedRoles(selectedUser); // Update assigned roles
          })
          .catch((error) => {
            console.error('Error removing user roles:', error);
          });
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="user-select-label">Select User</InputLabel>
            <Select
              labelId="user-select-label"
              id="user-select"
              value={selectedUser}
              onChange={handleUserSelect}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users.map((user) => (
                <MenuItem key={user.user_id} value={user.user_id}>
                  {user.user_id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="roles-select-label">Select Roles</InputLabel>

            <Select
              labelId="roles-select-label"
              id="roles-select"
              multiple
              open={openRoles}
              onClose={handleCloseRoles}
              onOpen={handleOpenRoles}
              value={selectedRoles} // Use selectedRoles here to control selected values
              onChange={handleRoleSelect}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={() => {
                        const updatedRoles = selectedRoles.filter((role) => role !== value);
                        setSelectedRoles(updatedRoles);
                      }}
                    />
                  ))}
                </div>
              )}
            >
              {roles.map((role) => (
                <MenuItem key={role.role_id} value={role.role_name}>
                  {role.role_name}
                </MenuItem>
              ))}
            </Select>

          </FormControl>
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
          <Button variant="contained" color="primary" onClick={handleInsertUserRoles} disabled={mode === 'delete'}>
            Insert User and Roles
          </Button>
          <Button variant="contained" color="secondary" onClick={handleRemoveRoles} disabled={mode === 'insert'}>
            Remove Roles
          </Button>
        </Grid>

        <Grid item xs={12}>
          {noRolesMessageVisible ? (
            <div>No role IDs associated with the selected user.</div>
          ) : (
            <div>
              <InputLabel>Role IDs:</InputLabel>
              {assignedRoles.map((roleID) => (
                <Chip key={roleID} label={roleID} style={{ margin: '2px' }} />
              ))}
            </div>
          )}
        </Grid>

      </Grid>

      <Button component={Link} to="/displayusersansroles" variant="contained" color=" primary" style={{ marginTop: '5%' }}>
        Show user and roles table
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={mode === 'insert' ? 'New user and roles added' : 'Roles removed'}
      />

      <Link to="/nav">
        <button>
          nav
        </button>
      </Link>
    </Container>
  );
}

export default UsersRolesDropdown;
