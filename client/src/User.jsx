import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./navbar";

function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
      };

    useEffect(() => {
        loadUsers();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const loadUsers = () => {
        axios.get('http://localhost:3001/')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }

    const navigateToCreateUser = () => {
        navigate('/create'); 
    };


    const onDeleteUser = (userId) => {
        axios.delete(`http://localhost:3001/deleteUser/${userId}`)
            .then(() => loadUsers())
            .catch(err => console.log(err));
    };

    return (
        <>
            <Navbar />
            <div className="users-container">
                <div className="header-title">Students Entry List</div>
                <button className="create-guest-btn" onClick={navigateToCreateUser}>Create New Guest</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Nationality</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{formatDate(user.date)}</td>
                                <td>{user.nationality}</td>
                                <td>
                                <button className="action-btn edit"><Link className="text-white text-decoration-none" to={`/update/${user._id}`}>Edit</Link></button> {/* Pass the _id to the function */}
                                    <button 
                                        className="action-btn delete" 
                                        onClick={() => onDeleteUser(user._id)}>Delete</button> 
                                    <button 
                                        className="action-btn profile" 
                                        onClick={() => navigateTo("/profile")}>Profile</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">Total Students</td>
                            <td>{users.length}</td>
                        </tr>
                    </tfoot>
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
