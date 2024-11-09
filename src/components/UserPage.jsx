import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data using the userId
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);  // Adjust API endpoint as necessary
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Points: {user.points}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserPage;
