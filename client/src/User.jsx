import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './User.css'; 

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container1">
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
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Nationality</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((display, index) => (
                        <tr key={index}>
                            <td>{display.name}</td>
                            <td>{display.email}</td>
                            <td>{display.phone}</td>
                            <td>{display.date}</td>
                            <td>{display.nationality}</td>
                            <td><button className="btn btn-primary">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Users;
