import React, { useEffect, useState } from 'react';
// import { getAllUsers } from './api/userAPI';
import { getAllUsers } from '../api/userAPI';
import LeaderboardRow from './LeaderboardRow';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.data);  // Assuming the response data is in the 'data' field
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="leaderboard">
      <div className="flex items-center justify-between py-2 px-2 border-b border-gray-200 last:border-0">
        <div className="w-1/12">Place</div>
        <div className="w-3/12">Name</div>
        <div className="w-2/12">Points</div>
      </div>
      {users.map((user, index) => (
        <LeaderboardRow
          key={user._id}
          place={index + 1}
          name={user.name}
          points={user.points}
          email={user.email}
          userId={user._id}  // Passing the user ID to LeaderboardRow
          change={null}  // Optional: Add logic for up/down change if needed
        />
      ))}
    </div>
  );
};

export default Leaderboard;