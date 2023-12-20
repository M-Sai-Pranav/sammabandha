import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  SvgIcon,
  Paper,
  Card,
  CardContent,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MobileIcon from '@mui/icons-material/PhoneAndroid';
import SecurityIcon from '@mui/icons-material/Security'; // Material-UI security icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Material-UI arrow upward icon
import VisibilityIcon from '@mui/icons-material/Visibility'; // Material-UI visibility icon
import Brightness5Icon from '@mui/icons-material/Brightness5'; // Material-UI brightness 5 icon
import StarIcon from '@mui/icons-material/Star'; // Material-UI star icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Material-UI favorite icon
import WhatshotIcon from '@mui/icons-material/Whatshot'; // Material-UI whatshot icon
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Material-UI location icon
import IconButton from '@mui/material/IconButton';
import WatchIcon from '@mui/icons-material/Watch';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import pgk1 from '../books/pgk1.png';
import pgk2 from '../books/pgk2.png';
import pgk3 from '../books/pgk3.png';
import pgk4 from '../books/pgk4.png';
import pgk5 from '../books/pgk5.png';
import pgk6 from '../books/pgk6.jpeg';
import s2 from '../books/s2.png';
import r1 from '../books/r1.png';
import r2 from '../books/r2.png';
import r3 from '../books/r3.png';
import instruct from '../books/in1.png';
import w1 from '../books/w1.png';
import w2 from '../books/w2.png';
import w3 from '../books/w3.png';
import w4 from '../books/w4.png';
import p1 from '../books/p1.png';
import p2 from '../books/p2.png';
import p3 from '../books/p3.png';
import p4 from '../books/p4.png';
import p5 from '../books/p5.png';
import p6 from '../books/p6.png';
import p7 from '../books/p7.png';
import p8 from '../books/p8.png';
import pps1 from '../books/pps1.png';
import pps2 from '../books/pps2.png';
import pps3 from '../books/pps3.png';
import pps4 from '../books/pps4.png';
import pps5 from '../books/pps5.png';
import pps6 from '../books/pps6.png';
import pp1 from '../books/pp1.jpeg';
import pp2 from '../books/pp2.jpeg';
import pp3 from '../books/pp3.jpeg';
import pp4 from '../books/pp4.jpeg';
import pp5 from '../books/pp5.jpeg';
import pp6 from '../books/pp6.jpeg';

const imageUrls = [pgk1, pgk2, pgk3, pgk4, pgk5];
const bodyStyles = {
  backgroundColor: '#f0f8ff', // Light blue color
};

const containerStyles = {
  marginTop: '20px',
  padding: '20px',
  textAlign: 'center', // Center align elements
};

const welcomeStyles = {
  fontSize: '3rem',
  color: 'blue',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const subtitleStyles = {
  fontSize: '1.5rem',
  color: 'green',
  marginBottom: '15px',
};

const hubInfoStyles = {
  fontSize: '3rem',
  color: 'black',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '15px',
};

const classicFontStyles = {
  textTransform: 'uppercase',
  fontSize: '2rem',
  fontFamily: 'Georgia, serif',
  fontWeight: 'bold',
};

const nonBoldFontStyles = {
  textTransform: 'none',
  fontSize: '2rem',
  fontFamily: 'Georgia, serif',
};

const buttonStyles = {
  marginTop: '20px',
  alignSelf: 'flex-end',
};

const shineUpContainerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '10px',
};

const shineUpItemStyles = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyles = {
  fontSize: '2rem',
  marginRight: '10px',
};

const paperStyles = {
  padding: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const reviewStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
};

const starIconStyles = {
  fontSize: '2rem',
  color: 'gold',
  marginRight: '5px',
};

const excellentStyles = {
  textTransform: 'uppercase',
  fontSize: '2rem',
  color: 'green',
  fontWeight: 'bold',
};

const cardStyles = {
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginTop: '20px',
};

const cardContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const cardItemStyles = {
  flex: '0 0 48%',
  textAlign: 'center',
  margin: '10px',
};

const curvedImageContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
};

const imageStyles = {
  maxWidth: '100%',
  borderRadius: '10px',
};

const curvedContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
};
const curvedContainerStylesWithImage = {
  ...curvedContainerStyles, // Include the base styles from curvedContainerStyles
  // Add additional styles specific to the container with an image
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // backgroundColor: '#f0f0f0', // Example additional style
};

const pointStyles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0',
};

const tickIconStyles = {
  marginRight: '10px',
  color: 'green', // Customize the color if needed
};

const pointTextStyles = {
  fontSize: '1rem',
};

const instructorContainerStyles = {
  textAlign: 'right',
  maxWidth: '60%', // Adjust the width as needed
};

const instructorNameStyles = {
  ...classicFontStyles,
  fontSize: '2rem',
  marginBottom: '10px',
};
const containerStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const instructorDescriptionStyles = {
  fontSize: '1rem',
  lineHeight: '1.5',
};
const cardContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};
const LearnMoreButtonStyles = {
  marginTop: '10px',
};

const cardTextStyles = {
  fontSize: '1.5rem',
};

const iconTextGap = {
  marginRight: '10px',
};

const contactTextStyles = {
  fontSize: '1rem',
  marginTop: '20px',
};

const carouselContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  position: 'relative',
};

const carouselCardStyles = {
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const arrowStyles = {
  fontSize: '3rem',
  color: 'green',
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

const headingStyles = {
  textTransform: 'uppercase',
  fontSize: '2.5rem',
  fontFamily: 'Georgia, serif',
  fontWeight: 'bold',
  color: '#4caf50', // Green color
};

const subheadingStyles = {
  fontSize: '1.5rem',
  marginBottom: '20px',
  color: '#333', // Dark text color
};

const bulletPointStyles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0',
};

const bulletIconStyles = {
  marginRight: '10px',
  color: '#4caf50', // Green color
  fontSize: '24px',
};
function LifeStyle() {
  return (
    <body style={bodyStyles}>
      <AppBar position="static">
        <Toolbar>
          {/* Left side of the navbar */}
          <Typography variant="h6" style={{ marginRight: 'auto' }}>
            Life Style Management
          </Typography>

          {/* Right side of the navbar */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/reviews">
            Reviews
          </Button>
          <Button color="inherit" component={Link} to="/personalize">
            Personalize
          </Button>
          <Button color="inherit" component={Link} to="/contactus">
            Contact Us
          </Button>
          <Button color="inherit" component={Link} to="/aboutus">
            About Us
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={containerStyles}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h3" style={welcomeStyles} paragraph>
                Life Style Management Tools
              </Typography>
              <Typography variant="h5" style={subtitleStyles} paragraph>
                Transforming the lives
              </Typography>
            </div>
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={instruct} alt="Instructor" style={{ maxWidth: '40%' }} />

              {/* Right side: Text */}
              <div style={instructorContainerStyles}>
                {/* <Typography variant="h2" style={classicFontStyles} paragraph>
                  Meet Your Instructor
                </Typography> */}

                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  {/* <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                    <Typography variant="body1" style={pointTextStyles}>
                      weight-reduction-program
                    </Typography> */}
                </div>

                {/* ... Add more points as needed ... */}

                {/* Meet Your Instructor Section */}
                <div>
                  <Typography variant="h2" style={classicFontStyles} paragraph>
                    Dr. Pallavi G.K
                  </Typography>
                  <Typography variant="body1" style={subheadingStyles} paragraph>
                    BNYS, PHCP Former Assistant Professor,
                    Government NatureCuree and
                    Yoga Medical College and Hospital,
                    Mysore.
                    Psychology of Happiness certified Practitioner, Oxford, UK
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                  <Button variant="contained" color="primary" style={LearnMoreButtonStyles}>
                    Take an Appointment
                  </Button>
                </div>
              </div>
            </div>
            <Typography variant="h3" style={hubInfoStyles} paragraph>
              <span style={nonBoldFontStyles}>
                Meet Your Instructor
              </span>
            </Typography>
            <Grid container spacing={2}>
              {imageUrls.map((url, index) => (
                <Grid key={index} item xs={4}>
                  <Paper style={{ position: 'relative', overflow: 'hidden', marginBottom: '16px' }}>
                    <img
                      src={url}
                      alt={` ${index + 1}`}
                      style={{
                        // Set different height for p5
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {/* Carousel Slider */}
            <Typography variant="h3" style={hubInfoStyles} paragraph>
              <span style={nonBoldFontStyles}>
                Achievements
              </span>
            </Typography>
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp1} alt="Instructor" style={{ maxWidth: '40%' }} />

              {/* Right side: Text */}
              <div style={instructorContainerStyles}>

                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  {/* <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    weight-reduction-program
                  </Typography> */}
                </div>

                {/* ... Add more points as needed ... */}

                {/* Meet Your Instructor Section */}
                <div>
                  <Typography variant="h2" style={classicFontStyles} paragraph>
                    An article highlighting Dr. Pallavi G.K's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp2} alt="Instructor" style={{ maxWidth: '40%' }} />

              {/* Right side: Text */}
              <div style={instructorContainerStyles}>

                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  {/* <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    weight-reduction-program
                  </Typography> */}
                </div>

                {/* ... Add more points as needed ... */}

                {/* Meet Your Instructor Section */}
                <div>
                  <Typography variant="h2" style={classicFontStyles} paragraph>
                    An article highlighting Dr. Pallavi G.K's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp3} alt="Instructor" style={{ maxWidth: '40%' }} />

              {/* Right side: Text */}
              <div style={instructorContainerStyles}>

                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  {/* <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    weight-reduction-program
                  </Typography> */}
                </div>

                {/* ... Add more points as needed ... */}

                {/* Meet Your Instructor Section */}
                <div>
                  <Typography variant="h2" style={classicFontStyles} paragraph>
                    An article highlighting Dr. Pallavi G.K's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
        {/* 1st part */}
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Sammabandha LifeStyle has been ranked among the topmost Bureaus serving Hindus and Sikhs all over the world.
            </Typography>
          </Grid>
        </Grid>

        {/* 2nd to 5th parts side by side */}
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
          {/* 2nd part */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Sitemap</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Refund Policy
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Privacy Policy
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Terms of use
            </Button>
          </Grid>

          {/* 3rd part */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              About Us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Success Stories
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Blog
            </Button>
          </Grid>

          {/* 4th part */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Need Help?</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Report Misuse
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Report Bug
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              FAQs
            </Button>
          </Grid>

          {/* 5th part */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">NRIMB Guides</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Personal Advice
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Relationship Advice
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Tips
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button variant="outlined" fullWidth>
              Ideas
            </Button>
          </Grid>
        </Grid>
      </Container>
    </body>
  );
}

export default LifeStyle;
