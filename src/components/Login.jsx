import React, { useEffect, useState } from "react";
import { loginUser } from "../api/userAPI";
import { showAlert } from "../utils/alertUtil";

const Login = () => {
  useEffect(() => {
    isLoggin();
  }, []);

  const isLoggin = () => {
    const sesson = sessionStorage.getItem("jwt");
    if (sesson !== null && sesson !== undefined && sesson !== "") {
      sessionStorage.removeItem("jwt");
      window.location.href = "/";
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const username = e.target.username.value;
    const password = e.target.password.value;

    //check if username match email pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(username)) {
      showAlert({
        title: "Error!",
        text: "Invalid Email Address",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    try {
      // Call the login API
      const response = await loginUser(username, password);
      // Handle successful login (for example, redirect or store user data)
      console.log("Login successful:", response);

      if (response.success === "false") {
        showAlert({
          title: "Error!",
          text: "Login Failed, Please try again",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else {
        sessionStorage.setItem("jwt", response.token);

        showAlert({
          title: "Success!",
          text: "Login Successful",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      showAlert({
        title: "Error!",
        text: "Login Failed. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        timer: 3000, // Alert will close automatically after 3 seconds
      });
    }
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="  bg-gray-800 w-[24rem] min-h-[40vh] rounded-lg shadow-lg p-6 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-1 text-sm font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-3 py-2 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block mb-1 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
