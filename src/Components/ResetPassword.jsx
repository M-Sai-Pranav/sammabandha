import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/api/auth/reset-password', { email });
      // Handle the response, e.g., show a success message to the user
      console.log('success ', response.data);
      navigate('/verifyOTP');
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.log('Fail ', error);
    }
  };
  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '10vh' }}>
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'white' }}>
        <Typography variant="h5" gutterBottom>
          Reset Your Password
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Send code via email
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleResetPassword}>
          Continue
        </Button>
        <div style={{ textAlign: 'center', marginTop: '5%' }}>
          <Typography variant="subtitle1">OR</Typography>
          <Link to="/Login" variant="subtitle1">
            Back to LogIn page
          </Link>
        </div>
      </Paper>
    </Container>
  );
}

export default ResetPassword;
