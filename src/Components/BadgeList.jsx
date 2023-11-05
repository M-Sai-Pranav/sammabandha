import React, { useState } from 'react';
import {
  Button,
  Chip,
  Container,
  makeStyles,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  // Your existing styles here
  badge: {
    margin: theme.spacing(0.5),
    backgroundColor: 'white',
  },
  selectedBadge: {
    backgroundColor: 'blue',
    color: 'white',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'block',
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  profilePicture: {
    maxWidth: '100%',
    height: 'auto',
  },

  leftPane: {
    flex: 0.3,
  },
  rightPane: {
    flex: 0.7,
  },
}));

function BadgeList() {
  // const classes = useStyles();
  // ... (your existing state and functions)
  const classes = useStyles();
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [formData, setFormData] = useState({
    religion: '',
    caste: '',
    marital_status: '',
    minHeight: '',
    maxHeight: '',
    minSalary: '',
    maxSalary: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const togglePreference = (preference) => {
    if (!selectedPreferences.includes(preference)) {
      setSelectedPreferences((prevSelected) => [...prevSelected, preference]);
    }
  };

  const handleInputChange = (preference, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [preference]: value,
    }));
    togglePreference(preference);
  };

  const handleFindMatches = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      const response = await axios.post('/api/profile/search-profiles', formData, { headers });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Left Pane: Badge List */}
        <Grid item xs={12} sm={4} className={classes.leftPane}>
          <div className={classes.badgeContainer}>
            {['religion', 'caste', 'marital_status', 'minHeight', 'maxHeight', 'minSalary', 'maxSalary'].map((preference, index) => (
              <div key={index}>
                <Chip
                  label={preference}
                  className={`${classes.badge} ${
                    selectedPreferences.includes(preference) ? classes.selectedBadge : ''
                  }`}
                  onClick={() => togglePreference(preference)}
                />
                <form
                  className={selectedPreferences.includes(preference) ? classes.form : ''}
                >
                  <TextField
                    label={`Enter ${preference}`}
                    fullWidth
                    onChange={(e) => handleInputChange(preference, e.target.value)}
                  />
                </form>
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFindMatches}
            className={classes.button}
          >
            Find Matches
          </Button>
        </Grid>

        {/* Right Pane: Search Results */}
        <Grid item xs={12} sm={8} className={classes.rightPane}>
          <Grid container spacing={2}>
            {searchResults.map((result, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6">
                      About:
                      {' '}
                      {result.about}
                    </Typography>
                    <Typography>
                      Occupation:
                      {' '}
                      {result.occupation}
                    </Typography>
                    <Typography>
                      Education:
                      {' '}
                      {result.education}
                    </Typography>
                    <Typography>
                      Location:
                      {' '}
                      {result.location}
                    </Typography>
                    <Typography>
                      Religion:
                      {' '}
                      {result.religion}
                    </Typography>
                    <Typography>
                      Caste:
                      {' '}
                      {result.caste}
                    </Typography>
                    <Typography>
                      Marital Status:
                      {' '}
                      {result.marital_status}
                    </Typography>
                    <Typography>
                      Height:
                      {' '}
                      {result.height}
                    </Typography>
                    <Typography>
                      Weight:
                      {' '}
                      {result.weight}
                    </Typography>
                    <Typography>
                      Salary:
                      {' '}
                      {result.salary}
                    </Typography>
                    <Typography>
                      Hobbies:
                      {' '}
                      {result.hobbies}
                    </Typography>
                    <Typography>
                      Interests:
                      {' '}
                      {result.interests}
                    </Typography>
                    {result.profile_picture && (
                    <div>
                      <strong>Profile Picture:</strong>
                      <img
                        src={result.profile_picture}
                        alt="Profile"
                        className={classes.profilePicture}
                      />
                    </div>
                    )}

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BadgeList;
