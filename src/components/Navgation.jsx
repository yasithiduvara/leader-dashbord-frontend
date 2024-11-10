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
    <div className="relative flex justify-between items-center p-4 bg-gray-800">
      <div className="flex space-x-4">
        <Link to={"/"}>
          <div className="text-white px-4 py-2 transition duration-300 ease-in-out hover:text-[#8dc2ff] hover:underline">
            Leaderboard
          </div>
        </Link>

        <Link to={"/leaders"}>
          <div className="text-white px-4 py-2 transition duration-300 ease-in-out hover:text-[#8dc2ff] hover:underline">
            Leaders
          </div>
        </Link>
      </div>

      <div className="ml-auto">
        <Link to={"/login"}>
          <button
            className={`text-white no-underline px-4 py-2 rounded-full transition duration-200 ease-in-out ${
              token === "" ? "hover:bg-green-500" : "hover:bg-[#7a2626]"
            }`}
          >
            {token === "" ? "Log In" : "Log Out"}
          </button>
        </Link>
      </div>
    </div>

//     <div className="relative h-[50px] flex justify-between items-center p-4 bg-[#011636]">
//      <div className="flex space-x-4">
//          <Link to={"/"}>
//          <div className="text-white px-4 py-2 transition duration-300 ease-in-out hover:text-[#8dc2ff] hover:underline">
//   Leaderboard
// </div>
//          </Link>

//          <Link to={"/leaders"}>
//            <div className="text-white px-4 py-2 transition duration-300 ease-in-out hover:text-[#8dc2ff] hover:underline">
//              Leaders
//            </div>
//          </Link>
//        </div>
//     </div>
  );
};

export default Navigation;
