// Navbar.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './navbarstyles.css';
// import { Link } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li><button onClick={() => navigateTo("/")}>Home</button></li>
          <li><button onClick={() => navigateTo("/create")}>Create</button></li>
          <li><button onClick={() => navigateTo("/users")}>Users</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;