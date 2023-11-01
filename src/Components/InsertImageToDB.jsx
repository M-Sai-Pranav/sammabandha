import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function InsertImageToDB() {
  const handleInsertImage = () => {
    axios.get('/api/insertImage')
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
      <Link to="/nav">
        <button>
          nav
        </button>
      </Link>
    </div>
  );
}

export default InsertImageToDB;
