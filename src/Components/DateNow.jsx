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
import Logo from '../books/logo.jpeg';
import mam from '../books/mamwbr.jpeg';
import flag from '../books/flag.jpeg';
import r1 from '../books/r1.png';
import r2 from '../books/r2.png';
import r3 from '../books/r3.png';
import r4 from '../books/r4.png';
import flagB from '../books/flagDatenow.jpg';
import Footer from './Footer';

function DateNow() {
  const navigate = useNavigate();

  const handleIncrement = () => {
    navigate('/Login'); // Navigate to the /Login route
  };

  const faqData = [
    {
      question: 'How to register on Sammabandha?',
      answer: "To register on Sammabandha, visit our website and click on the 'Register' button. Follow the on-screen instructions to create your account.",
    },
    {
      question: 'What are some of the top-notch safety measures?',
      answer: 'We prioritize user safety by implementing encryption, secure data storage, and regular security audits. Your information is our top priority.',
    },
    {
      question: "What is Sammabandha 'Prime'?",
      answer: "Sammabandha 'Prime' is a premium membership offering exclusive benefits such as advanced matchmaking algorithms, priority support, and access to premium events.",
    },
    {
      question: 'How can I verify my profile?',
      answer: 'Profile verification can be done by uploading official identification documents. Our team will review the documents and mark your profile as verified.',
    },
    {
      question: 'What are the features of Sammabandha?',
      answer: 'Sammabandha offers a range of features including personalized matchmaking, relationship advice, educational resources, and networking opportunities for entrepreneurs.',
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
    backgroundColor: 'white', // Light blue color
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
    fontSize: '2rem',
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
    color: 'blue',
  };

  const nonBoldFontStyles = {
    textTransform: 'none',
    fontSize: '2rem',
    fontFamily: 'Georgia, serif',
    color: 'blue',
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
    alignItems: 'center',
    marginBottom: '20px',
  };
  const paperStyles1 = {
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  const cardContentStylesGrid = {
    textAlign: 'center',
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

  const servicesData = [
    {
      serviceID: 1,
      name: 'Matrimony',
      description: 'Find your life partner with our matrimony services.',
      imageUrl: 'https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=1380&t=st=1700881604~exp=1700882204~hmac=25a43e327b4c0d39550b7b2e053912a6df1e2b12d1cb525c96278afb236a7a9e',
      linkURL: 'register',
    },
    {
      serviceID: 2,
      name: 'Live in Relationships',
      description: 'Explore and navigate live-in relationships with our guidance.',
      imageUrl: 'https://img.freepik.com/free-photo/joyful-couple-desk-with-laptop_23-2148455102.jpg?w=1380&t=st=1700882703~exp=1700883303~hmac=60f84fd8bd3f631e810695ebdf31c66b14ae202b71d36d132d1b5a8957ed5839',
      linkURL: 'RegisterLiveIn',
    },
    {
      serviceID: 3,
      name: 'Date',
      description: 'Enjoy memorable dates with our personalized date services.',
      imageUrl: 'https://img.freepik.com/free-photo/content-people-clinking-with-glasses-cafe_23-2147735749.jpg?w=1380&t=st=1700882764~exp=1700883364~hmac=94a1619fd8172fc0497f038215fe8930388e7f6712a95511f676d0a0738fa39c',
      linkURL: 'RegisterDating',
    },
    {
      serviceID: 11,
      name: 'Matrimony for NRI',
      description: 'Find your life partner with our matrimony services.',
      imageUrl: 'https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=1380&t=st=1700881604~exp=1700882204~hmac=25a43e327b4c0d39550b7b2e053912a6df1e2b12d1cb525c96278afb236a7a9e',
      linkURL: 'nri',
    },
    {
      serviceID: 4,
      name: 'Sexual and Reproductive Health Care',
      description: 'Comprehensive health care services for your sexual and reproductive well-being.',
      imageUrl: 'https://img.freepik.com/free-photo/cardboard-man-with-equal-rights-chat-bubble_23-2148403573.jpg?w=1380&t=st=1700882630~exp=1700883230~hmac=c0a2514fd234931ab98a7aea725126f47a989005cf0f37f69012f5b101d93904',
      linkURL: 'Health',
    },
    {
      serviceID: 5,
      name: 'Life Style Management Tools',
      description: 'Tools and strategies to manage and enhance your lifestyle.',
      imageUrl: 'https://img.freepik.com/free-photo/workplace-office-technology_155003-4655.jpg?w=1380&t=st=1700882108~exp=1700882708~hmac=8e33eee38968e9fb772abaa0474eec68076797be232f53805a4842fc4ef8b101',
      linkURL: 'LifeStyle',
    },
    {
      serviceID: 6,
      name: 'Books for Healthy and Happy Relationship',
      description: 'Hub for developing and nurturing strong and healthy relationships.',
      imageUrl: 'https://img.freepik.com/free-photo/employee-showing-appreciation-each-other_23-2149357542.jpg?w=1380&t=st=1700882288~exp=1700882888~hmac=35c70b2e88997a75a0f4caaf453351932f3e9f9f27d93f7a3c00f2d65c2e8812',
      linkURL: 'shop',
    },
    {
      serviceID: 7,
      name: 'Event Management Support',
      description: 'Support for event management, including weddings and other functions.',
      imageUrl: 'https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167256.jpg?w=1380&t=st=1700882344~exp=1700882944~hmac=39f2c636a4b3f27b88718bceddf71c5edd301ac31cfeed53e0f9998fabdd67aa',
      linkURL: 'Event',
    },
    {
      serviceID: 8,
      name: 'Higher Eductaion Services in India and Abroad',
      description: 'Workshops for higher education in India and abroad.',
      imageUrl: 'https://img.freepik.com/free-photo/education-academy-certification-curriculum-icon_53876-121144.jpg?w=1380&t=st=1700882376~exp=1700882976~hmac=c3758c144c288bca878b12af00323eb3c607ca9c6ea0eca44610bbbc55a74300',
      linkURL: 'Education',
    },
    {
      serviceID: 9,
      name: 'Consultation for Match Making',
      description: 'Expert consultation services for match making.',
      imageUrl: 'https://img.freepik.com/free-photo/business-scene-with-man-woman_23-2147626557.jpg?w=1380&t=st=1700882442~exp=1700883042~hmac=0ab4f2ae6a57e45719230a2c3a300754b4ff6ffff4eebb776979d4c58ef85b3a',
      linkURL: 'Counseling',
    },
    {
      serviceID: 10,
      name: 'Meeting Coordination',
      description: 'Efficient coordination for meetings and events.',
      imageUrl: 'https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346610.jpg?w=1380&t=st=1700882483~exp=1700883083~hmac=ff8d10bfd0db78401d912a43e2c755180636aa92e532db6ba1f7dfb43d5e90b9',
      linkURL: 'MeetingCoordination',
    },
  ];

  // const handleExploreClick = () => {
  //   // Handle button click and navigate to a new page
  //   navigate(`/${service.linkURL}`); // You can customize the URL as per your requirements
  //   console.log(`/${service.linkURL}`);
  //   console.log(service.serviceID);
  // };
  return (

    <body style={bodyStyles}>
      {/* <div style={curvedImageContainerStyles}>
        <img src={flagB} alt="All" style={{ imageStyles, width: '25%', height: '25%' }} />
      </div> */}
      <Container maxWidth="lg" style={containerStyles}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div style={{ padding: '20px' }}>
              <Typography variant="h5" style={subtitleStyles} paragraph>
                Hey love, Jai Bheem.
              </Typography>
              <Typography variant="h3" style={welcomeStyles} paragraph>
                Welcome to Sammabandha
              </Typography>
              <Typography variant="h3" style={hubInfoStyles} paragraph>
                <span style={subtitleStyles}>
                  Where heart unites, mind enlightens
                </span>
              </Typography>
              <div style={curvedImageContainerStyles}>

                <img src={flagB} alt="All" style={{ imageStyles, width: '25%', height: '25%' }} />
                <Typography variant="body1" style={{ ...nonBoldFontStyles, marginTop: '20px', color: 'blue' }}>
                  The 1st ever social platform dedicated to caste-less, atheists, and LGBTQ+
                  individuals
                  for dating, live-in relationship, and marriage.
                </Typography>
                <Typography variant="body1" style={{ ...nonBoldFontStyles, marginTop: '20px', color: 'green' }}>
                  One hub for Relationships, Education, and Entrepreneurship
                </Typography>
              </div>
              <div style={shineUpContainerStyles}>
                <div style={shineUpItemStyles}>
                  <SvgIcon component={ArrowUpwardIcon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Come up
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  <SvgIcon component={VisibilityIcon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Show up
                  </Typography>
                </div>
                <div style={shineUpItemStyles}>
                  <SvgIcon component={Brightness5Icon} style={iconStyles} />
                  <Typography variant="body1" style={classicFontStyles}>
                    Shine up
                  </Typography>
                </div>
              </div>
              <div style={curvedImageContainerStyles}>
                <img src={mam} alt="All" style={{ imageStyles, width: '75%', height: '75%' }} />
              </div>
              {/* All Image */}
              <div style={curvedImageContainerStyles}>
                {/* <img src={All} alt="All" style={{ imageStyles }} /> */}
                <Typography variant="body1" style={{ ...nonBoldFontStyles, marginTop: '20px' }}>
                  The biggest and most trusted hub for relationships,
                  education, and entrepreneurship
                  from the Ambedkarites to the Ambedkarites.
                </Typography>
              </div>
              {/* How does Sammabandha Work */}
              <div style={curvedContainerStyles}>
                <Typography variant="h2" style={classicFontStyles} paragraph>
                  How does Sammabandha Matrimony Works?
                </Typography>
                {/* Points with Green Tick Icons */}
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Create a free account
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Add your Profile and Preferences
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Search by your Preferences
                  </Typography>
                </div>
                <div style={pointStyles}>
                  <SvgIcon component={CheckCircleOutlineIcon} style={tickIconStyles} />
                  <Typography variant="body1" style={pointTextStyles}>
                    Ready to Meet
                  </Typography>
                </div>
              </div>

              {/* card Items with 5 cards */}
              <Paper style={{ ...paperStyles, marginTop: '10%' }}>
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
                  Based on 1000 Reviews
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
                style={{ marginTop: '20px' }}
                onClick={handleIncrement}
              >
                Date Now
              </Button>
            </div>
          </Grid>
        </Grid>
        {/* Container 2 */}
        {/* <div style={cardStyles}>
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
        </div> */}
        {/* Customize based on */}
        <div style={curvedContainerStyles}>
          <Typography variant="h2" style={classicFontStyles} paragraph>
            Only the Best Is Good Enough
          </Typography>
          <Typography variant="body1" style={nonBoldFontStyles} paragraph>
            Customize your partner, mentor, counselor, and entrepreneur search with filters
            like:
          </Typography>
          {/* Cards with Icons and Text */}
          <div style={cardStyles}>
            <SvgIcon component={FavoriteIcon} style={{ ...iconStyles, color: 'red' }} />
            <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
              Customize based on interests
            </Typography>
          </div>
          <div style={cardStyles}>
            <SvgIcon component={WhatshotIcon} style={{ ...iconStyles, color: 'orange' }} />
            <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
              Customize based on passion
            </Typography>
          </div>
          <div style={cardStyles}>
            <SvgIcon component={LocationOnIcon} style={{ ...iconStyles, color: 'blue' }} />
            <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
              Customize based on location
            </Typography>
          </div>
        </div>
        {/* Why Sammabanhda ? */}
        {/* New Container */}
        <div style={curvedContainerStyles}>
          <Typography variant="h2" style={{ ...classicFontStyles, color: 'green' }} paragraph>
            Why Sammabandha?
          </Typography>
          {/* Cards with Icons and Text */}
          <div style={cardStyles}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
              <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
                <span style={iconTextGap}>Build by community for community</span>
              </Typography>
            </div>
          </div>
          <div style={cardStyles}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
              <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
                <span style={iconTextGap}>Verified Community members</span>
              </Typography>
            </div>
          </div>
          <div style={cardStyles}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
              <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
                <span style={iconTextGap}>Secure Personal Information</span>
              </Typography>
            </div>
          </div>
          <div style={cardStyles}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
              <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
                <span style={iconTextGap}>First largest global community portal</span>
              </Typography>
            </div>
          </div>
          <div style={cardStyles}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon component={CheckCircleOutlineIcon} style={iconStyles} />
              <Typography variant="body1" style={{ ...cardTextStyles, color: 'blue' }}>
                <span style={iconTextGap}>Continuously Trained AI Assistant</span>
              </Typography>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        {/* Carousel Container */}
        <div style={carouselContainerStyles}>
          <Typography variant="h2" style={{ ...classicFontStyles, color: 'green' }} paragraph>
            Millions have found their life partner at Sammabandha
          </Typography>

          {/* Carousel */}
          <div style={{ ...carouselCardStyles, marginTop: '28%' }}>
            {/* Content for Cards */}
            {currentCard === 1 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="h4" style={{ marginBottom: '20px', color: 'green' }}>Priyajit and Monisa</Typography>
                  <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'blue' }}>
                    A couple who find their relationship to be based on friendship
                    from the very beginning
                    and attribute it to the strength of their bond.
                    They gave us a sneak peek into their
                    beautiful story by sharing their memories.
                  </Typography>
                </div>
                <img src={r1} alt="R1" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
              </div>
              <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Priyajit and Monisa</Typography>
            </>
            )}

            {currentCard === 2 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="h4" style={{ marginBottom: '20px', color: 'green' }}>Ajay and Swapna</Typography>
                  <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'blue' }}>
                    A couple who find their relationship to be based on friendship
                    from the very beginning
                    and attribute it to the strength of their bond.
                    They gave us a sneak peek into their
                    beautiful story by sharing their memories.
                  </Typography>
                </div>
                <img src={r2} alt="R2" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
              </div>
              <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'green' }}>- Ajay and Swapna</Typography>
            </>
            )}

            {currentCard === 3 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="h4" style={{ marginBottom: '20px', color: 'green' }}>Sunny and Sandhya</Typography>
                  <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'blue' }}>
                    A couple who find their relationship to be based on friendship
                    from the very beginning
                    and attribute it to the strength of their bond.
                    They gave us a sneak peek into their
                    beautiful story by sharing their memories.
                  </Typography>
                </div>
                <img src={r3} alt="R3" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
              </div>
              <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'green' }}>- Sai and Sandhya</Typography>
            </>
            )}

            {currentCard === 4 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ flex: 1 }}>
                  <Typography variant="h4" style={{ marginBottom: '20px', color: 'green' }}>Mahesh and Namratha</Typography>
                  <Typography variant="body1" style={{ fontSize: '1.8rem', color: 'blue' }}>
                    A couple who find their relationship to be based on friendship
                    from the very beginning
                    and attribute it to the strength of their bond.
                    They gave us a sneak peek into their
                    beautiful story by sharing their memories.
                  </Typography>
                </div>
                <img src={r4} alt="R4" style={{ marginLeft: '20px', width: '300px', height: '400px' }} />
              </div>
              <Typography variant="body1" style={{ fontSize: '1.8rem' }}>- Mahesh and Namratha</Typography>
            </>
            )}
          </div>

          {/* Left Arrow */}
          <SvgIcon component={ArrowBackIcon} style={{ ...arrowStyles, left: '5%' }} onClick={handlePrevCard} />

          {/* Right Arrow */}
          <SvgIcon component={ArrowForwardIcon} style={{ ...arrowStyles, right: '5%' }} onClick={handleNextCard} />
        </div>
        {/* Top Services Sammabandha Offers */}
        <div style={{ ...curvedContainerStyles, marginTop: '45%' }}>
          <Typography variant="h2" style={classicFontStyles} paragraph>
            Top Services Sammabandha Offers
          </Typography>

          {/* Cards with Icons and Text */}
          {/* <div style={cardStyles}>
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
                <span style={iconTextGap}>Educational Workshops</span>
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
                <span style={iconTextGap}>Relationship books</span>
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
          </div> */}
        </div>
        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={service.serviceID}>
              <Card>
                <img src={service.imageUrl} alt={service.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {service.name}
                  </Typography>
                  {/* <Typography color="textSecondary" gutterBottom>
                    {service.description}
                  </Typography> */}
                  <Button variant="contained" color="primary" onClick={() => navigate(`/${service.linkURL}`)}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
        <Footer />
      </Container>
    </body>
  );
}

export default DateNow;
