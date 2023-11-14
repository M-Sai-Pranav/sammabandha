import { useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, TextField, Button, Grid, Paper, MenuItem,
} from '@mui/material';
import axios from 'axios';

function ProfileForm() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    about: '',
    occupation: '',
    education: '',
    location: '',
    religion: '',
    caste: '',
    marital_status: '',
    height: '',
    weight: '',
    hobbies: '',
    interests: '',
    salary: '', // Add salary field
  });

  const [userId, setUserId] = useState(null);

  // Retrieve user_id from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    setUserId(storedUserId);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user_id to the profile data
    const dataWithUserId = {
      userId,
      ...profile,
    };

    // Send the preferences data to the server
    try {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      const response = await axios.post('/api/profile/save-profile', dataWithUserId, { headers });
      console.log('Server response:', response.data);

      // Check if the preferences were successfully saved, you can customize this condition
      if (response.status === 200) {
        // If successful, navigate to the "ProfileForm" route
        navigate('/PhotoUpload');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Profile Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* About Me */}
            <Grid item xs={12}>
              <TextField
                name="about"
                multiline
                rows={3}
                variant="outlined"
                fullWidth
                label="About Me"
                value={profile.about}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Occupation Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="occupation"
                variant="outlined"
                fullWidth
                label="Occupation"
                value={profile.occupation}
                onChange={handleInputChange}
              >
                <MenuItem value="Web Developer">Web Developer</MenuItem>
                <MenuItem value="Engineer">Engineer</MenuItem>
                <MenuItem value="Software Developer">Software Developer</MenuItem>
                {/* Add more occupation options as needed */}
              </TextField>
            </Grid>

            {/* Education Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="education"
                variant="outlined"
                fullWidth
                label="Education"
                value={profile.education}
                onChange={handleInputChange}
              >
                <MenuItem value="B.Tech">B.Tech</MenuItem>
                <MenuItem value="M.Tech">M.Tech</MenuItem>
                <MenuItem value="MS">MS</MenuItem>
                {/* Add more education options as needed */}
              </TextField>
            </Grid>

            {/* Location Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="location"
                variant="outlined"
                fullWidth
                label="Location"
                value={profile.location}
                onChange={handleInputChange}
              >
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                {/* Add more city options as needed */}
              </TextField>
            </Grid>

            {/* Religion Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="religion"
                variant="outlined"
                fullWidth
                label="Religion"
                value={profile.religion}
                onChange={handleInputChange}
              >
                <MenuItem value="Hindu">Hindu</MenuItem>
                <MenuItem value="Muslim">Muslim</MenuItem>
                {/* Add more religion options as needed */}
              </TextField>
            </Grid>

            {/* Caste Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="caste"
                variant="outlined"
                fullWidth
                label="Caste"
                value={profile.caste}
                onChange={handleInputChange}
              >
                <MenuItem value="OC">OC</MenuItem>
                <MenuItem value="BC">BC</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
              </TextField>
            </Grid>

            {/* Marital Status Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="marital_status"
                variant="outlined"
                fullWidth
                label="Marital Status"
                value={profile.marital_status}
                onChange={handleInputChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
              </TextField>
            </Grid>

            {/* Height Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="height"
                variant="outlined"
                fullWidth
                label="Height"
                value={profile.height}
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

            {/* Weight Dropdown */}
            <Grid item xs={6}>
              <TextField
                select
                name="weight"
                variant="outlined"
                fullWidth
                label="Weight"
                value={profile.weight}
                onChange={handleInputChange}
              >
                {Array.from({ length: 66 }, (_, i) => i + 35).map((weight) => (
                  <MenuItem key={weight} value={weight}>
                    {weight}
                    {' '}
                    kg
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Hobbies Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="hobbies"
                variant="outlined"
                fullWidth
                label="Hobbies"
                value={profile.hobbies}
                onChange={handleInputChange}
              >
                <MenuItem value="Reading">Reading</MenuItem>
                <MenuItem value="Traveling">Traveling</MenuItem>
                {/* Add more hobby options as needed */}
              </TextField>
            </Grid>

            {/* Interests Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="interests"
                variant="outlined"
                fullWidth
                label="Interests"
                value={profile.interests}
                onChange={handleInputChange}
              >
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Cooking">Cooking</MenuItem>
                {/* Add more interest options as needed */}
              </TextField>
            </Grid>

            {/* Salary Dropdown */}
            <Grid item xs={12}>
              <TextField
                select
                name="salary"
                variant="outlined"
                fullWidth
                label="Salary (per annum)"
                value={profile.salary}
                onChange={handleInputChange}
              >
                {Array.from({ length: 73 }, (_, i) => i + 3).map((salary) => (
                  <MenuItem key={salary} value={salary}>
                    {salary}
                    {' '}
                    lakhs
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Save Profile
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default ProfileForm;
