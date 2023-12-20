import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
import axios from 'axios';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ChatIcon from '@mui/icons-material/Chat';
import n1 from '../books/nri1.png';
import n2 from '../books/nri2.png';
import n3 from '../books/nri3.png';
import n4 from '../books/nri4.png';
import flagB from '../books/flagDatenow.jpg';
import bg from '../books/matrimony.png';

const imageStyles = {
  maxWidth: '100%',
  borderRadius: '10px',
};
const welcomeStyles = {
  fontSize: '3rem',
  color: 'blue',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const curvedImageContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  display: 'flex',
  gap: '10%',
};

const nriImages = [
  {
    imageUrl: n1,
  },
  {
    imageUrl: n2,
  },
  {
    imageUrl: n3,
  },
  {
    imageUrl: n4,
  },

  // Add more products here
];

function NriImagesCard({ image, handleAddToCart }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <img src={image.imageUrl} alt="NRI Image" style={{ width: '100%' }} />
      {/* Add any additional information you want to display */}
    </Paper>
  );
}

function InfoSection({ icon, heading, text }) {
  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      {icon}
      <Typography variant="h6" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="body1">
        {text}
      </Typography>
    </Paper>
  );
}

function NRIRegistrationForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password_hash: '',
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    mobile_number: '',
    profile_picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, profile_picture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/register', user);
      console.log('Response from the server:', response.data);
      console.log('mail sent');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Left side of the navbar */}
          <Typography variant="h6" style={{ marginRight: 'auto' }}>
            Matrimony for NRI
          </Typography>

          {/* Right side of the navbar */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/nriregister">
            Register
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
      <div style={curvedImageContainerStyles}>

        <img src={flagB} alt="All" style={{ imageStyles, width: '15%', height: '15%' }} />
        <Typography variant="body1" style={{ ...welcomeStyles, marginTop: '20px', color: 'green' }}>
          Sammabandha NRI Matrimony
        </Typography>
      </div>
      <div style={curvedImageContainerStyles}>
        <Typography variant="h5" style={{ fontWeight: 'bold', color: 'blue' }}>
          World's No.1 Ambedkarite NRI Matchmaking & Matrimonial Site
        </Typography>
      </div>
      <div style={{
        marginTop: '1%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px', // Adjust padding as needed
      }}
      >

        <img src={bg} alt="All" style={{ imageStyles, width: '100%', height: '100%' }} />

      </div>
      <Container maxWidth="lg" style={{ marginTop: '2%' }}>
        <Grid container spacing={3}>
          {/* 1st part */}
          <Grid item xs={12} md={3}>
            <InfoSection
              icon={<SecurityIcon fontSize="large" />}
              heading="Protection"
              text="All members are well protected by a sensitive and powerful anti-scam system to deal with any kind of data theft."
            />
          </Grid>

          {/* 2nd part */}
          <Grid item xs={12} md={3}>
            <InfoSection
              icon={<AttachMoneyIcon fontSize="large" />}
              heading="Membership"
              text="Members can upgrade their membership by selecting any economical plan as per their budget and requirement."
            />
          </Grid>

          {/* 3rd part */}
          <Grid item xs={12} md={3}>
            <InfoSection
              icon={<HowToRegIcon fontSize="large" />}
              heading="Verification"
              text="All members are legitimately verified and confirmed by our relevant service providers with valid identification."
            />
          </Grid>

          {/* 4th part */}
          <Grid item xs={12} md={3}>
            <InfoSection
              icon={<ChatIcon fontSize="large" />}
              heading="Communication"
              text="Members can get engaged with other profiles via chat, email, sharing pictures, or by sending interests."
            />
          </Grid>
        </Grid>
      </Container>
      <div style={{
        backgroundColor: '', // light-blue background color
        textAlign: 'center',
        padding: '20px', // Add padding as needed
      }}
      >

        <Typography variant="h4" gutterBottom>
          Thousands of Success Stories
        </Typography>

        <Grid container spacing={3}>
          {nriImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={image.imageID}>
              <NriImagesCard image={image} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Sammabandha Matrimony for NRI - Trusted NRI Matrimonial Site
        </Typography>

        <Typography variant="body1">
          Sammabandha Matrimony for NRI is one of the most trusted and best matrimony sites in the world.
          Our matrimonial services at www.sammabandha.com are available 24x7 and pave the way for millions of users
          worldwide to find the most compatible and perfect match for them on marriage sites.
        </Typography>

        <Typography variant="body1" style={{ marginTop: '10px' }}>
          The Sammabandha Matrimony for NRI is well equipped with a plethora of highly trained matrimonial
          consultants who have years of experience in elite matchmaking services for individuals across the globe.
          We are a 15-year-old global marriage bureau headquartered in Mysore, Karnataka (India),
          giving our services to those who are looking for their perfect match through matchmaking sites.
        </Typography>

        <Typography variant="body1" style={{ marginTop: '10px' }}>
          We have a long journey of more than 15 years of successful matrimonial services for brides and grooms
          with efficient matchmaking experience in different communities.
        </Typography>
      </Container>

      <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
        {/* 1st part */}
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Sammabandha NRI has been ranked among the topmost Bureaus serving Ambedkarites
              all over the world.
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
            <Typography variant="h6"> Guides</Typography>
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
    </div>
  );
}

export default NRIRegistrationForm;
