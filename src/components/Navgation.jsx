
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navigation = () => {

 const [token, setToken] = useState("");

  useEffect(() => {
    const sesson = sessionStorage.getItem('jwt');
    if (sesson !== null && sesson !== undefined && sesson !== '') {
      setToken(sesson);
    } else {
      setToken('');
    }

  }, [token]);

  return (
    <div className="relative navigation-menu">
      {/* Button to toggle the popup */}

      <Link to={'/login'}>
      <button
        className="text-white no-underline px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-gray-800"
      >
        {token === '' ? 'Log In' : 'Log Out'}
      </button>
      </Link>



    </div>
  );
};

export default Navigation;
