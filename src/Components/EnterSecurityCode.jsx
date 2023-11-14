import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@mui/material';
import axios from 'axios';

function EnterSecurityCode() {
  const [securityCode, setSecurityCode] = useState('');

  const handleContinue = async () => {
    // try {
    //   const response = await axios.post('/api/auth/verify-otp', { securityCode });
    //   // Handle the response from the backend as needed
    //   if (response.data.matched) {
    //     // Security code matched, you can redirect or show a success message
    //     console.log('success ', response.data);
    //   } else {
    //     // Security code did not match, you can show an error message
    //   }
    // } catch (error) {
    //   // Handle errors, e.g., show an error message to the user
    //   console.error('Error verifying security code:', error);
    //   console.log('Fail ', error);
    // }
    console.log('OTP matched');
  };
  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '10vh' }}>
      <Typography variant="h5" gutterBottom>
        Enter security code
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Please check your email for a text message with your code.
      </Typography>
      <TextField
        label="Security Code"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
        value={securityCode}
        onChange={(e) => setSecurityCode(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleContinue}>
        Continue
      </Button>
    </Container>
  );
}

export default EnterSecurityCode;
