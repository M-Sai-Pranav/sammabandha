import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
import axios from 'axios';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ChatIcon from '@mui/icons-material/Chat';
import flagB from '../books/flagDatenow.jpg';
import bg from '../books/bg1.png';

const imageStyles = {
  maxWidth: '100%',
  borderRadius: '10px',
};
const welcomeStyles = {
  fontSize: '3rem',
  color: 'blue',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const curvedImageContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  display: 'flex',
  gap: '10%',
};
function InfoSection({ icon, heading, text }) {
  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      {icon}
      <Typography variant="h6" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="body1">
        {text}
      </Typography>
    </Paper>
  );
}

function RegistrationNRIMatrimony() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password_hash: '',
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    mobile_number: '',
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
      const response = await axios.post('/api/auth/register', user);
      console.log('Response from the server:', response.data);
      console.log('mail sent');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div style={{
      marginTop: '3%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px', // Adjust padding as needed
    }}
    >
      {/* <img src={flagB} alt="All" style={{ imageStyles, width: '15%', height: '15%' }} /> */}
      <Container
        maxWidth="md"
        style={{ marginTop: '3%' }}
      >
        <Grid container spacing={3}>

          {/* Second half: Registration Form */}
          <Grid item xs={12} sm={6}>

            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5">Register for NRI Matrimony</Typography>
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
                      label=""
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
            <Link to="/Login" variant="subtitle1">
              Back to LogIn page
            </Link>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RegistrationNRIMatrimony;
