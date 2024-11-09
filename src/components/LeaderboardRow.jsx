import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LeaderboardRow = ({ place, name, points, change, email, userId }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const sesson = sessionStorage.getItem("jwt");
    if (sesson !== null && sesson !== undefined && sesson !== "") {
      setToken(sesson);
    } else {
      setToken("");
    }
  }, [token]);

  const profileImages = [
    "./src/assets/users/img-1.png",
    "./src/assets/users/img-2.png",
    "./src/assets/users/img-3.png",
    "./src/assets/users/img-4.png",
    "./src/assets/users/img-5.png",
  ];

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex].toString();
  };

  return (
    <Link to={token !== "" ? `/user/${email}` : "#"} className="w-full">
      <div className="flex items-center justify-between py-2 px-2 border-b border-gray-200 last:border-0">
        {/* Place */}
        <div className="w-1/12 text-center">
          {change === "up" ? (
            <span className="text-green-500">▲</span>
          ) : change === "down" ? (
            <span className="text-red-500">▼</span>
          ) : null}{" "}
          {place}
        </div>

        {/* Name */}
        <div className="w-3/12 flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={getRandomProfileImage()}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-2">{name}</span>
        </div>

        {/* Points */}
        <div className="w-2/12 text-right font-bold">{points} PTS</div>
      </div>
    </Link>
  );
};

export default LeaderboardRow;
