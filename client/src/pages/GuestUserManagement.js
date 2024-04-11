import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function GuestUserManagement() {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li onClick={() => setActiveTab('create')}>
              <Link to="/guest-management/create">Create Guest User</Link>
            </li>
            <li onClick={() => setActiveTab('update')}>
              <Link to="/guest-management/update">Update Guest User</Link>
            </li>
            <li onClick={() => setActiveTab('delete')}>
              <Link to="/guest-management/delete">Delete Guest User</Link>
            </li>
          </ul>
        </nav>

        <div className={activeTab === 'create' ? 'active' : ''}>
          <Routes>
            <Route path="/guest-management/create" element={<CreateUser />} />
          </Routes>
        </div>

        <div className={activeTab === 'update' ? 'active' : ''}>
          <Routes>
            <Route path="/guest-management/update" element={<UpdateUser />} />
          </Routes>
        </div>

        <div className={activeTab === 'delete' ? 'active' : ''}>
          <Routes>
            <Route path="/guest-management/delete" element={<DeleteUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default GuestUserManagement;
