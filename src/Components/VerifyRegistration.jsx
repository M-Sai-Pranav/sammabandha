import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

function VerifyRegistration() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const verifyToken = searchParams.get('verifytoken');

  useEffect(() => {
    async function verifyUser() {
      if (verifyToken) {
        try {
          const response = await axios.post('/api/auth/verify', { verifyToken }); // Adjust the URL as needed
          console.log('Verification Response:', response.data);

          // Check if the verification was successful (customize this condition)
          if (response.status === 200) {
            // Redirect the user to the login page
            navigate('/Login');
          }
        } catch (error) {
          console.error('Error verifying registration:', error);
        }
      }
    }

    verifyUser();
  }, [verifyToken, navigate]);

  return (
    <div>
      <p>Verifying registration...</p>
    </div>
  );
}

export default VerifyRegistration;
