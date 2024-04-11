import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Users App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/create">Create User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/update">Update User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h1 className="display-4 mb-4">Guest Entering Web-Services</h1>
              <p className="lead">Welcome to our guest registration page! We're excited to have you join us. Our platform simplifies the process of registering guests for your events, ensuring a smooth and efficient experience for both hosts and attendees. Whether you're planning a wedding, conference, or social gathering, our user-friendly interface allows guests to easily enter their information, including names, contact details, and any additional preferences. By utilizing our service, hosts can accurately track the number of guests attending each event, helping them plan and prepare accordingly. Join us today to streamline your guest registration process and make your events unforgettable!</p>
              <Link to="/create" className="btn btn-primary btn-lg">Create User</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;