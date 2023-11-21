import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  SvgIcon,
  Paper,
  Card,
  CardContent,
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

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import All from '../books/AllNew.jpeg';
import r1 from '../books/r1.png';
import r2 from '../books/r2.png';
import r3 from '../books/r3.png';
import r4 from '../books/r4.png';
import w5 from '../books/w5.png';
import w6 from '../books/w6.png';
import w3 from '../books/w3.png';
import w4 from '../books/w4.png';

function Business() {
  const navigate = useNavigate();

  const handleIncrement = () => {
    navigate('/Login'); // Navigate to the /Login route
  };

  const faqData = [
    {
      question: 'How to register on Business/ Job description?',
      answer: "To register on Business/ Job description, visit our website and click on the 'Register' button. Follow the on-screen instructions to create your account.",
    },
    {
      question: 'What are some of the top-notch safety measures?',
      answer: 'We prioritize user safety by implementing encryption, secure data storage, and regular security audits. Your information is our top priority.',
    },
    {
      question: "What is Business/ Job description 'Prime'?",
      answer: "Business/ Job description 'Prime' is a premium membership offering exclusive benefits such as advanced matchmaking algorithms, priority support, and access to premium events.",
    },
    {
      question: 'How can I verify my profile?',
      answer: 'Profile verification can be done by uploading official identification documents. Our team will review the documents and mark your profile as verified.',
    },
    {
      question: 'What are the features of Business/ Job description?',
      answer: 'Business/ Job description offers a range of features including personalized matchmaking, relationship advice, educational resources, and networking opportunities for entrepreneurs.',
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
  const classicFontStylesnonBold = {
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontFamily: 'Georgia, serif',
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
  const boldHeadingStyles = {
    fontWeight: 'bold',
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
  const headingStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const curvedContainerStyles = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  };

  const pointStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const tickIconStyles = {
    fontSize: '2rem',
    color: 'green',
    marginRight: '10px',
  };

  const pointTextStyles = {
    fontSize: '1.5rem',
  };

  const cardTextStyles = {
    fontSize: '1.5rem',
  };

  const iconTextGap = {
    marginRight: '10px',
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
              <Typography variant="h5" style={subtitleStyles} paragraph>
                Hey love, Jai Bheem.
              </Typography>
              <Typography variant="h3" style={welcomeStyles} paragraph>
                Business/ Job description by Sammabandha
              </Typography>
              <Typography variant="h3" style={hubInfoStyles} paragraph>
                <span style={nonBoldFontStyles}>
                  Navigate your Career path or Entrepreneurial journey.
                </span>
              </Typography>
              <Paper style={paperStyles}>
                {/* <SvgIcon component={SecurityIcon}
                style={{ ...iconStyles, color: 'green' }} /> */}
                <Typography variant="body1" style={classicFontStyles}>
                  Expressway to Business & Career Networking!
                </Typography>
              </Paper>
              <div style={shineUpContainerStyles}>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={ArrowUpwardIcon} style={iconStyles} /> */}
                  <Typography variant="body1" style={classicFontStyles}>
                    Network
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={VisibilityIcon} style={iconStyles} /> */}
                  <Typography variant="body1" style={classicFontStyles}>
                    Elevate
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  {/* <SvgIcon component={Brightness5Icon} style={iconStyles} /> */}
                  <Typography variant="body1" style={classicFontStyles}>
                    Succeed
                  </Typography>
                </div>
              </div>
              <Paper style={paperStyles}>
                <SvgIcon component={SecurityIcon} style={{ ...iconStyles, color: 'green' }} />
                <Typography variant="body1" style={classicFontStyles}>
                  100% Safe and Secure
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
                Sign up now
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
              <img
                src={All}
                alt="All"
                style={{ imageStyles }}
              />
              <Typography variant="body1" style={{ ...nonBoldFontStyles, marginTop: '20px' }}>
                The biggest and most trusted hub for relationships, education, and entrepreneurship
                from the Ambedkarites to the Ambedkarites.
              </Typography>
            </div>
            {/* How does Sammabandha Work */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                How does Business/ Job description Sammabandha Work
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                {/* <SvgIcon component={FavoriteIcon} style={{ ...iconStyles, color: 'red' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Succeed in your career or business with genuine mentors
                  just right for you!
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {WhatshotIcon} style={{ ...iconStyles, color: 'orange' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Get one-to-one guidance from seasoned professionals,
                  unlock opportunities, and transform your
                  dreams into reality.
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {LocationOnIcon} style={{ ...iconStyles, color: 'blue' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Get your ideal job or set up your successful business,
                  powered by insightful advice and valuable
                  tips from Mentors who have walked the path.
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {LocationOnIcon} style={{ ...iconStyles, color: 'blue' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Empower, engage, and excel with us!
                </Typography>
              </div>
            </div>
            {/* Customize based on */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Career Success Starts Here!
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                {/* <SvgIcon component={FavoriteIcon} style={{ ...iconStyles, color: 'red' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Propel your career or business forward with mentors tailored just for you.
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {WhatshotIcon} style={{ ...iconStyles, color: 'orange' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Gain one-to-one
                  guidance, unlock opportunities, and turn your dreams into reality.
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {LocationOnIcon} style={{ ...iconStyles, color: 'blue' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Together, we'll connect mindful
                  and joyful souls for a happier future.
                </Typography>
              </div>
              <div style={cardStyles}>
                {/* <SvgIcon component=
                {LocationOnIcon} style={{ ...iconStyles, color: 'blue' }} /> */}
                <Typography variant="body1" style={cardTextStyles}>
                  Get mentorship and
                  guidance from qualified Individuals on a range of
                  topics like scholarships, academic
                  development, entrance exams, and beyond.
                </Typography>
              </div>
            </div>
            {/* Why Sammabanhda ? */}
            {/* New Container */}
            <div style={curvedContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Why Business/ Job description  by Sammabandha?
              </Typography>
              {/* Cards with Icons and Text */}
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Build by community for community</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Verified Community members</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Secure Personal Information</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>First largest global community portal</span>
                  </Typography>
                </div>
              </div>
              <div style={cardStyles}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
                  <Typography variant="body1" style={cardTextStyles}>
                    <span style={iconTextGap}>Continuously Trained AI Assistant</span>
                  </Typography>
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            {/* Carousel Container */}
            <div style={carouselContainerStyles}>
              <Typography variant="h2" style={classicFontStyles} paragraph>
                Empowering Careers: Millions Have Achieved Success
                with Sammabandha's Job Mentorship
              </Typography>

              {/* Carousel */}
              <div style={{ ...carouselCardStyles, marginTop: '28%' }}>
                {/* Content for Cards */}
                {currentCard === 1 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Emily Johnson</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        Sammanbandha's Job Mentorship gave me the edge to excel in my career.
                        Grateful for the guidance!
                      </Typography>
                    </div>
                    <img src={w3} alt="R1" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Emily Johnson</Typography>
                </>
                )}

                {currentCard === 2 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Aisha Patel</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        As a professional woman, Sammanbandha's mentorship
                        opened doors I never thought possible.
                        I owe my success to their invaluable support.
                      </Typography>
                    </div>
                    <img src={w4} alt="R2" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Aisha Patel</Typography>
                </>
                )}

                {currentCard === 3 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Sophia Rodriguez</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        Sammabandha's Job Mentorship was my compass in navigating the corporate world.
                        I am now living my career dreams, thanks to their expert guidance
                      </Typography>
                    </div>
                    <img src={w5} alt="R3" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Sophia Rodriguez</Typography>
                </>
                )}

                {currentCard === 4 && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="h4" style={{ marginBottom: '20px' }}>Priya Sharma</Typography>
                      <Typography variant="body1" style={{ fontSize: '1.8rem' }}>
                        Millions have achieved career milestones, and I'm one of them,
                        thanks to Sammabandha's Job Mentorship.
                        Their personalized approach made all the difference.
                      </Typography>
                    </div>
                    <img src={w6} alt="R4" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
                  </div>
                  <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Priya Sharma</Typography>
                </>
                )}
              </div>

              {/* Left Arrow */}
              <SvgIcon component={ArrowBackIcon} style={{ ...arrowStyles, left: '5%' }} onClick={handlePrevCard} />

              {/* Right Arrow */}
              <SvgIcon component={ArrowForwardIcon} style={{ ...arrowStyles, right: '5%' }} onClick={handleNextCard} />
            </div>
            <Paper style={{ padding: '20px', textAlign: 'center', marginTop: '45%' }}>
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

export default Business;
