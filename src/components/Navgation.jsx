import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const session = sessionStorage.getItem("jwt");
    if (session !== null && session !== undefined && session !== "") {
      setToken(session);
    } else {
      setToken("");
    }
  }, [token]);

  return (
    <div className="relative navigation-menu flex justify-between items-center p-4 bg-gray-800">
      <div className="flex space-x-4">
        <Link to={"/"}>
          <button className="text-white no-underline px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
            Leaderboard
          </button>
        </Link>

        <Link to={"/leaders"}>
          <button className="text-white no-underline px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-gray-800">
            Leaders
          </button>
        </Link>
      </div>

      <div className="ml-auto">
        <Link to={"/login"}>
          <button
            className={`text-white no-underline px-4 py-2 rounded-full transition duration-200 ease-in-out ${
              token === "" ? "hover:bg-green-500" : "hover:bg-red-500"
            } hover:text-gray-800`}
          >
            {token === "" ? "Log In" : "Log Out"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
