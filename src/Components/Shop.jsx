// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Chip,
//   Grid,
//   Snackbar,
// } from '@material-ui/core';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const UsersRolesDropdown = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [roles, setRoles] = useState([]);
//   const [selectedRoles, setSelectedRoles] = useState([]); // Store selected roles in an array
//   const [openRoles, setOpenRoles] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   useEffect(() => {
//     // Fetch users data from the backend
//     axios.get('/api/get-users')
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error('Error fetching users:', error));

//     // Fetch roles data from the backend
//     axios.get('/api/get-roles')
//       .then((response) => setRoles(response.data))
//       .catch((error) => console.error('Error fetching roles:', error));
//   }, []);

//   const handleUserSelect = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   const handleRoleSelect = (event) => {
//     setSelectedRoles(event.target.value); // Update selected roles as an array
//   };

//   const handleCloseRoles = () => {
//     setOpenRoles(false);
//   };

//   const handleOpenRoles = () => {
//     setOpenRoles(true);
//   };

//   const handleInsertUserRoles = () => {
//     axios
//       .post('/api/insert-user-roles', {
//         selectedUser,
//         selectedRoles, // Send the array of selected roles
//       })
//       .then((response) => {
//         console.log(response.data.message);
//         setSnackbarOpen(true);
//       })
//       .catch((error) => {
//         console.error('Error inserting user roles:', error);
//       });
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="user-select-label">Select User</InputLabel>
//             <Select
//               labelId="user-select-label"
//               id="user-select"
//               value={selectedUser}
//               onChange={handleUserSelect}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               {users.map((user) => (
//                 <MenuItem key={user.user_id} value={user.user_id}>
//                   {user.user_id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="roles-select-label">Select Roles</InputLabel>
//             <Select
//               labelId="roles-select-label"
//               id="roles-select"
//               multiple
//               open={openRoles}
//               onClose={handleCloseRoles}
//               onOpen={handleOpenRoles}
//               value={selectedRoles}
//               onChange={handleRoleSelect}
//               renderValue={(selected) => (
//                 <div>
//                   {selected.map((value) => (
//                     <Chip
//                       key={value}
//                       label={value}
//                       onDelete={() => {
//                         const updatedRoles = selectedRoles.filter((role) => role !== value);
//                         setSelectedRoles(updatedRoles);
//                       }}
//                     />
//                   ))}
//                 </div>
//               )}
//             >
//               {roles.map((role) => (
//                 <MenuItem key={role.role_id} value={role.role_name}>
//                   {role.role_name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleInsertUserRoles}>
//             Insert User and Roles
//           </Button>
//         </Grid>
//       </Grid>

//       <Button component={Link} to="/displayusersansroles" variant="contained" color="primary" style={{ marginTop: '5%' }}>
//         Show user and roles table
//       </Button>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message="New user and roles added"
//       />

// <Link to={'/nav'}>
//         <button>
//             nav
//         </button>
//         </Link>
//     </Container>
//   );
// };

// export default UsersRolesDropdown;

// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Chip,
//   Grid,
//   Snackbar,
// } from '@material-ui/core';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const UsersRolesDropdown = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [roles, setRoles] = useState([]);
//   const [selectedRoles, setSelectedRoles] = useState([]); // Store selected roles in an array
//   const [openRoles, setOpenRoles] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   useEffect(() => {
//     // Fetch users data from the backend
//     axios.get('/api/get-users')
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error('Error fetching users:', error));

//     // Fetch roles data from the backend
//     axios.get('/api/get-roles')
//       .then((response) => setRoles(response.data))
//       .catch((error) => console.error('Error fetching roles:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch roles assigned to the selected user
//     if (selectedUser) {
//       axios.get(`/api/get-user-roles/${selectedUser}`)
//         .then((response) => setSelectedRoles(response.data))
//         .catch((error) => console.error('Error fetching assigned roles:', error));
//     }
//   }, [selectedUser]);

//   const handleUserSelect = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   const handleRoleSelect = (event) => {
//     setSelectedRoles(event.target.value); // Update selected roles as an array
//   };

//   const handleCloseRoles = () => {
//     setOpenRoles(false);
//   };

//   const handleOpenRoles = () => {
//     setOpenRoles(true);
//   };

//   const handleInsertUserRoles = () => {
//     axios
//       .post('/api/insert-user-roles', {
//         selectedUser,
//         selectedRoles, // Send the array of selected roles
//       })
//       .then((response) => {
//         console.log(response.data.message);
//         setSnackbarOpen(true);
//       })
//       .catch((error) => {
//         console.error('Error inserting user roles:', error);
//       });
//   };

//   const handleRemoveRoles = () => {
//     if (selectedUser && selectedRoles.length > 0) {
//       axios
//         .delete('/api/remove-user-roles', {
//           data: {
//             user_id: selectedUser,
//             roles: selectedRoles,
//           },
//         })
//         .then((response) => {
//           console.log(response.data.message);
//           setSnackbarOpen(true);
//         })
//         .catch((error) => {
//           console.error('Error removing user roles:', error);
//         });
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="user-select-label">Select User</InputLabel>
//             <Select
//               labelId="user-select-label"
//               id="user-select"
//               value={selectedUser}
//               onChange={handleUserSelect}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               {users.map((user) => (
//                 <MenuItem key={user.user_id} value={user.user_id}>
//                   {user.user_id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="roles-select-label">Select Roles</InputLabel>
//             <Select
//               labelId="roles-select-label"
//               id="roles-select"
//               multiple
//               open={openRoles}
//               onClose={handleCloseRoles}
//               onOpen={handleOpenRoles}
//               value={selectedRoles}
//               onChange={handleRoleSelect}
//               renderValue={(selected) => (
//                 <div>
//                   {selected.map((value) => (
//                     <Chip
//                       key={value}
//                       label={value}
//                       onDelete={() => {
//                         const updatedRoles = selectedRoles.filter((role) => role !== value);
//                         setSelectedRoles(updatedRoles);
//                       }}
//                     />
//                   ))}
//                 </div>
//               )}
//             >
//               {roles.map((role) => (
//                 <MenuItem key={role.role_id} value={role.role_name}>
//                   {role.role_name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleInsertUserRoles}>
//             Insert User and Roles
//           </Button>
//           <Button variant="contained" color="secondary" onClick={handleRemoveRoles}>
//             Remove Roles
//           </Button>
//         </Grid>
//       </Grid>

//       <Button component={Link} to="/displayusersansroles" variant="contained" color="primary" style={{ marginTop: '5%' }}>
//         Show user and roles table
//       </Button>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message="New user and roles added / Roles removed"
//       />

//       <Link to="/nav">
//         <button>
//           nav
//         </button>
//       </Link>
//     </Container>
//   );
// };

// export default UsersRolesDropdown;

// here
// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Chip,
//   Grid,
//   Snackbar,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from '@material-ui/core';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const UsersRolesDropdown = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [roles, setRoles] = useState([]);
//   const [selectedRoles, setSelectedRoles] = useState([]);
//   const [openRoles, setOpenRoles] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [mode, setMode] = useState('insert');

//   const [assignedRoles, setAssignedRoles] = useState([]); // To store assigned roles for the selected user

//   useEffect(() => {
//     axios.get('/api/get-users')
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error('Error fetching users:', error));

//     axios.get('/api/get-roles')
//       .then((response) => setRoles(response.data))
//       .catch((error) => console.error('Error fetching roles:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch roles assigned to the selected user
//     if (selectedUser) {
//       axios.get(`/api/get-user-roles/${selectedUser}`)
//         .then((response) => setAssignedRoles(response.data))
//         .catch((error) => console.error('Error fetching assigned roles:', error));
//     } else {
//       // Reset assigned roles when no user is selected
//       setAssignedRoles([]);
//     }
//   }, [selectedUser]);

//   const handleUserSelect = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   const handleRoleSelect = (event) => {
//     setSelectedRoles(event.target.value);
//   };

//   const handleCloseRoles = () => {
//     setOpenRoles(false);
//   };

//   const handleOpenRoles = () => {
//     setOpenRoles(true);
//   };

//   const handleInsertUserRoles = () => {
//     if (mode === 'insert') {
//       axios
//         .post('/api/insert-user-roles', {
//           selectedUser,
//           selectedRoles,
//         })
//         .then((response) => {
//           console.log(response.data.message);
//           setSnackbarOpen(true);
//         })
//         .catch((error) => {
//           console.error('Error inserting user roles:', error);
//         });
//     }
//   };

//   const handleRemoveRoles = () => {
//     if (mode === 'delete') {
//       if (selectedUser && selectedRoles.length > 0) {
//         axios
//           .delete('/api/remove-user-roles', {
//             data: {
//               user_id: selectedUser,
//               roles: selectedRoles,
//             },
//           })
//           .then((response) => {
//             console.log(response.data.message);
//             setSnackbarOpen(true);
//           })
//           .catch((error) => {
//             console.error('Error removing user roles:', error);
//           });
//       }
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="user-select-label">Select User</InputLabel>
//             <Select
//               labelId="user-select-label"
//               id="user-select"
//               value={selectedUser}
//               onChange={handleUserSelect}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               {users.map((user) => (
//                 <MenuItem key={user.user_id} value={user.user_id}>
//                   {user.user_id}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <FormControl fullWidth>
//             <InputLabel id="roles-select-label">Select Roles</InputLabel>
//             <Select
//               labelId="roles-select-label"
//               id="roles-select"
//               multiple
//               open={openRoles}
//               onClose={handleCloseRoles}
//               onOpen={handleOpenRoles}
//               value={selectedRoles}
//               onChange={handleRoleSelect}
//               renderValue={(selected) => (
//                 <div>
//                   {selected.map((value) => (
//                     <Chip
//                       key={value}
//                       label={value}
//                       onDelete={() => {
//                         const updatedRoles = selectedRoles.filter((role) => role !== value);
//                         setSelectedRoles(updatedRoles);
//                       }}
//                     />
//                   ))}
//                 </div>
//               )}
//             >
//               {roles.map((role) => (
//                 <MenuItem key={role.role_id} value={role.role_name}>
//                   {role.role_name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <RadioGroup
//             aria-label="mode"
//             name="mode"
//             value={mode}
//             onChange={(event) => setMode(event.target.value)}
//           >
//             <FormControlLabel value="insert" control={<Radio />} label="Insert Mode" />
//             <FormControlLabel value="delete" control={<Radio />} label="Delete Mode" />
//           </RadioGroup>
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleInsertUserRoles} disabled={mode === 'delete'}>
//             Insert User and Roles
//           </Button>
//           <Button variant="contained" color="secondary" onClick={handleRemoveRoles} disabled={mode === 'insert'}>
//             Remove Roles
//           </Button>
//         </Grid>
//       </Grid>

//       <Button component={Link} to="/displayusersansroles" variant="contained" color=" primary" style={{ marginTop: '5%' }}>
//         Show user and roles table
//       </Button>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message={mode === 'insert' ? 'New user and roles added' : 'Roles removed'}
//       />

//       <Link to="/nav">
//         <button>
//           nav
//         </button>
//       </Link>
//     </Container>
//   );
// };

// export default UsersRolesDropdown;

// import { Link, useNavigate } from 'react-router-dom';
// // import ReactDOM from 'react-dom';
// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
// } from '@mui/material';
// import axios from 'axios';

// function RegistrationForm() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     username: '',
//     password_hash: '',
//     email: '',
//     first_name: '',
//     last_name: '',
//     gender: '',
//     date_of_birth: '',
//     mobile_number: '', // Added mobile_number
//     profile_picture: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setUser({ ...user, profile_picture: file });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/auth/register', user); // Adjust the URL as needed
//       console.log('Response from the server:', response.data);
//       localStorage.setItem('userEmail', user.email);
//       // Check if the registration was successful, you can customize this condition
//       if (response.status === 200) {
//         // If successful, navigate to the "PreferencesForm" route
//         navigate('/Login');
//       }
//     } catch (error) {
//       console.error('Error sending data:', error);
//     }
//   };

//   return (

//     <Container maxWidth="xs">
//       <Paper elevation={3} style={{ padding: '20px' }}>
//         <Typography variant="h5">Registration Form</Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 name="username"
//                 variant="outlined"
//                 fullWidth
//                 label="Username"
//                 value={user.username}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="password_hash"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 label="Password"
//                 value={user.password_hash}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="email"
//                 type="email"
//                 variant="outlined"
//                 fullWidth
//                 label="Email"
//                 value={user.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="first_name"
//                 variant="outlined"
//                 fullWidth
//                 label="First Name"
//                 value={user.first_name}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="last_name"
//                 variant="outlined"
//                 fullWidth
//                 label="Last Name"
//                 value={user.last_name}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="gender"
//                 variant="outlined"
//                 fullWidth
//                 label="Gender"
//                 value={user.gender}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="date_of_birth"
//                 type="date"
//                 variant="outlined"
//                 fullWidth
//                 label="Date of Birth"
//                 value={user.date_of_birth}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="mobile_number" // Added mobile number input
//                 variant="outlined"
//                 fullWidth
//                 label="Mobile Number"
//                 value={user.mobile_number}
//                 onChange={handleInputChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//           >
//             Register
//           </Button>
//         </form>
//       </Paper>
//       <Link to="/Login" variant="subtitle1">
//         Back to LogIn page
//       </Link>
//     </Container>
//   );
// }

// export default RegistrationForm;

