import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUsers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const navigate =useNavigate()   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,phone,date,nationality})
        .then(result => {
            console.log(result)
            navigate('/')
            })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Create Users</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <br />
                <label>
                    Nationality:
                    <input 
                        type="text" 
                        value={nationality} 
                        onChange={(e) => setNationality(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateUsers;
