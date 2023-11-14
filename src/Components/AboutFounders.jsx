import React, { useState } from 'react';
import {
  Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CEO from '../books/CEO.png';
import sneha from '../books/sneha.png';

const teamMembersData = [
  {
    name: 'Sneha Latha Kamble',
    role: 'Co-founder and COO',
    image: { sneha }, // Replace with the image URL
    bio: "Sneha Latha Kamble's full bio...",
  },
  {
    name: 'Khusboo',
    role: 'Co-founder and client relation Manager',
    image: 'https://utkalpar.in/wp-content/uploads/2023/04/1.png', // Replace with the image URL
    bio: "Khusboo's full bio...",
  },
  {
    name: 'x',
    role: 'Director of Client Relations and Manager',
    image: 'https://utkalpar.in/wp-content/uploads/2023/04/1.png', // Replace with the image URL
    bio: "x's full bio...",
  },
  {
    name: 'y',
    role: 'Client Service Manager',
    image: 'https://utkalpar.in/wp-content/uploads/2023/04/1.png', // Replace with the image URL
    bio: "y's full bio...",
  },
  {
    name: 'z',
    role: 'Community Manager',
    image: 'https://utkalpar.in/wp-content/uploads/2023/04/1.png', // Replace with the image URL
    bio: "z's full bio...",
  },
  {
    name: 'o',
    role: 'Online Relationship/Dating Coach',
    image: 'https://utkalpar.in/wp-content/uploads/2023/04/1.png', // Replace with the image URL
    bio: "o's full bio...",
  },
];

const technicalTeamData = [
  {
    name: 'a',
    role: 'Full Stack and Devops Engineer',
    image: 'https://clipart-library.com/images/kTKo7BB8c.png', // Replace with the image URL
    bio: "Raja Sharath Chandra Acha's full bio...",
  },
  {
    name: 'm',
    role: 'Full Stack Developer',
    image: 'https://clipart-library.com/images/kTKo7BB8c.png', // Replace with the image URL
    bio: "Moluguri Sai Pranav's full bio...",
  },
];

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: <TwitterIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: <InstagramIcon />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
  },
];

const footerStyle = {
  backgroundColor: '#e6f7ff', // Light blue background color
  padding: '4rem 0', // Increased vertical padding
  marginTop: '5%',
};

function AboutUs() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleTeamDataClickOpen = (member) => {
    setSelectedTeamMember(member);
    setOpenPopup(true);
  };

  const handleTeamDataClose = () => {
    setSelectedTeamMember(null);
    setOpenPopup(false);
  };

  const handleClickOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMember(null);
    setOpen(false);
  };
  return (
    <>
      {/* CEO Container */}
      <Container maxWidth="lg" style={{ marginTop: '3%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* Image */}
            <img
              src={CEO}// Replace with the image URL
              alt="Company Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Paragraphs */}
            <Typography variant="h5" gutterBottom>
              Dr.Pallavi.G.K
            </Typography>
            <Typography variant="h5" gutterBottom>
              Founder & CEO of Sammabandha & Shapyfyme.
            </Typography>
            <Typography variant="body1" paragraph>
              If you are like many discerning singles across the country,
              you hold your time and privacy in high regard...
              {/* Add your paragraphs here */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Meet team Container */}
      <Container style={{ marginTop: '3%' }}>
        <Typography variant="h4" gutterBottom>
          MEET THE TEAM
        </Typography>
        <Typography variant="body1" paragraph>
          Meet the exceptional team behind Sammabandha,
          where passion for matchmaking meets unwavering dedication to your love journey.
          Our seasoned experts are committed to curating personalized
          connections and see you through happily ever after!
        </Typography>
      </Container>
      {/* Card and Dialog Conatiner of Team */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {teamMembersData.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={member.name}
                  height="140"
                  image={member.image}
                  style={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1">{member.role}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleTeamDataClickOpen(member)}
                  >
                    Show Full Bio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openPopup} onClose={handleTeamDataClose} maxWidth="md">
          <DialogTitle>
            {selectedTeamMember && selectedTeamMember.name}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleTeamDataClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedTeamMember && (
            <Card>
              <CardMedia
                component="img"
                alt={selectedTeamMember.name}
                height="300"
                image={selectedTeamMember.image}
              />
              <CardContent>
                <Typography variant="h6">{selectedTeamMember.name}</Typography>
                <Typography variant="subtitle1">{selectedTeamMember.role}</Typography>
                <Typography>{selectedTeamMember.bio}</Typography>
              </CardContent>
            </Card>
            )}
          </DialogContent>
        </Dialog>
      </Container>
      {/* Meet technicalteam Container */}
      <Container style={{ marginTop: '3%' }}>
        <Typography variant="h4" gutterBottom>
          MEET THE TECHNICAL TEAM
        </Typography>
        <Typography variant="body1" paragraph>
          Meet the exceptional technicalteam behind Sammabandha,
          where passion for matchmaking meets unwavering dedication to your love journey.
          Our seasoned experts are committed to curating personalized
          connections and see you through happily ever after!
        </Typography>
      </Container>
      {/* Card and Dialog Conatiner of Technical Team */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {technicalTeamData.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={member.name}
                  height="140"
                  image={member.image}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1">{member.role}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClickOpen(member)}
                  >
                    Show Full Bio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="sm">
          <DialogTitle>
            {selectedMember && selectedMember.name}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedMember && (
            <Card>
              <CardMedia
                component="img"
                alt={selectedMember.name}
                height="300"
                image={selectedMember.image}
              />
              <CardContent>
                <Typography variant="h6">{selectedMember.name}</Typography>
                <Typography variant="subtitle1">{selectedMember.role}</Typography>
                <Typography>{selectedMember.bio}</Typography>
              </CardContent>
            </Card>
            )}
          </DialogContent>
        </Dialog>
      </Container>
      {/* Footer Container */}
      <div style={footerStyle}>
        <Container component="footer" maxWidth="lg">
          <Typography variant="body2" align="center" style={{ padding: '1rem 0' }}>
            Copyright ©
            {new Date().getFullYear()}
            {' '}
            - Sammabandha Private Limited. All rights reserved
          </Typography>

          <Box mt={2}>
            <Grid container spacing={2} justifyContent="center">
              {socialMediaLinks.map((socialMedia, index) => (
                <Grid item key={index}>
                  <Link href={socialMedia.url} target="_blank" rel="noopener noreferrer">
                    {socialMedia.icon}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={2} textAlign="center">
            <Link href="/privacy-policy" color="textSecondary" style={{ padding: '0.5rem' }}>
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" color="textSecondary" style={{ padding: '0.5rem' }}>
              Terms & Conditions
            </Link>
          </Box>
        </Container>
      </div>

    </>
  );
}

export default AboutUs;
