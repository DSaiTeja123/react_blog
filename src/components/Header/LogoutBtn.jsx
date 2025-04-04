import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate('/'); // Navigate to homepage after logout
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 shadow-md 
                 hover:from-red-600 hover:to-red-800 hover:shadow-lg 
                 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
