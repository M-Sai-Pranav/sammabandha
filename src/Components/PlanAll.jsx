// Install necessary packages
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';

const paperStyles = {
  padding: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
  marginBottom: '20px',
};

const welcomeStyles = {
  fontSize: '1.5rem',
  color: 'blue',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const handleDiamondClick = () => {
  // Handle Basic plan click
  const plan = 'Basic'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const handleGoldClick = () => {
  // Handle Gold plan click
  const plan = 'Gold'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const handlePlatinumClick = () => {
  // Handle Platinum plan click
  const plan = 'Platinum'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const handleTillUMarryClick = () => {
  // Handle Platinum plan click
  const plan = 'Platinum'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const handleAssistedClick = () => {
  // Handle Platinum plan click
  const plan = 'Platinum'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const handleServiceClick = () => {
  // Handle Platinum plan click
  const plan = 'Platinum'; // Set the plan
  console.log(`${plan} plan clicked`);
  const authToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${authToken}`,

  };
  axios
    .post('/api/profile/create-checkout-session', { plan }, { headers }) // Send plan in the request body
    .then((response) => {
      console.log('Server response:', response);
      // Check if the upload was successful, you can customize this condition
      console.log('Server response data :', response.data);
      const { url } = response.data;
      window.location.href = url;
    })
    .catch((error) => {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response);
      }
    });
};

const generateData = () => {
  // Generate random data for the table
  const data = [
    ['PACKAGES', 'Gold', 'DIAMOND', 'PLATINUM', 'Till-U-MarrySM', 'ASSISTED SERVICE', 'FREE'],
    ['Duration', '3 Months', '3 Months', '3 Months', 'Regular', '3 Months', ''],
    ['Price', 'Rs. 5300', 'Rs. 5900', 'Rs. 6900', 'Rs. 13900', 'Rs. 21000', ''],
    ['Send Unlimited personalized messages', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Access verified mobile numbers', '40 Nos', '50 Nos', '80 Nos', '300 Nos 25/month', <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Send SMS', '30 SMS', '45 SMS', '60 SMS', '240 SMS 20/month', <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Chat instantly with prospects', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Profile Highlighter: Makes your profile Stand Out !', <HighlightOffIcon style={{ color: 'red' }} />, '1 Month', '3 Months', <HighlightOffIcon style={{ color: 'red' }} />, '1 Month', <HighlightOffIcon style={{ color: 'red' }} />],
    ['Personal Relationship Manager', <HighlightOffIcon style={{ color: 'red' }} />, <HighlightOffIcon style={{ color: 'red' }} />, <HighlightOffIcon style={{ color: 'red' }} />, <HighlightOffIcon style={{ color: 'red' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Priority in search results**', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Profile tagged as paid member for more responses', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Prominent display in search results', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['SMS Alerts', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Enhanced Privacy', <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <CheckCircleIcon style={{ color: 'green' }} />, <HighlightOffIcon style={{ color: 'red' }} />],
    ['Buy Now', <Button onClick={handleGoldClick} variant="contained" color="primary">Buy Now</Button>, <Button onClick={handleDiamondClick} variant="contained" color="primary">Buy Now</Button>, <Button onClick={handlePlatinumClick} variant="contained" color="primary">Buy Now</Button>, <Button onClick={handleTillUMarryClick} variant="contained" color="primary">Buy Now</Button>, <Button onClick={handleAssistedClick} variant="contained" color="primary">Buy Now</Button>, <Button onClick={handleServiceClick} variant="contained" color="primary">Buy Now</Button>],
  ];

  for (let i = 7; i <= 7; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
      row.push('');
    }
    data.push(row);
  }
  return data;
};

function PlanAll() {
  const tableData = generateData();

  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Paper style={{ ...paperStyles, marginTop: '10%' }}>
        {/* <SvgIcon component={SecurityIcon} style={{ ...iconStyles, color: 'green' }} /> */}
        <Typography variant="body1" style={welcomeStyles}>
          Select Membership Package for NRI Matrimony
        </Typography>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableData[0].map((cell, index) => (
                <TableCell key={index}>{cell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.slice(1).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default PlanAll;
