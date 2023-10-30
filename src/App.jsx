import React, { useState } from 'react';
import logo1 from '../assets/images/logo.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Components/Home';

import PhotoUpload from './Components/PhotoUpload';
import Contact from './Components/ProfileForm';

import Shop from './Components/PreferencesForm';

import Book from './Components/Book';
import Navigation from './Components/Navbar';
import Item from './Components/RegistrationForm';
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

function App() {
    return (
      <>
      
      <Router>
            <Routes>
            
            <Route exact path = '/nav' element = {
                  <Navigation/>
                  
            }/>
            <Route exact path = '/home' element = {
                  <Home/>
                  
            }/>
              
            <Route exact path='/PhotoUpload' element={
                <PhotoUpload/>
            }/>
            <Route exact path='/PreferencesForm' element={
                <PreferencesForm/>
            }/>
            <Route exact path='/ProfileForm' element={
                <ProfileForm/>
            }/>
            <Route exact path='/book' element={
                <Book/>
            }/>
             <Route exact path='/' element={
                <RegistrationForm/>
            }/>
              <Route exact path='/LoginForm' element={
                <LoginForm/>
            }/>
            BadgeList
            <Route exact path='/BadgeList' element={
                <BadgeList/>
            }/>
            <Route exact path = '/rolesandpermissions' element = {
                  <RolesPermissionsTable/>
                  
            }/>
            <Route exact path = '/setrolesandpermissions' element = {
                  <RolesPermissionsDropdown/>
                  
            }/>
            
            <Route exact path = '/usersansroles' element = {
                  <UsersRolesDropdown/>   
            }/>

            <Route exact path = '/displayusersansroles' element = {
                  <UserRolesList/>   
            }/>

            <Route exact path = '/displayrolespermissionstable' element = {
                  <RolePermissionsList/>   
            }/>
            </Routes>
            
      </Router>
      
      </>
    );
  }
  
  export default App;











