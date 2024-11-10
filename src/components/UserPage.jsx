import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showAlert } from "../utils/alertUtil";
import { getUserByEmail, updateUserPoints } from "../api/userAPI";

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState("");

  useEffect(() => {
    // Fetch user data using the userId
    getUserByEmail(userId).then((data) => {
      setUser(data.data);
      setPoints(data.data.points); // Initialize points state
    });
  }, [userId]);

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updating points for user:", user.email);
    console.log("New points:", points);
    try {
      const response = await updateUserPoints(user.email, points);
      if (response.success === "true") {
        showAlert({
          title: "Success",
          text: "Points updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        showAlert({
          title: "Error",
          text: "Failed to update points",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      showAlert({
        title: "Error",
        text: "Something Went Wrong",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="flex justify-center p-10">
      <div className="bg-white shadow-md rounded p-6 w-[30rem]">
        <h1 className="text-2xl font-bold mb-4">Update Points</h1>
        {user ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <p className="border rounded py-2 px-3 text-gray-700">
                {user.name}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <p className="border rounded py-2 px-3 text-gray-700">
                {user.email}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Points
              </label>
              <input
                type="number"
                value={points}
                onChange={handlePointsChange}
                className="border rounded py-2 px-3 text-gray-700 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Points
            </button>
          </form>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
