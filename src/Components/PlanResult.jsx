// PlanResult.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlanResult() {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  const canceled = urlParams.get('canceled');
  const plan = urlParams.get('plan');
  //   const { success, plan } = useParams();
  const [userID, setUserID] = useState(localStorage.getItem('user_id')); // Get userID from localStorage
  console.log(' success ', success);
  useEffect(() => {
    console.log(' success plan', success, plan);
    if (success === 'true') {
      // Make an Axios call to insert userID and plan into the plan table
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,

      };
      axios.post('/api/profile/insert-plan', { userID, plan }, { headers });
      console.log('plan userID ', plan, userID);
      console.log(' success ', success);
    } else {
      console.log('Payment cancelled');
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
