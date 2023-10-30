import { Link, useNavigate} from "react-router-dom"
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

const ProfileForm = () => {
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

  const [user_id, setUser_id] = useState(null);

  // Retrieve user_id from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    setUser_id(storedUserId);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      // Add user_id to the profile data
      const dataWithUserId = {
        user_id,
        ...profile,
      };

    // Send the preferences data to the server
    try {
      const response = await axios.post('/api/save-profile', dataWithUserId);
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
    <>
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Profile Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
            <Grid item xs={12}>
              <TextField
                name="occupation"
                variant="outlined"
                fullWidth
                label="Occupation"
                value={profile.occupation}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="education"
                variant="outlined"
                fullWidth
                label="Education"
                value={profile.education}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="location"
                variant="outlined"
                fullWidth
                label="Location"
                value={profile.location}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="religion"
                variant="outlined"
                fullWidth
                label="Religion"
                value={profile.religion}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="caste"
                variant="outlined"
                fullWidth
                label="Caste"
                value={profile.caste}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="marital_status"
                variant="outlined"
                fullWidth
                label="Marital Status"
                value={profile.marital_status}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="height"
                variant="outlined"
                fullWidth
                label="Height"
                value={profile.height}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="weight"
                variant="outlined"
                fullWidth
                label="Weight"
                value={profile.weight}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="hobbies"
                variant="outlined"
                fullWidth
                label="Hobbies"
                value={profile.hobbies}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="interests"
                variant="outlined"
                fullWidth
                label="Interests"
                value={profile.interests}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  name="salary"
                  variant="outlined"
                  fullWidth
                  label="Salary (per annum)" // Label for salary input
                  value={profile.salary}
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
            Save Profile
          </Button>
        </form>
      </Paper>
            <Link to={'/nav'}>
            <button>
                    Nav Bar
                </button>
            </Link>
    </Container>
    </>            
  );
};

export default ProfileForm;
