'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: '#fff'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        NiceHouse
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li style={{ marginRight: '1.5rem' }}>
          <Link href="/painel">
            <span style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</span>
          </Link>
        </li>
        <li style={{ marginRight: '1.5rem' }}>
          <Link href="/painel/profile">
            <span style={{ color: '#fff', textDecoration: 'none' }}>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/painel/settings">
            <span style={{ color: '#fff', textDecoration: 'none' }}>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
