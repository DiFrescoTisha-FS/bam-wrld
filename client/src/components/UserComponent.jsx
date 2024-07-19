import React, { useState, useRef, useEffect } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { useClerk } from "@clerk/clerk-react";
import { FaChevronDown } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';

const UserComponent = () => {
  const { state } = useUserContext();
  const { currentUser } = state; // Ensure this is being used
  const { signOut, openSignIn } = useClerk();
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

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log('Current user:', currentUser);
  }, [currentUser]);

  return (
    <div className="lg:block relative bg-black">
      {currentUser ? (
        <div 
          className="flex items-center border-2 border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4" 
          onClick={toggleDropdown}
        >
          <img className="rounded-full w-8 h-8" src={currentUser.imageUrl} alt={currentUser.fullName} />
          <span className="text-[#ac94f4]">{currentUser.fullName}</span>
          <FaChevronDown />
          {dropdownOpen && (
            <div 
              ref={dropdownRef} 
              className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[#ac94f4] rounded-full shadow-xl z-20"
            >
              <button 
                onClick={() => signOut()} 
                className="flex items-center px-2 py-[1px] text-md font-md text-[#010606] hover:text-[#010606] hover:opacity-60"
              >
                <IoMdLogOut size={28} className="mr-2" color="#010606" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button 
          className="flex items-center justify-center gap-2 px-2 py-2.5 rounded-full bg-[#010606] p-1 mt-3 text-[#ac94f4] border-2 border-[#ac94f4] text-md shadow-md shadow-glow cursor-pointer transition-colors hover:opacity-60 hover:border-[#ac94f4] hover:shadow-md" 
          onClick={() => openSignIn()}
        >
          <span className="block text-[#ac94f4] pr-2">Sign in</span>
        </button>
      )}
    </div>
  );
};

export default UserComponent;