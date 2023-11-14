import { useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

import {
  Container, Typography, TextField, Button, Grid, Paper, MenuItem,
} from '@mui/material';
import axios from 'axios';

function PreferencesForm() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    min_age: '',
    max_age: '',
    min_height: '',
    max_height: '',
    religion: '',
    caste: '',
    location: '',
    marital_status: '',
  });

  const [userId, setUserId] = useState(null);

  // Retrieve user_id from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    setUserId(storedUserId);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user_id to the preferences data
    const dataWithUserId = {
      userId,
      ...preferences,
    };

    // Send the preferences data to the server
    try {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };

      const response = await axios.post('/api/preference/save-preferences', dataWithUserId, { headers });
      console.log('Server response:', response.data);

      // Check if the preferences were successfully saved, you can customize this condition
      if (response.status === 200) {
        // If successful, navigate to the "ProfileForm" route
        navigate('/ProfileForm');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Preferences Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Age Dropdowns */}
            <Grid item xs={6}>
              <TextField
                select
                name="min_age"
                variant="outlined"
                fullWidth
                label="Minimum Age"
                value={preferences.min_age}
                onChange={handleInputChange}
              >
                {Array.from({ length: 100 }, (_, i) => i + 18).map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                name="max_age"
                variant="outlined"
                fullWidth
                label="Maximum Age"
                value={preferences.max_age}
                onChange={handleInputChange}
              >
                {Array.from({ length: 100 }, (_, i) => i + 18).map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Height Dropdowns */}
            <Grid item xs={6}>
              <TextField
                select
                name="min_height"
                variant="outlined"
                fullWidth
                label="Minimum Height"
                value={preferences.min_height}
                onChange={handleInputChange}
              >
                {Array.from({ length: 5 }, (_, i) => i + 3).map((height) => (
                  <MenuItem key={height} value={height}>
                    {height}
                    {' '}
                    ft
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                name="max_height"
                variant="outlined"
                fullWidth
                label="Maximum Height"
                value={preferences.max_height}
                onChange={handleInputChange}
              >
                {Array.from({ length: 5 }, (_, i) => i + 3).map((height) => (
                  <MenuItem key={height} value={height}>
                    {height}
                    {' '}
                    ft
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Religion Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="religion"
                variant="outlined"
                fullWidth
                label="Religion"
                value={preferences.religion}
                onChange={handleInputChange}
              >
                <MenuItem value="Hindu">Hindu</MenuItem>
                <MenuItem value="Muslim">Muslim</MenuItem>
                <MenuItem value="Christian">Christian</MenuItem>
                {/* Add more religion options as needed */}
              </TextField>
            </Grid>

            {/* Caste Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="caste"
                variant="outlined"
                fullWidth
                label="Caste"
                value={preferences.caste}
                onChange={handleInputChange}
              >
                <MenuItem value="OC">OC</MenuItem>
                <MenuItem value="BC">BC</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
              </TextField>
            </Grid>

            {/* Location Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="location"
                variant="outlined"
                fullWidth
                label="Location"
                value={preferences.location}
                onChange={handleInputChange}
              >
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                {/* Add more city options as needed */}
              </TextField>
            </Grid>

            {/* Marital Status Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="marital_status"
                variant="outlined"
                fullWidth
                label="Marital Status"
                value={preferences.marital_status}
                onChange={handleInputChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Preferences
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default PreferencesForm;
