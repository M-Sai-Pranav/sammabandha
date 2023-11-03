import React, { useState } from 'react';
import {
  TextField, Button, Box, Container, Typography,
} from '@mui/material';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';

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
          const { user_id, username, loginCount } = response.data;
          console.log(response.data);
          if (loginCount === 1) {
            // First-time login, navigate to PreferencesForm and update loginCount
            navigate('/PreferencesForm');
            console.log(response);

            // Get user_id and username from the response data
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
          } else {
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
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
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography variant="h4">Login After malli agian</Typography>
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
      </Box>
      <Link to="/nav">
        <button type="submit">
          nav
        </button>
      </Link>
    </Container>
  );
}

export default LoginForm;
