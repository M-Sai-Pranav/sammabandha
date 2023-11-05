// PlanResult.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlanResult() {
  const { success, plan } = useParams();
  const [userID, setUserID] = useState(localStorage.getItem('userID')); // Get userID from localStorage

  useEffect(() => {
    if (success === 'true') {
      // Make an Axios call to insert userID and plan into the plan table
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios.post('/api/profile/insert-plan', { userID, plan }, { headers });
      console.log('plan userID ', plan, userID);
      console.log(' success ', success);
    }
  }, [success, plan, userID]);

  return (
    <div>
      {success === 'true' ? (
        <p>
          Plan added for user
          {userID}
        </p>
      ) : (
        <p>
          Plan cancelled for user
          {userID}
        </p>
      )}
    </div>
  );
}

export default PlanResult;
