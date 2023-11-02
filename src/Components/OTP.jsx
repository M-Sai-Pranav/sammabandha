import React, { useState } from 'react';
import axios from 'axios';

function OtpForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/otp', { phoneNumber });
      const responseData = response.data;
      console.log(response.data);
      if (responseData.error) {
        setMessage('Failed to send OTP');
      } else {
        setMessage(`OTP sent successfully. Message ID: ${responseData.message.$metadata.messageId}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to send OTP');
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button type="submit">Send OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default OtpForm;
