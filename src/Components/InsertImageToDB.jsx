import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function InsertImageToDB() {
  const handleInsertImage = () => {
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,

    };
    axios.get('/api/insertImage', { headers })
      .then((response) => {
        if (response.status === 200) {
          alert('Image inserted successfully.');
        } else {
          alert('Image insertion failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred.');
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleInsertImage}
      >
        Insert Image to Database
      </Button>
    </div>
  );
}

export default InsertImageToDB;
