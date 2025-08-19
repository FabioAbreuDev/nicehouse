'use client';

import React from 'react';
import Navbar from '../../components/Navbar'; // Import the Navbar component

const PainelPage = () => {
  return (
    <div>
      <Navbar /> {/* Place the Navbar component here */}
      <h1>Welcome to the Logged-in Area!</h1>
      <p>This is your private content.</p>
    </div>
  );
};

export default PainelPage;
