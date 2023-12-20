/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

// import Stack from '@mui/material/Stack';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './Components/Home';
import PhotoUpload from './Components/PhotoUpload';
// import Contact from './Components/ProfileForm';
// import Shop from './Components/PreferencesForm';
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
import Plans from './Components/Plans';
import PlanResult from './Components/PlanResult';
import AboutUs from './Components/AboutFounders';
import ResetPassword from './Components/ResetPassword';
import EnterSecurityCode from './Components/EnterSecurityCode';
import Shop from './Components/Shop';
import LocationDialog from './Components/LocationDialog';
import Sha from './Components/ShapyFyMe';
import Education from './Components/Education';
import Business from './Components/Business';
import Counseling from './Components/Counseling';
import Event from './Components/Event';
import Art from './Components/Art';
import RegistrationFormLiveIn from './Components/RegisterLiveIn';
import RegistrationFormDate from './Components/RegisterDate';
import HealthCare from './Components/HealthCare';
import LifeStyle from './Components/LifeStyle';
import MeetingCoordination from './Components/Meeting';
import NRIRegistrationForm from './Components/NRIRegistrationForm';
import RegistrationNew from './Components/RegisterNew';
import RegistrationNewLiveIn from './Components/RegisterNewLivein';
import RegistrationNewDating from './Components/RegisterNewDating';
import RegistrationNRIMatrimony from './Components/RegisterNRIMatrimony';
import PlanAll from './Components/PlanAll';

function Navigation() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Matrimony', link: '/' },
    { text: 'Date', link: '/' },
    { text: 'Live in', link: '/live-in' },
    { text: 'About Us', link: '/aboutus' },
    { text: 'Events', link: '/events' },
    { text: 'Shop', link: '/shop' },
  ];
  const handleItemClick = () => {
    setDrawerOpen(false); // Close the Drawer when a menu item is clicked
  };
  const drawerWidth = 300;
  return (
    <AppBar position="static">
      {/* First Toolbar */}
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sammabandha
        </Typography>
      </Toolbar>

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: drawerWidth,
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemText primary="The App" />
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} onClick={handleItemClick}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Button color="inherit" component={Link} to="/Register">
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
        </Button> */}

      {/* Second Toolbar */}
      {/* <Toolbar>
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
        <Button color="inherit" component={Link} to="/plans">
          Plans
        </Button>
        <Button color="inherit" component={Link} to="/shop">
          Shop
        </Button>
        <Button color="inherit" component={Link} to="/aboutus">
          AboutUs
        </Button>
        <Button color="inherit" component={Link} to="/location">
          Location
        </Button>
        <Button color="inherit" component={Link} to="/">
          Date/ Matrimony
        </Button>
        <Button color="inherit" component={Link} to="/Education">
          Education
        </Button>
        <Button color="inherit" component={Link} to="/Counseling">
          Counseling
        </Button>
        <Button color="inherit" component={Link} to="/Event">
          Event
        </Button>
        <Button color="inherit" component={Link} to="/Business">
          Business
        </Button>
        <Button color="inherit" component={Link} to="/Art">
          Art
        </Button>
        <Button color="inherit" component={Link} to="/sha">
          ShapFy Me
        </Button>
      </Toolbar> */}
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
          path="/RegisterLiveIn"
          element={
            <RegistrationFormLiveIn />
            }
        />
        <Route
          exact
          path="/RegisterDating"
          element={
            <RegistrationFormDate />
            }
        />
        <Route
          exact
          path="/verifyregistration"
          element={<VerifyRegistration />}
        />
        <Route
          exact
          path="/plans"
          element={<Plans />}
        />
        <Route
          exact
          path="/planall"
          element={<PlanAll />}
        />
        <Route
          exact
          path="/paymentstatus"
          element={<PlanResult />}
        />
        <Route
          exact
          path="/aboutus"
          element={<AboutUs />}
        />
        <Route
          exact
          path="/ResetPassword"
          element={<ResetPassword />}
        />
        <Route
          exact
          path="/verifyOTP"
          element={<EnterSecurityCode />}
        />
        <Route
          exact
          path="/shop"
          element={<Shop />}
        />
        <Route
          exact
          path="/location"
          element={<LocationDialog />}
        />
        <Route
          exact
          path="/Education"
          element={<Education />}
        />
        <Route
          exact
          path="/sha"
          element={<Sha />}
        />
        <Route
          exact
          path="/Business"
          element={<Business />}
        />
        <Route
          exact
          path="/Counseling"
          element={<Counseling />}
        />
        <Route
          exact
          path="/Event"
          element={<Event />}
        />
        <Route
          exact
          path="/Art"
          element={<Art />}
        />
        <Route
          exact
          path="/LifeStyle"
          element={<LifeStyle />}
        />
        <Route
          exact
          path="/Health"
          element={<HealthCare />}
        />
        <Route
          exact
          path="/MeetingCoordination"
          element={<MeetingCoordination />}
        />
        <Route
          exact
          path="/nri"
          element={<NRIRegistrationForm />}
        />
        <Route
          exact
          path="/registernew"
          element={<RegistrationNew />}
        />
        <Route
          exact
          path="/registernewlive"
          element={<RegistrationNewLiveIn />}
        />
        <Route
          exact
          path="/registernewdating"
          element={<RegistrationNewDating />}
        />
        <Route
          exact
          path="/nriregister"
          element={<RegistrationNRIMatrimony />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
