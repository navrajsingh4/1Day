import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-skyblue">
                <div className="container">
                    <Link className="navbar-brand" to="/">Users App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/update">Update User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Main Content */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <h1 className="mb-4">Guest Entering Web-Services</h1>
                            <p className="lead">Welcome to our guest registration page! We're excited to have you join us. Our platform simplifies the process of registering guests for your events, ensuring a smooth and efficient experience for both hosts and attendees. Whether you're planning a wedding, conference, or social gathering, our user-friendly interface allows guests to easily enter their information, including names, contact details, and any additional preferences. By utilizing our service, hosts can accurately track the number of guests attending each event, helping them plan and prepare accordingly. Join us today to streamline your guest registration process and make your events unforgettable!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
