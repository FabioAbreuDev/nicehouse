'use client';

import React from 'react';
import Navbar from '../../components/Navbar'; // Import the Navbar component
import { useUser } from "@auth0/nextjs-auth0";

const PainelPage = () => {
  const { user, error, isLoading } = useUser();


  return (
    <div>
      <Navbar /> {/* Place the Navbar component here */}
      <h1>Welcome to the Logged-in Area!</h1>
      <p>{JSON.stringify(user)}</p>
      <p>This is your private content.</p>
    </div>
  );
};

export default PainelPage;
