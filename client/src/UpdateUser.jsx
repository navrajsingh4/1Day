import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import './CreateUsers.css';

function UpdateUsers() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                console.log(result);
                const { name, email, phone, date, nationality } = result.data;
                setName(name);
                setEmail(email);
                setPhone(phone);
                setDate(date);
                setNationality(nationality);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, phone, date, nationality })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <h2>Update</h2>
                            <label className="label">
                                Name:
                                <input
                                    className="input"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label className="label">
                                Email:
                                <input
                                    className="input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <br />
                            <label className="label">
                                Phone:
                                <input
                                    className="input"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>
                            <br />
                            <label className="label">
                                Date:
                                <input
                                    className="input"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </label>
                            <br />
                            <label className="label">
                                Nationality:
                                <input
                                    className="input"
                                    type="text"
                                    value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                />
                            </label>
                            <br />
                            <button className="button" type="submit">Update User</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UpdateUsers;
