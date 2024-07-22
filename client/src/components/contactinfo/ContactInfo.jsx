import React, { useState, useEffect, useRef } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { BiSolidContact } from "react-icons/bi";
import {
  CustomButton,
  ContactInfoContainer
} from "./ContactInfoElements";

const ContactInfo = () => {
  const { state } = useUserContext();
  const { currentUser } = state;

  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const loginMessageRef = useRef(null);

  const handleContactInfoToggle = () => {
    setShowLoginMessage(!currentUser);
    setShowContactInfo(!!currentUser && !showContactInfo);
  };

  useEffect(() => {
    if (showLoginMessage) {
      const timer = setTimeout(() => {
        setShowLoginMessage(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showLoginMessage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginMessageRef.current && !loginMessageRef.current.contains(event.target)) {
        setShowLoginMessage(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <CustomButton className="bg-[#ac94f4] text-black" onClick={handleContactInfoToggle}>
        {showContactInfo ? 'Hide Contact Info' : 'Contact Info'} <BiSolidContact />
      </CustomButton>
      {showContactInfo && currentUser && (
        <ContactInfoContainer>
          <p>Email: difrescoc@gmail.com</p>
          <p>Phone: 828-595-3049</p>
        </ContactInfoContainer>
      )}
      {showLoginMessage && (
        <div ref={loginMessageRef} style={{ color: 'red', marginTop: '10px' }}>
          You must be logged in to view contact information.
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
