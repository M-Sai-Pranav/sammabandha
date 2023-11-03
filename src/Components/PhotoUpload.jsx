import { Link, useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Button, Paper, Grid,
} from '@mui/material';
import axios from 'axios';

function PhotoUpload() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [userID, setUser_id] = useState(null);

  // Retrieve user_id from local storage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    setUser_id(storedUserId);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('userID', userID);
      // Send the file to the server using Axios
      console.log('selectedFile', selectedFile);
      console.log(userID);
      axios
        .post('/api/profile/upload-photo', formData)
        .then((response) => {
          console.log('Server response:', response.data);
          // Check if the upload was successful, you can customize this condition
          if (response.status === 200) {
          // If successful, navigate to the "Home" route
            navigate('/home');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          if (error.response) {
            console.error('Response Data:', error.response.data);
          }
        });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Upload Your Photo</Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
              />
              <label htmlFor="fileInput">
                <Button
                  variant="outlined"
                  component="span"
                  color="primary"
                  fullWidth
                >
                  Select Photo
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Selected File:
                {' '}
                {selectedFile ? selectedFile.name : 'None'}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpload}
                disabled={!selectedFile}
              >
                Upload
              </Button>
            </Grid>
          </Grid>
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

export default PhotoUpload;
