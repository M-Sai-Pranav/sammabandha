import React from 'react';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const curvedContainerStyles = {
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  textAlign: 'center',
};

const useStyles = makeStyles((theme) => ({
  iconButton: {
    margin: theme.spacing(1),
  },
  largeIcon: {
    fontSize: '36px', // Adjust the size as needed
  },
}));
const cardTextStyles = {
  fontSize: '1.5rem',
};

function Footer() {
  const classes = useStyles();

  const socialMediaLinks = {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
  };

  return (
    <div style={curvedContainerStyles}>
      <Typography variant="body1" style={cardTextStyles}>
        Connect with us here:
      </Typography>
      <div>
        <IconButton
          className={classes.iconButton}
          component="a"
          href={socialMediaLinks.instagram}
          target="_blank"
        >
          <InstagramIcon className={classes.largeIcon} />
        </IconButton>

        <IconButton
          className={classes.iconButton}
          component="a"
          href={socialMediaLinks.facebook}
          target="_blank"
        >
          <FacebookIcon className={classes.largeIcon} />
        </IconButton>

        <IconButton
          className={classes.iconButton}
          component="a"
          href={socialMediaLinks.linkedin}
          target="_blank"
        >
          <LinkedInIcon className={classes.largeIcon} />
        </IconButton>

        <IconButton
          className={classes.iconButton}
          component="a"
          href={socialMediaLinks.twitter}
          target="_blank"
        >
          <TwitterIcon className={classes.largeIcon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
