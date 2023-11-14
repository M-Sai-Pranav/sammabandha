import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DateNow() {
  const navigate = useNavigate();
  const handleIncrement = () => {
    navigate('/Login'); // Navigate to the /Login route
  };
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h3" color="primary">
                Sammabandha
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                Jai Bheem
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                Be yourself, chat, date, meet new people, and be the maker of your destiny.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: '20px' }}
                onClick={handleIncrement}
              >
                Date Now
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Avatar
              alt="Bharat Matrimony"
              src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/395419583_720185010134974_2975599353587049142_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TyhsivVDtR8AX9H81qx&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfB76RH2vVt09yWiJ4tqA4REq1O38x97VB69rZC4O_Z9aw&oe=65481E0E"
              style={{ width: '85%', height: '85%' }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Container 2 */}
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {/* Left half with the image */}
          <Grid item xs={6}>
            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/relevant-filters-img-new.png" alt="Image" style={{ width: '100%' }} />
          </Grid>
          {/* Right half with text */}
          <Grid item xs={6} style={{ marginTop: '15%' }}>
            <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }} color="textSecondary">
              Choose by Interests, Location and other relevant filters
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Customize your partner search with filters like Hobbies, and more.
              Find your suitable match!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DateNow;
