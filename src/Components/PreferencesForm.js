import { Link, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
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

  const [user_id, setUser_id] = useState(null);

  // Retrieve user_id from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    setUser_id(storedUserId);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user_id to the preferences data
    const dataWithUserId = {
      user_id,
      ...preferences,
    };

    // Send the preferences data to the server
    try {
      const response = await axios.post('/api/save-preferences', dataWithUserId);
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
            <Grid item xs={6}>
              <TextField
                name="min_age"
                variant="outlined"
                fullWidth
                label="Minimum Age"
                value={preferences.min_age}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="max_age"
                variant="outlined"
                fullWidth
                label="Maximum Age"
                value={preferences.max_age}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="min_height"
                variant="outlined"
                fullWidth
                label="Minimum Height"
                value={preferences.min_height}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="max_height"
                variant="outlined"
                fullWidth
                label="Maximum Height"
                value={preferences.max_height}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="religion"
                variant="outlined"
                fullWidth
                label="Religion"
                value={preferences.religion}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="caste"
                variant="outlined"
                fullWidth
                label="Caste"
                value={preferences.caste}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="location"
                variant="outlined"
                fullWidth
                label="Location"
                value={preferences.location}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="marital_status"
                variant="outlined"
                fullWidth
                label="Marital Status"
                value={preferences.marital_status}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Save Preferences
          </Button>
        </form>
      </Paper>
      <Link to="/nav">
        <button>
          Nav Bar
        </button>
      </Link>
    </Container>
  );
}

export default PreferencesForm;
