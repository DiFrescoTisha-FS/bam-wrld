// src/components/UserComponent.js

import React, { useState, useRef, useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { auth } from "../firebase"; // Ensure this is correctly imported
import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaChevronDown } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import axios from 'axios';
import { SignInButton } from './StyledComponents';
import { FcGoogle } from "react-icons/fc";

const UserComponent = () => {
  const { state, dispatch } = useUserContext();
  const { currentUser } = state;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      console.log('Initiating Google Sign-In');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Sign-In successful', user);
      dispatch({ type: "SET_CURRENT_USER", payload: user });

      // Send user info to the backend
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/save-user`, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      });
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {currentUser ? (
        <div className="signed-in-user" onClick={toggleDropdown}>
          <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-10 h-10 rounded-full" />
          <span className="hidden lg:block ml-2">{currentUser.displayName}</span>
          <FaChevronDown className="ml-2" />
          {dropdownOpen && (
            <div ref={dropdownRef} className="dropdown">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-200"
                onClick={handleSignOut}
              >
                <IoMdLogOut size={20} className="mr-2" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      ) : (
          <SignInButton onClick={handleGoogleSignIn}>
          <FcGoogle size={20} className="mr-2" />
          <span>Sign In</span>
        </SignInButton>
      )}
    </div>
  );
};

export default UserComponent;
