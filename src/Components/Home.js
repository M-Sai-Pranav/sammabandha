import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Paper,
} from '@mui/material';

function Home() {
  const [userData, setUserData] = useState(null);
  const handleGetUserData = async () => {
    // Get the user_id from local storage
    const user_id = localStorage.getItem('user_id');

    try {
      const response = await axios.get('/api/get-user-data', {
        params: {
          user_id,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Use useEffect to call handleGetUserData when the component mounts
  useEffect(() => {
    handleGetUserData();
  }, []); // The empty array means this effect runs only once, like componentDidMount
  console.log('User Data:', userData);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5">User Data</Typography>
        <Button type="button" variant="contained" color="primary" fullWidth onClick={handleGetUserData}>
          Get User Data
        </Button>
        {userData && (
        <div>
          <div>
            <strong>Username:</strong>
            {' '}
            {userData.username}
          </div>
          <div>
            <strong>Email:</strong>
            {' '}
            {userData.email}
          </div>
          <div>
            <strong>First Name:</strong>
            {' '}
            {userData.first_name}
          </div>
          <div>
            <strong>Last Name:</strong>
            {' '}
            {userData.last_name}
          </div>
          <div>
            <strong>Gender:</strong>
            {' '}
            {userData.gender}
          </div>
          <div>
            <strong>Date of Birth:</strong>
            {' '}
            {userData.date_of_birth}
          </div>
          {userData.profile_picture && ( // Check if profile picture URL exists
          <div>
            <strong>Profile Picture:</strong>
            <img src={userData.profile_picture} alt="Profile" style={{ maxWidth: '100%' }} />
          </div>
          )}
        </div>
        )}
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5">Profile Data</Typography>
        {userData && (
          <div>
            <div>
              <strong>About Me:</strong>
              {' '}
              {userData.about}
            </div>
            <div>
              <strong>Occupation:</strong>
              {' '}
              {userData.occupation}
            </div>
            <div>
              <strong>Education:</strong>
              {' '}
              {userData.education}
            </div>
            <div>
              <strong>Location:</strong>
              {' '}
              {userData.location}
            </div>
            <div>
              <strong>Religion:</strong>
              {' '}
              {userData.religion}
            </div>
            <div>
              <strong>Caste:</strong>
              {' '}
              {userData.caste}
            </div>
            <div>
              <strong>Marital Status:</strong>
              {' '}
              {userData.marital_status}
            </div>
            <div>
              <strong>Height:</strong>
              {' '}
              {userData.height}
            </div>
            <div>
              <strong>Weight:</strong>
              {' '}
              {userData.weight}
            </div>
            <div>
              <strong>Hobbies:</strong>
              {' '}
              {userData.hobbies}
            </div>
            <div>
              <strong>Interests:</strong>
              {' '}
              {userData.interests}
            </div>
            <div>
              <strong>Salary:</strong>
              {' '}
              {userData.salary}
            </div>

            {/* Add more fields from the 'profile' table as needed */}
          </div>
        )}

      </Paper>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Preference Data</Typography>
        {userData && (
          <div>
            <div>
              <strong>Minimum Age:</strong>
              {' '}
              {userData.min_age}
            </div>
            <div>
              <strong>Maximum Age:</strong>
              {' '}
              {userData.max_age}
            </div>
            <div>
              <strong>Minimum Height:</strong>
              {' '}
              {userData.min_height}
            </div>
            <div>
              <strong>Maximum Height:</strong>
              {' '}
              {userData.max_height}
            </div>
            <div>
              <strong>Religion:</strong>
              {' '}
              {userData.religion}
            </div>
            <div>
              <strong>Caste:</strong>
              {' '}
              {userData.caste}
            </div>
            <div>
              <strong>Location:</strong>
              {' '}
              {userData.location}
            </div>
            <div>
              <strong>Marital Status:</strong>
              {' '}
              {userData.marital_status}
            </div>
            {/* Add more fields from the 'preferences' table as needed */}
          </div>
        )}
      </Paper>
      <Link to="/nav">
        <button>
          Nav Bar
        </button>
      </Link>
    </Container>
  );
}

export default Home;
