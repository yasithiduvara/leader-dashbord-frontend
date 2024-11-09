import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByEmail } from "../api/userAPI";

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data using the userId
    getUserByEmail(userId).then((data) => {
      setUser(data.data);
    });
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
