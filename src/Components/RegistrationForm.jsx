import { Link, useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios';

function RegistrationForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password_hash: '',
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    mobile_number: '', // Added mobile_number
    profile_picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, profile_picture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/auth/register', user); // Adjust the URL as needed
      console.log('Response from the server:', response.data);
      // Check if the registration was successful, you can customize this condition
      if (response.status === 200) {
        // If successful, navigate to the "PreferencesForm" route
        navigate('/LoginForm');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (

    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Registration Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                fullWidth
                label="Username"
                value={user.username}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password_hash"
                type="password"
                variant="outlined"
                fullWidth
                label="Password"
                value={user.password_hash}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                label="Email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="first_name"
                variant="outlined"
                fullWidth
                label="First Name"
                value={user.first_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="last_name"
                variant="outlined"
                fullWidth
                label="Last Name"
                value={user.last_name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="gender"
                variant="outlined"
                fullWidth
                label="Gender"
                value={user.gender}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="date_of_birth"
                type="date"
                variant="outlined"
                fullWidth
                label="Date of Birth"
                value={user.date_of_birth}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="mobile_number" // Added mobile number input
                variant="outlined"
                fullWidth
                label="Mobile Number"
                value={user.mobile_number}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </form>
      </Paper>
      <Link to="/nav">
        <button type="submit">
          Nav Bar
        </button>
      </Link>
    </Container>
  );
}

export default RegistrationForm;
