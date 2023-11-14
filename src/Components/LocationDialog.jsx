// AIzaSyA9BJcL6YG5NPy5xux19X0ItoJoTA1M8ho

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Haversine formula
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance; // Distance in kilometers
}

function LocationDialog() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [home, setHome] = useState(null);
  const [work, setWork] = useState(null);
  const [distance, setDistance] = useState(null);

  const [locations] = useState([
    {
      lat: 40.7128, lng: -74.0060, title: 'New York, NY', color: 'blue',
    },
    {
      lat: 34.0522, lng: -118.2437, title: 'Los Angeles, CA', color: 'red',
    },
    {
      lat: 51.5074, lng: -0.1278, title: 'London, UK', color: 'green',
    },
    // Add more locations as needed with different colors
  ]);

  const [mapLoaded, setMapLoaded] = useState(false);
  const initMap = () => {
    setMapLoaded(true);
  };

  useEffect(() => {
    const userDecision = localStorage.getItem('locationPermission');
    if (!userDecision) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAllow = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
          );
          const data = await response.json();
          const { city } = data.address;
          setCity(city);
        } catch (error) {
          console.error('Error getting city name:', error.message);
        }

        setLocation({ lat: latitude, lng: longitude });
        localStorage.setItem('locationPermission', 'allowed');
        setOpen(false);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      },
    );
  };

  const handleCalculateDistance = () => {
    if (home && work) {
      const distance = calculateDistance(
        home.lat,
        home.lng,
        work.lat,
        work.lng,
      );
      setDistance(distance);
    }
  };

  const handleHomeChange = (event) => {
    setHome(JSON.parse(event.target.value));
  };

  const handleWorkChange = (event) => {
    setWork(JSON.parse(event.target.value));
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 0,
    lng: 0,
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Allow Access to Your Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This webpage wants to access your location. Do you want to allow it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Don't Allow
          </Button>
          <Button onClick={handleAllow} color="primary">
            Allow
          </Button>
        </DialogActions>
      </Dialog>

      {location && (
        <div>
          <p>
            Your current location is
            {' '}
            {city}
          </p>

          <label htmlFor="home">Home (lat, lng): </label>
          <input type="text" id="home" onChange={handleHomeChange} placeholder='{"lat": 40.7128, "lng": -74.0060}' />
          <label htmlFor="work">Work (lat, lng): </label>
          <input type="text" id="work" onChange={handleWorkChange} placeholder='{"lat": 34.0522, "lng": -118.2437}' />

          <Button variant="contained" color="primary" onClick={handleCalculateDistance}>
            Calculate Distance
          </Button>

          <LoadScript
            googleMapsApiKey="AIzaSyA9BJcL6YG5NPy5xux19X0ItoJoTA1M8ho"
            onLoad={initMap} // Call initMap when the script is loaded
          >
            {mapLoaded && (
            <GoogleMap mapContainerStyle={mapStyles} zoom={2} center={defaultCenter}>
              {/* Displaying markers for the locations */}
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location}
                  title={location.title}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillColor: location.color,
                    fillOpacity: 0.8,
                    strokeWeight: 0,
                    scale: 10,
                  }}
                />
              ))}
              {home && <Marker position={home} label="Home" />}
              {work && <Marker position={work} label="Work" />}
            </GoogleMap>
            )}
          </LoadScript>

          {distance && (
            <p>
              Distance between home and work:
              {' '}
              {distance.toFixed(2)}
              {' '}
              km
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default LocationDialog;
