import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const navigateToCreateUser = () => {
        navigate('/create'); // Use the navigate method to navigate
    };

    const navigateToUpdateUser = (id) => {
        navigate(`/update/${id}`); // Use the navigate method to navigate
    }

    return (
        <>
            <div className="users-container">
                <div className="header-title">Guest List Logger</div>
                <button className="create-guest-btn" onClick={navigateToCreateUser}>Create New Guest</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Guest Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date and Time</th>
                            <th>Nationality</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.date}</td>
                                <td>{user.nationality}</td>
                                <td>
                                    <button className="action-btn edit" onClick={navigateToUpdateUser}>Update</button>
                                    <button className="action-btn delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style>{`
                .users-container {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                .header-title {
                    text-align: center;
                    font-size: 50px;
                    margin: 20px 0;
                    color: blue;
                    font-weight: bold;
                }

                .create-guest-btn {
                    background-color: #4CAF50; 
                    color: white;
                    padding: 10px 24px;
                    margin-bottom: 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    float: right;
                }

                .table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .table th, .table td {
                    text-align: left;
                    padding: 8px;
                    border-bottom: 1px solid #ddd;
                }

                .table th {
                    background-color: #f2f2f2;
                }

                .action-btn {
                    margin-right: 5px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    padding: 5px 10px;
                }

                .edit {
                    background-color: #007BFF; 
                    color: white;
                }

                .delete {
                    background-color: #F44336; 
                    color: white;
                }

                .create-guest-btn:hover, .action-btn:hover {
                    opacity: 0.8;
                }
            `}</style>
        </>
    );
}

export default Users;