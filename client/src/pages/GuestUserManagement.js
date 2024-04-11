// GuestUserManagement.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateUsers from './CreateUsers'; // Import the CreateUsers component

function GuestUserManagement() {
  return (
    <div>
      {/* Navigation links can be used to switch between different management tasks */}
      <nav>
        <ul>
          <li>
            <Link to="create">Create Guest User</Link>
          </li>
          {/* Add links for update and delete when those components are created */}
        </ul>
      </nav>

      {/* The Routes for managing guest users */}
      <Routes>
        <Route path="create" element={<CreateUsers />} />
        {/* Add routes for update and delete when those components are created */}
      </Routes>
    </div>
  );
}

export default GuestUserManagement;
