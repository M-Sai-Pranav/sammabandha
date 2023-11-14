import React, { useState } from 'react';
import {
  TextField, Button, Paper, Container, Typography,
} from '@mui/material';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    axios.post('/api/auth/login', formData)
      .then((response) => {
        setMessage(response.data.message);

        if (response.status === 200) {
          const {
            user_id, username, logincount, token,
          } = response.data;
          console.log(response.data);
          if (logincount === 1) {
            // First-time login, navigate to PreferencesForm and update loginCount
            navigate('/PreferencesForm');
            console.log(response);

            // Get user_id and username from the response data
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
          } else {
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
            localStorage.setItem('token', token);
            // Subsequent login, navigate to BadgeList
            navigate('/BadgeList');
          }
        }
      })
      .catch(() => {
        setMessage('Login failed');
      });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Center the form vertically
      }}
    >
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'white' }}>
        <Typography variant="h4">Log In</Typography>
        <form>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        <Typography variant="body1" mt={2}>
          {message}
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '5%' }}>
          <Link to="/ResetPassword" variant="subtitle1">
            Forgotten password?
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '5%' }}>

          <Typography variant="subtitle1">OR</Typography>
          <Link to="/register" variant="subtitle1">
            Sign up for a new account
          </Link>
        </div>
      </Paper>
    </Container>
  );
}

export default LoginForm;
