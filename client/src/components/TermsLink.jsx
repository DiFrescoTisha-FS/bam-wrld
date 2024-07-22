import React from 'react';
import { Link } from 'react-router-dom';

const TermsLink = () => {
  return (
    <Link to="/terms" target="_blank" className="text-blue-500 hover:underline">
      Terms of Service
    </Link>
  );
};

export default TermsLink;
