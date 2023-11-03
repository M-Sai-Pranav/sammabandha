import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import LoginForm from './LoginForm';

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <LoginForm />
      <Typography variant="subtitle1">or</Typography>
      <Link to="/register" variant="subtitle1">
        Sign up for a new account
      </Link>
    </Box>
  );
}

export default App;
