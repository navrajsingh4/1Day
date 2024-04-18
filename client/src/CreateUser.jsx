import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './CreateUsers.css'; 
import Navbar from "./navbar";

function CreateUsers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const [file, setFile] = useState();
    const navigate =useNavigate()   

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('date', date);
            formData.append('nationality', nationality);
            formData.append('file', file);
    
            axios.post("http://localhost:3001/createUser", formData)
                .then(result => {
                    console.log(result);
                    navigate('/');
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    

    return (
        <div>
            <Navbar />
            <main>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                    <h2>Enter Student</h2>
                        <label className="label">
                            Name:
                            <input 
                                className="input"
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </label><br/>
                        <label className="label">
                            Email:
                            <input 
                                className="input"
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </label><br/>
                        <label className="label">
                            Phone:
                            <input 
                                className="input"
                                type="text" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </label><br/>
                        <label className="label">
                            Date:
                            <input 
                                className="input"
                                type="date" 
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                required 
                            />
                        </label><br/>
                        <label className="label">
                            Nationality:
                            <input 
                                className="input"
                                type="text" 
                                value={nationality} 
                                onChange={(e) => setNationality(e.target.value)} 
                                required 
                            />
                        </label><br />
                        <label className="label">
                            <input type="file"
                            className="input"
                            onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <br/>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
    );
}

export default CreateUsers;
