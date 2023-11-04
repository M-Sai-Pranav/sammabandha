/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

// import Stack from '@mui/material/Stack';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './Components/Home';
import PhotoUpload from './Components/PhotoUpload';
// import Contact from './Components/ProfileForm';
// import Shop from './Components/PreferencesForm';
import Book from './Components/Book';
// import Item from './Components/RegistrationForm';
import RegistrationForm from './Components/RegistrationForm';
import PreferencesForm from './Components/PreferencesForm';
import ProfileForm from './Components/ProfileForm';
import LoginForm from './Components/LoginForm';
import BadgeList from './Components/BadgeList';
import RolesPermissionsTable from './Components/RolesPermissionsTable';
import RolesPermissionsDropdown from './Components/RolesPermissionsDropdown';
import UsersRolesDropdown from './Components/UsersRolesDropdown';
import UserRolesList from './Components/DisplayUsersAndRoles';
import RolePermissionsList from './Components/DisplayRolesandPermissions';

import NewHome from './Components/New';
import Home1 from './Components/NewHome';
import NewLogIn from './Components/NewLogIn';
import DateNow from './Components/DateNow';
import VerifyRegistration from './Components/VerifyRegistration';

function Navigation() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sammabandh
        </Typography>
        <Button color="inherit" component={Link} to="/Register">
          Registration
        </Button>
        <Button color="inherit" component={Link} to="/Login">
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
        <Button color="inherit" component={Link} to="/book">
          Books
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const [header, setHeader] = useState(false);
  const displayHeader = () => {
    console.log(window.location.pathname);
    if (['/register', '/Login'].includes(window.location.pathname)) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    displayHeader(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <BrowserRouter>
      <Navigation />
      {
        false && (header) && <Navigation />
      }
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <Home />

            }
        />

        <Route
          exact
          path="/PhotoUpload"
          element={
            <PhotoUpload />
            }
        />
        <Route
          exact
          path="/PreferencesForm"
          element={
            <PreferencesForm />
            }
        />
        <Route
          exact
          path="/ProfileForm"
          element={
            <ProfileForm />
            }
        />
        <Route
          exact
          path="/"
          element={
            <DateNow />
            }
        />
        <Route
          exact
          path="/book"
          element={
            <Book />
            }
        />
        <Route
          exact
          path="/Login"
          element={
            <NewLogIn />
            }
        />
        <Route
          exact
          path="/BadgeList"
          element={
            <BadgeList />
            }
        />
        <Route
          exact
          path="/rolesandpermissions"
          element={
            <RolesPermissionsTable />

            }
        />
        <Route
          exact
          path="/setrolesandpermissions"
          element={
            <RolesPermissionsDropdown />

            }
        />

        <Route
          exact
          path="/usersansroles"
          element={
            <UsersRolesDropdown />
            }
        />

        <Route
          exact
          path="/displayusersansroles"
          element={
            <UserRolesList />
            }
        />

        <Route
          exact
          path="/displayrolespermissionstable"
          element={
            <RolePermissionsList />
            }
        />
        <Route
          exact
          path="/Register"
          element={
            <RegistrationForm />
            }
        />
        <Route
          exact
          path="/verifyregistration"
          element={<VerifyRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
