import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyLink = () => {
  return (
    <Link to="/privacy" target="_blank" className="text-blue-500 hover:underline">
      Privacy Policy
    </Link>
  );
};

export default PrivacyLink;
