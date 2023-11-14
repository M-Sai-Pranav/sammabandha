import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Checkbox,
} from '@mui/material';
import axios from 'axios';

function Plans() {
  const handleBasicClick = () => {
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

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingLeft: '250px',
    }}
    >
      <Grid container spacing={2}>
        {/* Basic Plan */}
        <Grid item xs={12} sm={4} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Basic
              </Typography>
              <Typography variant="h6" component="div">
                1 rs/-
              </Typography>
              <ul>
                <li>
                  <Checkbox checked />
                  Free profile Creation
                </li>
                <li>
                  <Checkbox checked />
                  Free AI powered search
                </li>
                <li>
                  <Checkbox checked />
                  Unlimited access to free skill contents
                </li>
                <li>
                  <Checkbox checked={false} />
                  No access to profile contact details
                </li>
                <li>
                  <Checkbox checked={false} />
                  No Consultation
                </li>
                <li>
                  <Checkbox checked={false} />
                  No additional product offering
                </li>
              </ul>
            </CardContent>
            <CardActions>
              <Button onClick={handleBasicClick} variant="contained" color="primary">
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Gold Plan */}
        <Grid item xs={12} sm={4} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Gold
              </Typography>
              <Typography variant="h6" component="div">
                2 rs/-
              </Typography>
              <ul>
                <li>
                  <Checkbox checked />
                  Free profile Creation
                </li>
                <li>
                  <Checkbox checked />
                  Free AI powered search
                </li>
                <li>
                  <Checkbox checked />
                  Unlimited access to free skill contents
                </li>
                <li>
                  <Checkbox checked />
                  Ultimate access to profile contact details
                </li>
                <li>
                  <Checkbox checked={false} />
                  No Consultation
                </li>
                <li>
                  <Checkbox checked={false} />
                  No additional product offering
                </li>
              </ul>
            </CardContent>
            <CardActions>
              <Button onClick={handleGoldClick} variant="contained" color="primary">
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Platinum Plan */}
        <Grid item xs={12} sm={4} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Platinum
              </Typography>
              <Typography variant="h6" component="div">
                3 rs /-
              </Typography>
              <ul>
                <li>
                  <Checkbox checked />
                  Free profile Creation
                </li>
                <li>
                  <Checkbox checked />
                  Free AI powered search
                </li>
                <li>
                  <Checkbox checked />
                  Unlimited access to free skill contents
                </li>
                <li>
                  <Checkbox checked />
                  Ultimate access to profile contact details
                </li>
                <li>
                  <Checkbox checked />
                  Monthly Consultation
                </li>
                <li>
                  <Checkbox checked />
                  Additional product offering
                </li>
              </ul>
            </CardContent>
            <CardActions>
              <Button onClick={handlePlatinumClick} variant="contained" color="primary">
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Plans;
