import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sammabandh
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Registration
        </Button>
        <Button color="inherit" component={Link} to="/LoginForm">
          Log In
        </Button>
        <Button color="inherit" component={Link} to="/PreferencesForm">
          Preferences
        </Button>
        <Button color="inherit" component={Link} to="/ProfileForm">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/PhotoUpload">
          PhotoUpload
        </Button>
        <Button color="inherit" component={Link} to="/home">
          User Data
        </Button>
        <Button color="inherit" component={Link} to="/BadgeList">
          Find Matches
        </Button>
        <Button color="inherit" component={Link} to="/rolesandpermissions">
          Roles and Permissions
        </Button>
        <Button color="inherit" component={Link} to="/setrolesandpermissions">
          Set Roles and Permissions
        </Button>
        <Button color="inherit" component={Link} to="/usersansroles">
          Users and Roles
        </Button>
        <Button color="inherit" component={Link} to="/otp">
          OTP
        </Button>
        {/* <Button color="inherit" component={Link} to="/displayusersansroles">
            Display Users and Roles
        </Button> */}
        <Button color="inherit" component={Link} to="/book">
          Books
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
