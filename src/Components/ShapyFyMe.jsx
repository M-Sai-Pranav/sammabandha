import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  SvgIcon,
  Paper,
  Card,
  CardContent,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
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

function Sha() {
  const navigate = useNavigate();

  const handleIncrement = () => {
    navigate('/Login'); // Navigate to the /Login route
  };

  const pillarsData = [
    {
      id: 1,
      name: 'Eat consciously',
      imageUrl: p2, // Make sure the image paths are correct
    },
    {
      id: 2,
      name: 'Exercise moderately',
      imageUrl: p3,
    },
    {
      id: 3,
      name: 'Drink adequately',
      imageUrl: p1,
    },
    {
      id: 4,
      name: 'Meditate daily',
      imageUrl: p7,
    },
    {
      id: 5,
      name: 'Sleep deeply',
      imageUrl: p6,
    },
    {
      id: 6,
      name: 'Care selflessly',
      imageUrl: p5,
    },
    {
      id: 7,
      name: 'Love unconditionally',
      imageUrl: p4,
    },
    {
      id: 8,
      name: 'Live the life abundantly',
      imageUrl: p8,
    },
  ];

  const faqData = [
    {
      question: 'How to register on ShapyFy Me?',
      answer: "To register on ShapyFy Me, visit our website and click on the 'Register' button. Follow the on-screen instructions to create your account.",
    },
    {
      question: 'What are some of the top-notch safety measures?',
      answer: 'We prioritize user safety by implementing encryption, secure data storage, and regular security audits. Your information is our top priority.',
    },
    {
      question: "What is ShapyFy Me 'Prime'?",
      answer: "ShapyFy Me 'Prime' is a premium membership offering exclusive benefits such as advanced matchmaking algorithms, priority support, and access to premium events.",
    },
    {
      question: 'How can I verify my profile?',
      answer: 'Profile verification can be done by uploading official identification documents. Our team will review the documents and mark your profile as verified.',
    },
    {
      question: 'What are the features of ShapyFy Me?',
      answer: 'ShapyFy Me offers a range of features including personalized matchmaking, relationship advice, educational resources, and networking opportunities for entrepreneurs.',
    },
  ];
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const handleToggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

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

  const images = [pps1, pps2, pps3, pps4, pps5, pps6];
  const [currentCard, setCurrentCard] = useState(1);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard < 4 ? prevCard + 1 : 1));
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard > 1 ? prevCard - 1 : 4));
  };
  return (
    <body style={bodyStyles}>
      <Container maxWidth="lg" style={containerStyles}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h3" style={welcomeStyles} paragraph>
                ShapyFy Me
              </Typography>
              <Typography variant="h5" style={subtitleStyles} paragraph>
                Transforming the lives
              </Typography>
              <Typography variant="h3" style={hubInfoStyles} paragraph>
                <span style={nonBoldFontStyles}>
                  Our Goal
                  <br />
                  transform lives by shaping mind and body under a single roof
                </span>
              </Typography>
              <div style={shineUpContainerStyles}>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={ArrowUpwardIcon} style={iconStyles} /> */}
                  {/* <Typography variant="body1" style={classicFontStyles}>
                    Come up
                  </Typography> */}
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={VisibilityIcon} style={iconStyles} /> */}
                  <Typography variant="body1" style={classicFontStyles}>
                    Mode: Online and Offline
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={Brightness5Icon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Shine up
                  </Typography> */}
                </div>
              </div>
              <Paper style={paperStyles}>
                {/* <SvgIcon component={SecurityIcon} style
                ={{ ...iconStyles, color: 'green' }} /> */}
                <Typography variant="body1" style={classicFontStyles}>
                  Consultant:
                  <br />
                  Dr. Pallavi G.K
                  <br />
                  Dr. Kavana cm
                </Typography>
              </Paper>
              <div style={reviewStyles}>
                <SvgIcon component={CheckCircleOutlineIcon} style={{ ...iconStyles, color: 'green' }} />
                <Typography
                  variant="body1"
                  style={{ ...classicFontStyles, fontSize: '2rem', textDecoration: 'underline' }}
                >
                  Based on 350 Reviews
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} style={starIconStyles} />
                ))}
              </div>
              <Typography variant="body1" style={{ ...excellentStyles, fontSize: '1.8rem' }}>
                Excellent
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={buttonStyles}
                onClick={handleIncrement}
              >
                Date Now
              </Button>
              <div style={cardStyles}>
                <div style={cardContentStyles}>
                  <div style={cardItemStyles}>
                    <SvgIcon component={MobileIcon} style={{ ...iconStyles, color: 'green', fontSize: '3rem' }} />
                    <Typography variant="body1" style={{ ...classicFontStyles, fontSize: '2rem', fontWeight: 'bold' }}>
                      100%
                      <br />
                    </Typography>
                    <Typography variant="body1" style={{ ...nonBoldFontStyles, fontSize: '1.5rem' }}>
                      Mobile verified profiles, mentors, and entrepreneurs
                    </Typography>
                  </div>
                  <div style={cardItemStyles}>
                    <SvgIcon component={SecurityIcon} style={{ ...iconStyles, color: 'green', fontSize: '3rem' }} />
                    <Typography variant="body1" style={{ ...classicFontStyles, fontSize: '2rem', fontWeight: 'bold' }}>
                      5 crores+
                      <br />
                    </Typography>
                    <Typography variant="body1" style={{ ...nonBoldFontStyles, fontSize: '1.5rem' }}>
                      Customers Served
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            {/* All Image */}
            <div style={curvedImageContainerStyles}>
              <img src={s2} alt="All" style={{ imageStyles }} />
              <Typography variant="body1" style={{ ...classicFontStyles, marginTop: '20px' }}>
                transform lives by shaping mind and body under a single roof
              </Typography>
            </div>
            {/* How does ShapyFy Me Work */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Shapyfyme Programs
              </Typography>
              {/* Points with Green Tick Icons */}
              <div style={pointStyles}>
                <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                <Typography variant="body1" style={pointTextStyles}>
                  weight-reduction-program
                </Typography>
              </div>
              <div style={pointStyles}>
                <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                <Typography variant="body1" style={pointTextStyles}>
                  happiness-wellness-program
                </Typography>
              </div>
              {/* <div style={pointStyles}>
                <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                <Typography variant="body1" style={pointTextStyles}>
                  Search by your Preferences
                </Typography>
              </div>
              <div style={pointStyles}>
                <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                <Typography variant="body1" style={pointTextStyles}>
                  Ready to Date
                </Typography>
              </div> */}
            </div>
            {/* Customize based on */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                weight reduction program
              </Typography>
              <div style={curvedContainerStyles}>
                <Typography variant="h2" style={classicFontStyles} paragraph>
                  Beneﬁts
                </Typography>
                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Improved Health
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Increased Energy Levels
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Enhanced Mental Well-being
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Better Sleep Quality
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" style={nonBoldFontStyles} paragraph>
                {/* Customize your partner, mentor, counselor, and entrepreneur search with filters
                like: */}
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                {/* <SvgIcon component={FavoriteIcon} style={{ ...iconStyles, color: 'red' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Instructor(s) Names
                  <br />
                  Pranav
                  <br />
                  Sharath
                </Typography>
              </div>
              <div style={cardStyles}>
                <SvgIcon
                  component={WatchIcon}
                  styl
                  e={{ ...iconStyles, color: 'orange' }}
                />
                <Typography variant="body1" style={cardTextStyles}>
                  Duration - 3 Months
                </Typography>
              </div>
              <div style={cardStyles}>
                <SvgIcon
                  component={LocationOnIcon}
                  style={{ ...iconStyles, color: 'blue' }}
                />
                <Typography variant="body1" style={cardTextStyles}>
                  Mode - Offline
                </Typography>
              </div>
            </div>
            {/* Customize based on */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                happiness wellness program
              </Typography>
              <div style={curvedContainerStyles}>
                <Typography variant="h2" style={classicFontStyles} paragraph>
                  Beneﬁts
                </Typography>
                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Improved Mental Health
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Enhanced Productivity
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Positive Workplace Culture
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Reduced Absenteeism
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" style={nonBoldFontStyles} paragraph>
                {/* Customize your partner, mentor, counselor, and entrepreneur search with filters
                like: */}
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                {/* <SvgIcon component={FavoriteIcon} style={{ ...iconStyles, color: 'red' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Instructor(s) Names
                  <br />
                  Dr. Pallavi
                  <br />
                </Typography>
              </div>
              <div style={cardStyles}>
                <SvgIcon
                  component={WatchIcon}
                  styl
                  e={{ ...iconStyles, color: 'orange' }}
                />
                <Typography variant="body1" style={cardTextStyles}>
                  Duration - 2 Months
                </Typography>
              </div>
              <div style={cardStyles}>
                <SvgIcon
                  component={LocationOnIcon}
                  style={{ ...iconStyles, color: 'blue' }}
                />
                <Typography variant="body1" style={cardTextStyles}>
                  Mode - Offline and Online
                </Typography>
              </div>
            </div>
            {/* diabeties */}
            <Paper style={curvedContainerStyles} elevation={3}>
              <Typography variant="h2" style={headingStyles} paragraph>
                Struggling with Diabetes & High Blood Pressure?
              </Typography>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                Consider our 7-day Online Program for a healthier life.
              </Typography>

              <List>
                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Evidence-based care by skilled physicians" />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Natural remedies: Diet Therapy, Hydrotherapy, Mud Therapy, Heliotherapy, and Stress Management" />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Rejuvenate your body and empower a medication-free life" />
                </ListItem>
              </List>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                Decode Diabetes and High Blood Pressure today!
              </Typography>
              {/* Programs Section */}
              <Grid container spacing={3}>
                {/* Program */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#ff9800', marginBottom: '10px' }}>
                      Program
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Customized program to address your specific health needs.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Detox */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#e91e63', marginBottom: '10px' }}>
                      Detox
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      7-day detoxification program to cleanse and revitalize your body.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Rejuvenate */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#2196f3', marginBottom: '10px' }}>
                      Rejuvenate
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Restore and invigorate your well-being with our rejuvenation program.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Heal */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#4caf50', marginBottom: '10px' }}>
                      Heal
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Personalized healing programs for holistic well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Diet Therapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#2196f3', marginBottom: '10px' }}>
                      Diet Therapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Personalized diet plans to improve your overall health and well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Hydrotherapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#e91e63', marginBottom: '10px' }}>
                      Hydrotherapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Utilizing water for therapeutic
                      purposes to enhance your physical and mental health.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Mud Therapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#ff9800', marginBottom: '10px' }}>
                      Mud Therapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Harnessing the healing properties of mud for various health benefits.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Heliotherapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#8bc34a', marginBottom: '10px' }}>
                      Heliotherapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Exposure to sunlight for therapeutic purposes to promote overall well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Stress Management */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#673ab7', marginBottom: '10px' }}>
                      Stress Management
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Techniques and practices to effectively manage and reduce stress in daily life.
                    </Typography>
                  </Paper>
                </Grid>

              </Grid>

              {/* Cards with Icons and Text */}
              <div style={cardContainerStyles}>
                <div style={cardStyles}>
                  <FavoriteIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Instructor
                    <br />
                    Dr. Pallavi G.K
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <WatchIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Duration - 7 Days
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <LocationOnIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Mode - Online
                  </Typography>
                </div>
              </div>

              <Typography variant="body1" style={contactTextStyles}>
                Contact for more details:
              </Typography>

              <Typography variant="body1" style={cardTextStyles}>
                Dr. Pallavi.G.K
                <br />
                +447880386873
              </Typography>
            </Paper>
            {/* PCODS */}
            <Paper style={curvedContainerStyles} elevation={3}>
              <Typography variant="h2" style={headingStyles} paragraph>
                Are you suffering from PCOD and want to get rid of your medications?
              </Typography>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                Consider our 7-day Detoxification and Rejuvenation
                Online Program for a healthier life.
              </Typography>

              <List>
                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Sustainable solutions to live without medications and future complications" />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Evidence-based care using natural remedies: Diet Therapy, Hydrotherapy, Mud Therapy, Heliotherapy, and Stress Management" />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Rejuvenate your body and take control of your health" />
                </ListItem>
              </List>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                It is time to decode PCOD.
              </Typography>

              {/* Programs Section */}
              <Grid container spacing={3}>
                {/* Program */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#ff9800', marginBottom: '10px' }}>
                      Program
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Customized program to address your specific health needs.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Detox */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#e91e63', marginBottom: '10px' }}>
                      Detox
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      7-day detoxification program to cleanse and revitalize your body.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Rejuvenate */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#2196f3', marginBottom: '10px' }}>
                      Rejuvenate
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Restore and invigorate your well-being with our rejuvenation program.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Heal */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#4caf50', marginBottom: '10px' }}>
                      Heal
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Personalized healing programs for holistic well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Diet Therapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#2196f3', marginBottom: '10px' }}>
                      Diet Therapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Personalized diet plans to improve your overall health and well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Hydrotherapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#e91e63', marginBottom: '10px' }}>
                      Hydrotherapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Utilizing water for therapeutic
                      purposes to enhance your physical and mental health.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Mud Therapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#ff9800', marginBottom: '10px' }}>
                      Mud Therapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Harnessing the healing properties of mud for various health benefits.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Heliotherapy */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#8bc34a', marginBottom: '10px' }}>
                      Heliotherapy
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Exposure to sunlight for therapeutic purposes to promote overall well-being.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Stress Management */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={cardStyles}>
                    <Typography variant="h4" style={{ color: '#673ab7', marginBottom: '10px' }}>
                      Stress Management
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
                      Techniques and practices to effectively
                      manage and reduce stress in daily life.
                    </Typography>
                  </Paper>
                </Grid>

              </Grid>

              <div style={cardContainerStyles}>
                <div style={cardStyles}>
                  <FavoriteIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Instructor
                    <br />
                    Dr. Pallavi G.K
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <WatchIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Duration - 7 Days
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <LocationOnIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Mode - Online
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" style={contactTextStyles}>
                Contact for more details:
              </Typography>
              <Typography variant="body1" style={cardTextStyles}>
                Dr. Pallavi.G.K
                <br />
                +447880386873
              </Typography>
            </Paper>

            {/* Why Sammabanhda ? */}
            {/* New Container */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Why ShapyFy Me?
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Holistic Well-being Approach</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Personalized Programs</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Experienced and Qualified Professionals</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Innovative and Engaging Methods</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Proven Results and Success Stories</span>
                  </Typography>
                </div>
              </div>
            </div>

            {/* 8 pillars */}
            <div style={curvedContainerStyles}>
              <Typography variant="h4" gutterBottom>
                8 Pillars of Shapyfyme
              </Typography>
              <Grid container spacing={3}>
                {pillarsData.map((pillar) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={pillar.id}>
                    <Paper elevation={3} style={{ padding: '16px', margin: '16px', textAlign: 'center' }}>
                      <img src={pillar.imageUrl} alt={pillar.name} style={{ width: '100%' }} />
                      <Typography variant="h6">{pillar.name}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
            {/* Carousel Container Reviews */}
            {/* Carousel Container */}
            <div style={carouselContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Transform your life with ShapyFy Me
                where millions have lost weight and found lasting peace.
              </Typography>

              {/* Carousel */}
              <div style={{ ...carouselCardStyles, marginTop: '28%' }}>
                {/* Content for Cards */}
                {currentCard === 1 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Priyajit </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        ShapyFy Me has been a
                        game-changer for me on my weight loss journey.
                        The personalized approach and expert guidan
                        ce provided by their team made the process effective and sustainable.

                      </Typography>
                    </div>
                    <img src={w1} alt="R1" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Priyajit</Typography>
                </>
                )}

                {currentCard === 2 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Ajay </Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        ShapyFy Me goes beyond just physical transformation;
                        it helped me discover a profound sense of peace.
                        The combination of wellness programs and mindful practices offered a
                        holistic approach s.
                      </Typography>
                    </div>
                    <img src={w2} alt="R2" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Ajay </Typography>
                </>
                )}

                {currentCard === 3 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Sana</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        ShapyFy Me has been my partner in achieving a healthier lifestyle.
                        The support and encouragement from their dedicated team made my weight
                        loss journey not only successful
                        but enjoyable.
                      </Typography>
                    </div>
                    <img src={w3} alt="R3" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Sana</Typography>
                </>
                )}

                {currentCard === 4 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Namratha</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        ShapyFy Me is more than just a weight loss program;
                        it s a comprehensive well-being solution.
                        The personalized approach,
                        combined with innovative methods,
                        made the journey both engaging and effective.
                      </Typography>
                    </div>
                    <img src={w4} alt="R4" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>Namratha</Typography>
                </>
                )}
              </div>

              {/* Left Arrow */}
              <SvgIcon component={ArrowBackIcon} style={{ ...arrowStyles, left: '5%' }} onClick={handlePrevCard} />

              {/* Right Arrow */}
              <SvgIcon component={ArrowForwardIcon} style={{ ...arrowStyles, right: '5%' }} onClick={handleNextCard} />
            </div>
            {/* Top Services ShapyFy Me Offers */}
            <div style={{ ...curvedContainerStyles, marginTop: '45%' }}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Top Services ShapyFy Me Offers
              </Typography>

              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Personal Consultation</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Meeting Coordination</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Feedback Management</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Fitness Workshops</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Event Management</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Self Help books</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Health and beauty corner</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Self-help products</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Yoga classes</span>
                  </Typography>
                </div>
              </div>
            </div>
            {/* Abut Instructor */}
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={instruct} alt="Instructor" style={{ maxWidth: '40%' }} />

              {/* Right side: Text */}
              <div style={instructorContainerStyles}>
                <Typography variant="h2" style={classicFontStyles} paragraph>
                  Meet Your Instructor
                </Typography>

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
                    Learn more about Dr. Pallavi
                  </Button>
                </div>
              </div>
            </div>
            {/* Carousel Slider */}
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
                    An article highlighting Pallavi's unwavering
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
                    An article highlighting Pallavi's unwavering
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
                    An article highlighting Pallavi's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>

            {/* 4 */}


            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp4} alt="Instructor" style={{ maxWidth: '40%' }} />

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
                    An article highlighting Pallavi's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>
            {/* 5 */}

            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp5} alt="Instructor" style={{ maxWidth: '40%' }} />

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
                    An article highlighting Pallavi's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div style={curvedContainerStylesWithImage}>
              {/* Left side: Image */}
              <img src={pp6} alt="Instructor" style={{ maxWidth: '40%' }} />

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
                    An article highlighting Pallavi's unwavering
                    support for Indian students in Ukraine has been published.
                  </Typography>
                  <Typography variant="body1" style={instructorDescriptionStyles}>
                    {/* Add some random text about Dr. Pallavi */}

                  </Typography>
                </div>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <Typography variant="h3" style={welcomeStyles} paragraph>
                The Power of Gratitude
              </Typography>
              <Typography variant="h5" style={subtitleStyles} paragraph>
                {/* Transforming the lives */}
              </Typography>
              <Typography variant="h3" style={hubInfoStyles} paragraph>
                <span style={nonBoldFontStyles}>
                  {/* THE POWER OF */}
                  {/* GRATITUDE */}
                  {/* <br /> */}
                  Be the maker of your destiny
                </span>
              </Typography>
              <div style={shineUpContainerStyles}>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={ArrowUpwardIcon} style={iconStyles} /> */}
                  {/* <Typography variant="body1" style={classicFontStyles}>
                    Come up
                  </Typography> */}
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={VisibilityIcon} style={iconStyles} /> */}
                  <Typography variant="body1" style={classicFontStyles}>
                    Transforming the lives
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={Brightness5Icon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Shine up
                  </Typography> */}
                </div>
              </div>

              <Paper style={curvedContainerStyles} elevation={3}>
                <Typography variant="h2" style={headingStyles} paragraph>
                  The Power of Gratitude Program for 5 Days
                </Typography>

                <Typography variant="body1" style={subheadingStyles} paragraph>
                  Discover the great secret of life with the law of
                  attraction and the power of gratitude.
                </Typography>

                <List>
                  <ListItem style={bulletPointStyles}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon style={bulletIconStyles} />
                    </ListItemIcon>
                    <ListItemText primary="Learn how the law of attraction operates in your life" />
                  </ListItem>

                  <ListItem style={bulletPointStyles}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon style={bulletIconStyles} />
                    </ListItemIcon>
                    <ListItemText primary="Understand the magnetic power of thoughts and their frequency" />
                  </ListItem>

                  <ListItem style={bulletPointStyles}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon style={bulletIconStyles} />
                    </ListItemIcon>
                    <ListItemText primary="Harness the transmission power of your thoughts to change your life" />
                  </ListItem>

                  <ListItem style={bulletPointStyles}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon style={bulletIconStyles} />
                    </ListItemIcon>
                    <ListItemText primary="Shape your future by focusing on love and gratitude" />
                  </ListItem>
                </List>

                <Typography variant="body1" style={subheadingStyles} paragraph>
                  Love & Gratitude:
                </Typography>

                <Typography variant="body1" style={cardTextStyles}>
                  Dr. Pallavi G.K
                  <br />
                  Contact: +447880376873
                </Typography>

                <Typography variant="body1" style={contactTextStyles}>
                  Join us in cultivating the power of gratitude for a transformative experience!
                </Typography>
              </Paper>
            </div>

            {/* plastic */}
            {/* THE POWER OF NEUROPLASTICITY */}
            <Typography variant="h3" style={welcomeStyles} paragraph>
              The Power of NEUROPLASTICITY
            </Typography>
            <Typography variant="h5" style={subtitleStyles} paragraph>
              {/* Transforming the lives */}
            </Typography>
            <Typography variant="h3" style={hubInfoStyles} paragraph>
              <span style={nonBoldFontStyles}>
                {/* THE POWER OF */}
                {/* GRATITUDE */}
                {/* <br /> */}
                Be the maker of your destiny
              </span>
            </Typography>
            <div style={shineUpContainerStyles}>
              <div style={shineUpItemStyles}>
                {/* <SvgIcon component={ArrowUpwardIcon} style={iconStyles} /> */}
                {/* <Typography variant="body1" style={classicFontStyles}>
                    Come up
                  </Typography> */}
              </div>
              <div style={shineUpItemStyles}>
                {/* <SvgIcon component={VisibilityIcon} style={iconStyles} /> */}
                <Typography variant="body1" style={classicFontStyles}>
                  Transforming the lives
                </Typography>
              </div>
              <div style={shineUpItemStyles}>
                {/* <SvgIcon component={Brightness5Icon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Shine up
                  </Typography> */}
              </div>
            </div>

            <Paper style={curvedContainerStyles} elevation={3}>
              <Typography variant="h2" style={headingStyles} paragraph>
                The Power of Neuroplasticity Program for 5 Days
              </Typography>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                Join our online program on THE POWER OF NEUROPLASTICITY, beginning soon for a transformative experience.
              </Typography>

              <List>
                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Led by a doctor (Nature cure and yoga Physician) with expertise in Psychology of Happiness @ Oxford and Health Promotion @ University of Leeds." />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="8 years of experience conducting lifestyle management programs and treating non-communicable diseases with abundant results." />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Replenish, revitalize, and discover yourself in this individual and transformative journey." />
                </ListItem>

                <ListItem style={bulletPointStyles}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon style={bulletIconStyles} />
                  </ListItemIcon>
                  <ListItemText primary="Explore mindfulness, meditation, sleep, diet, and exercise for sustainable change." />
                </ListItem>
              </List>

              <Typography variant="body1" style={subheadingStyles} paragraph>
                It's the time to revitalize, detoxify, rejuvenate, and transform your life with the power of neuroplasticity.
              </Typography>

              <Typography variant="body1" style={contactTextStyles}>
                Contact for more details:
              </Typography>

              <div style={cardContainerStyles}>
                <div style={cardStyles}>
                  <FavoriteIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Instructor
                    <br />
                    Dr. [Instructor Name]
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <WatchIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Duration - 5 Days
                  </Typography>
                </div>

                <div style={cardStyles}>
                  <LocationOnIcon style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    Mode - Online
                  </Typography>
                </div>
              </div>

              <Typography variant="body1" style={cardTextStyles}>
                Dr. Pallavi G.K
                <br />
              </Typography>
            </Paper>

            <Paper style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>
              <Typography variant="h2" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                Frequently Asked Questions
              </Typography>
              {faqData.map((faq, index) => (
                <Card key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <CardContent style={{ flex: 1 }}>
                    <Typography variant="h4" style={{ marginBottom: '10px' }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body1" style={{ display: expanded[index] ? 'block' : 'none' }}>
                      {faq.answer}
                    </Typography>
                  </CardContent>
                  <IconButton onClick={() => handleToggleExpand(index)}>
                    {expanded[index] ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </Card>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </body>
  );
}

export default Sha;
