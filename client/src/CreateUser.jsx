import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './CreateUsers.css'; 

function CreateUsers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const navigate = useNavigate();   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,phone,date,nationality})
        .then(result => {
            console.log(result)
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
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
            <div className="container">
                <div className="form-container">
                    <h2>Create Users</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            Name:
                            <input 
                                className="input"
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </label>
                        <label className="label">
                            Email:
                            <input 
                                className="input"
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </label>
                        <label className="label">
                            Phone:
                            <input 
                                className="input"
                                type="text" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </label>
                        <label className="label">
                            Date:
                            <input 
                                className="input"
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                required 
                            />
                        </label>
                        <label className="label">
                            Nationality:
                            <input 
                                className="input"
                                type="text" 
                                value={nationality} 
                                onChange={(e) => setNationality(e.target.value)} 
                                required 
                            />
                        </label>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUsers;
