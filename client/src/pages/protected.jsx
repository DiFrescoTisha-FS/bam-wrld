import React from 'react';

const ProtectedPage = () => {
  return (
    <div>
      <h1>This is a protected page</h1>
      <p>Only visible to authenticated users.</p>
    </div>
  );
};

export default ProtectedPage;
