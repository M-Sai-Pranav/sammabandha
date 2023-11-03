import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Paper,
} from '@mui/material';
import axios from 'axios';

function MailOTP() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('/api/auth/send-otp', { email });
      if (response.status === 200) {
        setOtpSent(true);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5">Send OTP</Typography>
        <form>
          <TextField
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            label="Registered Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSendOtp}
          >
            Send OTP
          </Button>
        </form>
        {otpSent && (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            OTP has been sent to your email. Please check your inbox.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default MailOTP;
