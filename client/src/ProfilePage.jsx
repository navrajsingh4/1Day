import React from 'react';
import Navbar from './navbar';

const ProfilePage = () => {
  return (
    <div><Navbar/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      
      <img src="./public/profile.png" alt="Profile Picture" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      <h1>Name</h1>
      <p>Email</p>
      <p>Phone</p>
      <p>Date</p>
      <p>Nationality</p>
    </div>
    </div>
  );
};

export default ProfilePage;